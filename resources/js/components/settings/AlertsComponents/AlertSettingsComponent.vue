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

            <!-- sms alerts -->

            <div v-if="value === 'sms'">
                <div
                    v-show="smsFrom != false"
                    class="mb-6 ml-12"
                    justify="center"
                >
                    SMS se odesílají z:
                    <strong>
                        <span class="green--text">
                            {{ smsFrom.mailFrom }}
                        </span>
                    </strong>
                </div>
                <div v-show="smsFrom === false">
                    ZDE BUDE TlACITKO NA ZADANI
                </div>
            </div>
            <div v-if="value === 'sms'">
                <v-data-table
                    :dense="userData.dense"
                    :headers="headersSMS"
                    :items="SMSTableData"
                    :search="searchSMS"
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
                                v-model="neSMSDialog"
                                persistent
                                max-width="500px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        color="teal"
                                        dark
                                        class="mb-2"
                                        v-on="on"
                                        >Nová SMS pro alerty</v-btn
                                    >
                                </template>

                                <!-- dialog zalození noveho mailu-->
                                <v-card>
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="sms"
                                                    type="number"
                                                    label="sms na kterou se budou zasílat alerty"
                                                    :rules="smsRule"
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
                                            @click="neSMSDialog = false"
                                            >Zavřít</v-btn
                                        >
                                        <v-btn
                                            :disabled="sms == ''"
                                            color="green darken-1"
                                            text
                                            @click="saveNewSMS()"
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
                            @click="(smsId = item.id), openSMSDeleteDialog()"
                            small
                            color="red"
                            >mdi-delete</v-icon
                        >
                        <!-- delete mail dialog -->
                        <v-row justify="center">
                            <v-dialog
                                v-model="deleteSMSlDialog"
                                persistent
                                max-width="500"
                            >
                                <v-card>
                                    <v-card-title class="headline"
                                        >Smazat tel. číslo?</v-card-title
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
                                            @click="removeSMS()"
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
            <!-- end sms alerts -->
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
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
            smsFrom: false,
            smsId: "",
            neSMSDialog: false,
            deleteSMSlDialog: false,
            sms: "",
            SMSTableData: [],
            searchSMS: "",
            interval: false,
            search: "",
            status: [],
            mailRule: [v => !!v || "email je požadován"],
            smsRule: [v => !!v || "pole nesmí být prázdé"],
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
            headersSMS: [
                {
                    text: "tel",
                    value: "telNumberTo"
                },

                { text: "Akce", value: "actions", sortable: false }
            ],
            mailTableData: [],
            neMailDialog: false,
            deleteMailDialog: false,
            neMailDialog: false
        };
    },
    created() {
        this.loadMailTableData();
        this.loadSMSTableData();
        this.loadSMSFrom();
    },

    components: {
        "alert-component": Alert
    },
    methods: {
        loadSMSFrom() {
            window.axios.get("/api/smsAlert/getFrom").then(response => {
                this.smsFrom = response.data;
            });
        },

        loadSMSTableData() {
            window.axios.get("/api/smsAlert/getAll").then(response => {
                this.SMSTableData = response.data;
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
            this.deleteSMSlDialog = false;
            this.mailId = "";
            this.smsId = "";
        },
        openDeleteDialog() {
            this.deleteMailDialog = true;
        },

        openSMSDeleteDialog() {
            this.deleteSMSlDialog = true;
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

        removeSMS() {
            let currentObj = this;

            axios
                .post("/api/smsAlert/remove", {
                    smsId: this.smsId
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.deleteSMSlDialog = false;
                    currentObj.smsId = "";
                    currentObj.loadSMSTableData();
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
        },

        saveNewSMS() {
            let currentObj = this;

            axios
                .post("/api/smsAlert/store", {
                    sms: this.sms
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    if (currentObj.status.stat === "success") {
                        currentObj.neSMSDialog = false;
                        currentObj.loadSMSTableData();
                        currentObj.sms = "";
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
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
