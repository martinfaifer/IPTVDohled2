<template>
    <div class="body-1">
        <div v-if="userData.user_role == 'admin'">
            <transition name="fade" mode="out-in">
                <alert-component
                    v-if="status != []"
                    :status="status"
                ></alert-component>
            </transition>
            <v-row>
                <v-col class="d-flex" cols="1" sm="0">
                    <v-select
                        :items="items"
                        v-model="value"
                        label="Typ Alertu"
                        dense
                    ></v-select>
                </v-col>
            </v-row>

            <div>
                <br />

                <v-data-table
                    v-if="value === 'e-mail'"
                    :dense="userData.dense"
                    :headers="headers"
                    :items="mailTableData"
                    :search="search"
                    class="elevation-1 mr-12"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-text-field
                                autofocus
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Hledání..."
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-dialog
                                v-model="neMailDialog"
                                persistent
                                max-width="500px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        color="teal"
                                        dark
                                        class="mb-2"
                                        v-on="on"
                                        >Nový e-mail pro alerty</v-btn
                                    >
                                </template>

                                <!-- dialog zalození noveho mailu-->
                                <v-card>
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="email"
                                                    :rules="mailRule"
                                                    label="e-mailova adresa na kterou se budou posílat alerty"
                                                    autofocus
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="red darken-1"
                                            text
                                            @click="neMailDialog = false"
                                            >Zavřít</v-btn
                                        >
                                        <v-btn
                                            :disabled="email == ''"
                                            color="green darken-1"
                                            text
                                            @click="saveNewMail()"
                                            >Uložit</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                                <!-- end dialog zalozeni noveho kananlu-->
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            @click="(emailId = item.id), openDeleteDialog()"
                            small
                            color="red"
                            >mdi-delete</v-icon
                        >
                        <!-- delete mail dialog -->
                        <v-row justify="center">
                            <v-dialog
                                v-model="deleteMailDialog"
                                persistent
                                max-width="500"
                            >
                                <v-card>
                                    <v-card-title class="headline"
                                        >Smazat e-mail?</v-card-title
                                    >
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="red darken-1"
                                            text
                                            @click="closeModal()"
                                            >Nemazat</v-btn
                                        >
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="removeMail()"
                                            >Smazat</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                        <!-- end delete mail dialog -->
                    </template>
                </v-data-table>
            </div>

            <v-row v-if="value === 'sms'" justify="center" class="mr-12 mt-10">
                <div>
                    <br />
                    <p class="ml-6">Zatím neumím posílat SMS :(</p>
                </div>
            </v-row>
            <!-- sms alerts -->
        </div>
        <div
            v-else-if="
                userData.user_role == 'editor' || userData.user_role == 'náhled'
            "
        >
            <v-alert class="body-2" type="error"
                >Nemáte přístup do této sekce</v-alert
            >
        </div>
    </div>
</template>
<script>
import Alert from "../../alerts/AlertComponent";
export default {
    data() {
        return {
            search: "",
            status: [],
            mailRule: [v => !!v || "email je požadován"],
            value: "e-mail",
            items: ["e-mail", "sms"],
            email: "",
            emailId: "",
            headers: [
                {
                    text: "e-mail",
                    value: "mail"
                },

                { text: "Akce", value: "actions", sortable: false }
            ],
            mailTableData: [],
            neMailDialog: false,
            deleteMailDialog: false,
            neMailSMSDialog: false,
            userData: false
        };
    },
    created() {
        this.loadMailTableData();
        this.loadUser();
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadUser();
            }.bind(this),
            1000
        );
    },
    components: {
        "alert-component": Alert
    },
    methods: {
        loadUser() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        },
        loadMailTableData() {
            window.axios.get("/api/mailAlert/getAll").then(response => {
                this.mailTableData = response.data;
            });
        },
        closeModal() {
            (this.mail = ""), (this.neMailDialog = false);
            this.deleteMailDialog = false;
            this.mailId = "";
        },
        openDeleteDialog() {
            this.deleteMailDialog = true;
        },

        removeMail() {
            let currentObj = this;

            axios
                .post("/api/mailAlert/remove", {
                    mailId: this.emailId
                })
                .then(function(response) {
                    currentObj.status = response.data;

                    window.axios.get("/api/mailAlert/getAll").then(response => {
                        currentObj.mailTableData = response.data;
                        currentObj.deleteMailDialog = false;
                        currentObj.mailId = "";
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        saveNewMail() {
            let currentObj = this;

            axios
                .post("/api/mailAlert/store", {
                    email: this.email
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    if (currentObj.status.stat === "success") {
                        window.axios
                            .get("/api/mailAlert/getAll")
                            .then(response => {
                                currentObj.mailTableData = response.data;
                                currentObj.neMailDialog = false;
                                currentObj.mail = "";
                            });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        }
    }
};
</script>
