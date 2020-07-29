<template>
    <div>
        <v-app-bar color="transparent" fixed dense dark>
            <div v-if="this.$route.path != '/'">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            link
                            to="/"
                            color="white"
                            class="white--text"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </template>
                    <span>Zpět na Mozaiku</span>
                </v-tooltip>
            </div>
            <v-spacer></v-spacer>
            <!-- settings -->
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            link
                            to="/settings"
                            class="white--text"
                            icon
                            v-on="on"
                        >
                            <v-icon>mdi-settings</v-icon>
                        </v-btn>
                    </template>
                </v-menu>
            </template>
            <!-- end Settigs -->

            <!-- user -->
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-menu transition="scroll-y-transition" >
                    <template v-slot:activator="{ on }">
                        <v-btn class="white--text" fab text v-on="on">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-btn>
                    </template>
                    <v-list width="250px" class="text-center subtitle-1">
                        <v-list-item @click="modalEditUser = true">
                            Editace <v-spacer></v-spacer
                            ><v-icon color="grey" right> mdi-settings</v-icon>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item @click="LogOut()">
                            Odhlásit se <v-spacer></v-spacer
                            ><v-icon color="grey" right>mdi-lock</v-icon>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
            <!-- end user -->

            <!-- alerts -->
            <div v-if="this.$route.path === '/'">
                <v-btn
                    class="white--text"
                    @click="chanheAlertVisibility()"
                    fab
                    text
                >
                    <v-icon :color="crashedStreams.color"
                        >mdi-comment-alert</v-icon
                    >
                </v-btn>
            </div>

            <!-- end alerts -->
        </v-app-bar>

        <v-row class="body-2" justify="center">
            <v-dialog v-model="modalEditUser" persistent max-width="550px">
                <v-card>
                    <v-card-text>
                        <v-container height="1920px" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="userData.email"
                                        label="e-mail"
                                        autofocus
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="password"
                                        label="změna hesla"
                                        type="password"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="userData.pagination"
                                        label="Počet polí v mozaice"
                                        type="number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            @click="modalEditUser = false"
                            text
                            >Zavřít</v-btn
                        >
                        <v-btn
                            color="green darken-1"
                            @click="userEdit(), (modalEditUser = false)"
                            text
                            >Uložit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- end modal pro editaci uživatele -->

        <transition name="fade" mode="out-in">
            <router-view class="mt-1"> </router-view>
            <!-- <router-view class="mt-1" /> -->
        </transition>

        <div class="text-center">
            <v-snackbar
                v-if="status.isAlert === 'isAlert'"
                :color="status.stat"
                v-model="snackbar"
                timeout="10000"
                multi-line
            >
                <v-row justify="center">
                    <strong>{{ status.msg }}</strong>
                </v-row>
                <v-row justify="center">
                    Změny budou provedeny do 10s
                </v-row>
            </v-snackbar>
        </div>
    </div>
</template>
<script>
import Alert from "./alerts/AlertComponent";
export default {
    data() {
        return {
            rememberMe: true,
            userData: false,
            modalEditUser: false,
            status: "",
            password: "",
            logout: "false",
            message: "",
            snackbar: true,
            crashedStreams: []
        };
    },
    created() {
        console.log(this.$route.path);

        axios.get("/api/channels/notification").then(response => {
            this.crashedStreams = response.data;
        });

        let currentObj = this;
        axios.get("/api/user/get").then(function(response) {
            if (response.data.stat === "error") {
                currentObj.$router.push("/login");
            } else {
                currentObj.userData = response.data;
            }
        });
    },

    components: {
        "alert-component": Alert
    },

    methods: {
        loadAlerts() {
            axios.get("/api/channels/notification").then(response => {
                this.crashedStreams = response.data;
            });
        },
        LogOut() {
            let currentObj = this;
            axios
                .get("/api/user/logout")
                .then(function(response) {
                    if (response.data.stat === "error") {
                        currentObj.$router.push("/login");
                    } else {
                    }
                })
                .catch(function(error) {});
        },
        userEdit() {
            let currentObj = this;
            axios
                .post("/api/user/edit", {
                    userId: this.userData.id,
                    mail: this.userData.email,
                    password: this.password,
                    pagination: this.userData.pagination
                })
                .then(function(response) {
                    currentObj.status = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        chanheAlertVisibility() {
            let currentObj = this;
            axios
                .post("/api/user/alert/visibility", {
                    userId: this.userData.id
                })
                .then(function(response) {
                    currentObj.status = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 10000);
        }
    },
    mounted() {
        this.loadAlerts();
        this.intervalAlert = setInterval(
            function() {
                this.loadAlerts();
            }.bind(this),
            1000
        );
    }
};
</script>
