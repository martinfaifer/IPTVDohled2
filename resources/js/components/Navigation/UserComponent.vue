<template>
    <div>
        <alert-component
            :status="status"
            v-if="status.isAlert === 'isAlert'"
        ></alert-component>
        <v-row class="title" justify="center">Nastavení uživatele</v-row>
        <v-container class="body-1" fluid>
            <v-row class="mt-6">
                <v-col cols="6" sm="6" md="6">
                    <v-text-field
                        v-model="userData.name"
                        label="jméno"
                        autofocus
                    ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                    <v-text-field
                        v-model="userData.surname"
                        label="příjmení"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-6">
                <v-col cols="6" sm="6" md="6">
                    <v-text-field
                        readonly
                        disabled
                        v-model="userData.email"
                        label="e-mail"
                    ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                    <v-text-field
                        v-model="password"
                        label="změna hesla"
                        type="password"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                type="submit"
                @click="userEdit(), (modalEditUser = false)"
                text
                >Uložit</v-btn
            >
        </v-row>
    </div>
</template>

<script>
import Alert from "../alerts/AlertComponent";
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
            contextMenu: "user",
            colorIconUser: "",
            colorIconGui: "",
            colorIconAlert: "",
            colorIconApi: "",
            todayChannelDialogNotification: false,
            mailMotifikace: false,
            rememberMe: true,
            modalEditUser: false,
            status: [],
            password: "",
            logout: "false",
            message: "",
            snackbar: true,
            crashedStreams: [],
            intervalAlert: false
        };
    },

    components: {
        "alert-component": Alert
    },

    methods: {
        userEdit() {
            let currentObj = this;
            axios
                .post("/api/user/edit", {
                    userId: this.userData.id,
                    mail: this.userData.email,
                    password: this.password,
                    name: this.userData.name,
                    surname: this.userData.surname
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    axios.get("/api/user/get").then(function(response) {
                        currentObj.$store.commit("update", response.data);
                    });
                    console.log(currentObj.status);
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
