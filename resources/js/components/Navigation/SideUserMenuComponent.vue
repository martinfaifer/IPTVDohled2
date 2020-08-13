<template>
    <div>
        <alert-component
            :status="status"
            v-if="status.isAlert === 'isAlert'"
        ></alert-component>

        <aside>
            <div class="mt-12">
                <v-navigation-drawer
                    color="transparent"
                    class="mt-12"
                    absolute
                    left
                >
                    <template v-slot:prepend>
                        <v-list-item class="mt-12 ml-12">
                            <v-avatar
                                v-show="userData.avatar === false"
                                size="108"
                                color="grey"
                            >
                                <h1>{{ userData.inicials }}</h1>
                            </v-avatar>

                            <v-avatar
                                v-show="userData.avatar != false"
                                size="108"
                            >
                                <img :src="userData.avatar" />
                            </v-avatar>
                        </v-list-item>
                        <v-list-item class="ml-12">
                            <v-list-item-content>
                                <v-list-item-title class="mt-2"
                                    >{{ userData.name }} {{ userData.surname }}
                                    <span>
                                        <v-icon
                                            @click="editUserDialog = true"
                                            small
                                            class="mr-2"
                                            >mdi-pencil</v-icon
                                        >
                                    </span>
                                </v-list-item-title>
                                <v-list-item-subtitle class="mt-2">{{
                                    userData.email
                                }}</v-list-item-subtitle>
                                <v-list-item-subtitle class="mt-2"
                                    >uživatelská role :
                                    {{
                                        userData.user_role
                                    }}</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list class="mt-6 body-1">
                        <v-list-item> </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </div>
        </aside>

        <v-row justify="center">
            <v-dialog v-model="editUserDialog" persistent max-width="500">
                <v-card>
                    <v-card-text>
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
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            type="submit"
                            @click="userEdit()"
                            text
                            >Uložit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
            editUserDialog: false,
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
            intervalAlert: false,
            userDevice: false
        };
    },

    components: {
        "alert-component": Alert
    },

    created() {},

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
                    currentObj.editUserDialog = false;
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
