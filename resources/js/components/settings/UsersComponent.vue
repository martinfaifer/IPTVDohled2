<template>
    <div>
        <br />
        <div v-if="userData.user_role == 'admin'">
            <div class="body-2 mr-lg-12">
                <div class="body-2">
                    <transition name="fade" mode="out-in">
                        <alert-component
                            v-if="status != []"
                            :status="status"
                        ></alert-component>
                    </transition>
                    <v-data-table
                        :dense="userData.dense"
                        :headers="headers"
                        :items="users"
                        :search="search"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar color="transparent" flat>
                                <v-text-field
                                    autofocus
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Hledání..."
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-spacer></v-spacer>
                                <v-dialog
                                    v-model="dialog"
                                    persistent
                                    max-width="500px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            color="teal"
                                            dark
                                            class="mb-2"
                                            v-on="on"
                                            >Nový uživatel</v-btn
                                        >
                                    </template>

                                    <!-- dialog zalození noveho uživatele-->
                                    <v-card>
                                        <v-card-title class="headline"
                                            >Založení nového
                                            uživatele</v-card-title
                                        >
                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="6" sm="6" md="6">
                                                    <v-text-field
                                                        v-model="name"
                                                        :rules="nameRule"
                                                        label="Jméno"
                                                        required
                                                        autofocus
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="6" sm="6" md="6">
                                                    <v-text-field
                                                        v-model="surname"
                                                        :rules="surnameRule"
                                                        label="Příjmení"
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="12"
                                                >
                                                    <v-text-field
                                                        v-model="email"
                                                        :rules="mailRule"
                                                        label="e-mailova adresa"
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="12"
                                                >
                                                    <v-text-field
                                                        type="password"
                                                        :rules="passwordRule"
                                                        v-model="password"
                                                        label="Heslo"
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col
                                                    class="d-flex"
                                                    cols="8"
                                                    sm="12"
                                                >
                                                    <v-select
                                                        :items="userRoles"
                                                        :rules="userroleRule"
                                                        v-model="value"
                                                        label="Práva"
                                                        dense
                                                        required
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>

                                        <!-- Uloženi / zavrení dialogu -->
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="red darken-1"
                                                @click="closeDialog()"
                                                text
                                                >Zavřít</v-btn
                                            >
                                            <v-btn
                                                :disabled="
                                                    name === '' ||
                                                        surname === '' ||
                                                        email === '' ||
                                                        password === '' ||
                                                        value === ''
                                                "
                                                color="green darken-1"
                                                @click="saveNewUser()"
                                                text
                                                >Uložit</v-btn
                                            >
                                        </v-card-actions>
                                    </v-card>
                                    <!-- end dialog zalozeni noveho kananlu-->
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <!-- templaty pro zobtazení informací v tabulce -->

                        <template v-slot:item.dense="{ item }">
                            <v-icon v-if="item.dense != 'true'" color="red"
                                >mdi-close</v-icon
                            >
                            <v-icon v-else color="green">mdi-check</v-icon>
                        </template>

                         <template v-slot:item.mozaikaAlphaBet="{ item }">
                            <v-icon v-if="item.mozaikaAlphaBet != 'true'" color="red"
                                >mdi-close</v-icon
                            >
                            <v-icon v-else color="green">mdi-check</v-icon>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <!-- edit -->
                            <v-icon
                                @click="(userId = item.id), getUserData()"
                                small
                                class="mr-2"
                                >mdi-pencil</v-icon
                            >

                            <!-- delete -->
                            <v-icon
                                @click="(userId = item.id), remove()"
                                small
                                color="red"
                                >mdi-delete</v-icon
                            >
                        </template>
                        <!-- Konec templatu -->
                    </v-data-table>

                    <!-- edit dialog -->
                    <v-row justify="center">
                        <v-dialog
                            v-model="editDialog"
                            persistent
                            max-width="500"
                        >
                            <v-card>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="6" sm="6" md="6">
                                            <v-text-field
                                                v-model="edit.name"
                                                label="Jméno"
                                                required
                                                autofocus
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="6" sm="6" md="6">
                                            <v-text-field
                                                v-model="edit.surname"
                                                label="Příjmení"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                v-model="edit.email"
                                                label="e-mailova adresa"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                type="password"
                                                v-model="password"
                                                label="Heslo"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="d-flex" cols="8" sm="12">
                                            <v-select
                                                :items="userRoles"
                                                v-model="value"
                                                label="Práva"
                                                dense
                                                required
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="red darken-1"
                                        text
                                        @click="closeDialog()"
                                        >Zavřít</v-btn
                                    >
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="saveEditDialog()"
                                        >Editovat</v-btn
                                    >
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                    <!-- end edit dialog -->
                </div>
            </div>
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
import Alert from "../alerts/AlertComponent";
export default {
    data: () => ({
        editDialog: false,
        deleteDialog: false,
        dialog: false,
        userId: "",
        user: "",
        users: [],
        headers: [
            {
                text: "Jméno",
                align: "start",
                value: "name"
            },
            { text: "Příjmení", value: "surname" },
            { text: "email", value: "email" },
            { text: "pagination", value: "pagination" },
            { text: "dense", value: "dense" },
            { text: "mozaikaAlphaBet", value: "mozaikaAlphaBet" },
            { text: "Uživatelská role ", value: "user_role" },

            { text: "Akce", value: "actions" }
        ],
        userRoles: ["admin", "editor", "náhled"],
        value: "editor",
        name: "",
        surname: "",
        email: "",
        password: "",
        search: "",
        edit: [],
        status: "",
        userData: false,
        nameRule: [v => !!v || "jméno je požadováno"],
        surnameRule: [v => !!v || "příjmení je požadováno"],
        mailRule: [v => !!v || "email je požadován"],
        passwordRule: [v => !!v || "heslo je požadováno"],
        userroleRule: [v => !!v || "vyberte uživatelské oprávnění"]
    }),
    components: {
        "alert-component": Alert
    },
    created() {
        // Informace, zda jsou nefunknčí streamy
        window.axios.get("/api/users/get").then(response => {
            this.users = response.data;
        });

        let currentObj = this;
        axios.get("/api/user/get").then(function(response) {
            currentObj.userData = response.data;
        });
    },

    mounted() {
        this.interval = setInterval(
            function() {
                let currentObj = this;
                axios.get("/api/user/get").then(function(response) {
                    currentObj.userData = response.data;
                });
            }.bind(this),
            5000
        );
    },
    methods: {
        closeDialog() {
            this.name = "";
            this.surname = "";
            this.email = "";
            this.password = "";
            this.dialog = false;
            this.edit = [];
            this.editDialog = false;
        },
        saveNewUser() {
            let currentObj = this;

            axios
                .post("/api/user/create", {
                    name: this.name,
                    surname: this.surname,
                    password: this.password,
                    email: this.email,
                    userRole: this.value
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    if (currentObj.status.stat === "success") {
                        currentObj.name = "";
                        currentObj.surname = "";
                        currentObj.email = "";
                        currentObj.password = "";
                        currentObj.dialog = false;

                        window.axios.get("/api/users/get").then(response => {
                            currentObj.users = response.data;
                        });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getUserData() {
            let currentObj = this;

            axios
                .post("/api/user/getUserdata", {
                    userId: this.userId
                })
                .then(function(response) {
                    currentObj.edit = response.data;
                    currentObj.editDialog = true;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        saveEditDialog() {
            let currentObj = this;

            axios
                .post("/api/user/settings/edit", {
                    userId: this.userId,
                    name: this.edit.name,
                    surname: this.edit.surname,
                    password: this.password,
                    email: this.edit.email,
                    userRole: this.value
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    if (currentObj.status.stat === "success") {
                        currentObj.edit = [];
                        currentObj.editDialog = false;

                        window.axios.get("/api/users/get").then(response => {
                            currentObj.users = response.data;
                        });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        remove() {
            let currentObj = this;

            axios
                .post("/api/user/remove", {
                    userId: this.userId
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    if (currentObj.status.stat === "success") {
                        currentObj.userId = "";

                        window.axios.get("/api/users/get").then(response => {
                            currentObj.users = response.data;
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
