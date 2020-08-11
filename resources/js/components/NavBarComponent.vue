<template>
    <div>
        <v-app-bar color="transparent" fixed dense dark height="43">
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
            <!-- calendar -->
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            link
                            to="/calendar"
                            class="white--text"
                            icon
                            v-on="on"
                        >
                            <v-icon>mdi-calendar</v-icon>
                        </v-btn>
                    </template>
                </v-menu>
            </template>
            <!-- end calendar -->
            <!-- settings -->
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            link
                            to="/settings/dashboard"
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
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn class="white--text" fab text v-on="on">
                            <v-icon v-show="userData.avatar === false"
                                >mdi-account-circle</v-icon
                            >
                            <v-avatar
                                size="26"
                                v-show="userData.avatar != false"
                            >
                                <img :src="userData.avatar" />
                            </v-avatar>
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
            <div v-show="this.$route.path === '/'">
                <v-btn
                    class="white--text"
                    @click="chanheAlertVisibility()"
                    fab
                    icon
                >
                    <v-icon :color="crashedStreams.color"
                        >mdi-comment-alert</v-icon
                    >
                </v-btn>
            </div>

            <!-- end alerts -->
        </v-app-bar>

        <v-row class="body-2" justify="center">
            <v-dialog
                v-model="modalEditUser"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar dark color="transparent">
                        <v-btn icon dark @click="modalEditUser = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Nastavení uživatele</v-toolbar-title>
                    </v-toolbar>

                    <!-- navigation -->
                    <v-row>
                        <v-toolbar color="transparent" flat dense dark>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="contextMenu = 'user'"
                                :color="colorIconUser"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-account</v-icon>
                            </v-btn>
                            <v-btn
                                @click="contextMenu = 'gui'"
                                :color="colorIconGui"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-television-guide</v-icon>
                            </v-btn>

                            <v-btn
                                @click="contextMenu = 'alert'"
                                :color="colorIconAlert"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-comment-alert</v-icon>
                            </v-btn>

                            <v-btn
                                @click="contextMenu = 'api'"
                                :color="colorIconApi"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-swap-horizontal</v-icon>
                            </v-btn>

                            <!-- mdi-message -->
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </v-row>

                    <!-- uživatelské nasatavení -->
                    <v-container justify="center">
                        <user-component
                            v-show="contextMenu === 'user'"
                        ></user-component>
                        <gui-component
                            v-show="contextMenu === 'gui'"
                        ></gui-component>
                        <!-- <notification-component
                                v-show="contextMenu === 'alert'"
                            ></notification-component>
                            <api-component
                                v-show="contextMenu === 'api'"
                            ></api-component> -->
                    </v-container>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- end modal pro editaci uživatele -->

        <transition name="fade" mode="out-in">
            <router-view class="mt-1"> </router-view>
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

        <v-row justify="center">
            <v-dialog
                v-model="todayChannelDialogNotification"
                persistent
                max-width="600"
            >
                <v-card>
                    <v-card-title class="headline"
                        >Na dnešní den jsou plánované výpadky</v-card-title
                    >
                    <v-card-text>kanály</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="todayChannelDialogNotification = false"
                            >Zavřít</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <footer-component></footer-component>
    </div>
</template>
<script>
let Alert = () => import("./alerts/AlertComponent");
let FooterComponent = () => import("./FooterComponent");
let UserComponent = () => import("./Navigation/UserComponent");
let GuiComponent = () => import("./Navigation/GuiComponent");
export default {
    data() {
        return {
            contextMenu: "user",
            colorIconUser: "teal",
            colorIconGui: "",
            colorIconAlert: "",
            colorIconApi: "",
            todayChannelDialogNotification: false,
            mailMotifikace: false,
            rememberMe: true,
            userData: false,
            modalEditUser: false,
            status: "",
            password: "",
            logout: "false",
            message: "",
            snackbar: true,
            crashedStreams: [],
            intervalAlert: false
        };
    },
    created() {
        this.loadAlerts();

        this.loadUser();
    },

    components: {
        "alert-component": Alert,
        "footer-component": FooterComponent,
        "user-component": UserComponent,
        "gui-component": GuiComponent
    },

    methods: {
        loadAlerts() {
            axios.get("/api/channels/notification").then(response => {
                this.crashedStreams = response.data;
            });
        },

        loadUser() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                if (response.data.stat === "error") {
                    currentObj.$router.push("/login");
                } else {
                    currentObj.userData = response.data;
                }
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
            setTimeout(() => (this.status = false), 5000);
        },

        contextMenu: function() {
            if (this.contextMenu === "user") {
                (this.colorIconUser = "teal"),
                    (this.colorIconGui = ""),
                    (this.colorIconAlert = "");
                this.colorIconApi = "";
            } else if (this.contextMenu === "gui") {
                (this.colorIconUser = ""),
                    (this.colorIconGui = "teal"),
                    (this.colorIconAlert = "");
                this.colorIconApi = "";
            } else if (this.contextMenu === "alert") {
                (this.colorIconUser = ""),
                    (this.colorIconGui = ""),
                    (this.colorIconAlert = "teal");
                this.colorIconApi = "";
            } else if (this.contextMenu === "api") {
                (this.colorIconUser = ""),
                    (this.colorIconGui = ""),
                    (this.colorIconAlert = "");
                this.colorIconApi = "teal";
            }
        }
    },
    mounted() {
        if (this.$route.path === "/") {
            this.intervalAlert = setInterval(
                function() {
                    this.loadAlerts();
                }.bind(this),
                1000
            );
        } else {
            clearInterval(this.intervalAlert);
        }
    },

    beforeDestroy: function() {
        clearInterval(this.intervalAlert);
    }
};
</script>
