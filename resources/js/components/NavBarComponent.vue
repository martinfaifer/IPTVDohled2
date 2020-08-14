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
                            v-show="
                                userData.user_role === 'admin' ||
                                    userData.user_role === 'editor'
                            "
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
                            <v-avatar
                                size="26"
                                v-show="userData.avatar === false"
                            >
                                <span class="white--text">{{
                                    userData.inicials
                                }}</span>
                            </v-avatar>
                            <v-avatar
                                size="26"
                                v-show="userData.avatar != false"
                            >
                                <img :src="userData.avatar" />
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list width="250px" class="text-center subtitle-1">
                        <v-list-item link
                            to="/user">
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
                    @click="chanheAlertVisibility(), (loader = 'loading')"
                    :loading="loading"
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

        <!-- NETWORK ALERTING -->

        <div class="text-center">
            <v-snackbar
                v-if="networkChangeNotification === true"
                color="error"
                v-model="networkChangeNotification"
                timeout="10000"
                multi-line
            >
                <v-row justify="center">
                    <strong>Nejste připojení k internetu</strong>
                </v-row>
            </v-snackbar>
        </div>

        <!-- END OF NETWORK ALERTINGU -->

        <footer-component></footer-component>
    </div>
</template>
<script>
import FooterComponent from "./FooterComponent";

export default {
    data() {
        return {
            internetConnection: true,
            networkChangeNotification: false,
            contextMenu: "user",
            colorIconUser: "teal",
            colorIconGui: "",
            colorIconAlert: "",
            colorIconApi: "",
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
            intervalAlert: false,
            interval: false,
            intervalUser: false,
            intervalDevices: false,
            loader: null,
            loading: false,
        };
    },
    created() {
        this.consoleNotificationByAdmin();

        this.loadAlerts();

        this.loadUser();

        this.checkIfIsInternetConnection();

        this.loadIptvDevices();
    },

    components: {
        "footer-component": FooterComponent,
    },

    methods: {
        loadIptvDevices() {
            window.axios.get("/api/devices/crash").then(response => {
                this.$store.state.deviceAlerts = this.crashed = response.data;
            });
        },

        checkIfIsInternetConnection() {
            this.internetConnection = window.navigator.onLine;
        },

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
                    currentObj.$store.state.userData = currentObj.userData =
                        response.data;
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
                    axios.get("/api/user/get").then(function(response) {
                        currentObj.$store.commit("update", response.data);
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        consoleNotificationByAdmin() {
            console.log(
                "--------------------------------------------------------------------------------"
            );
            console.log(
                "WEB JE POD SPRÁVOU MARTINA FAIFERA, VEŠKERÉ KOPIE, ÚPRAVY JSOU PROTI LICENCI!!!"
            );
            console.log(
                "--------------------------------------------------------------------------------"
            );
        }
    },
    watch: {
        loader() {
            const l = this.loader;
            this[l] = !this[l];

            setTimeout(() => (this[l] = false), 1000);

            this.loader = null;
        },
        status: function() {
            setTimeout(() => (this.status = false), 5000);
        },

        internetConnection: function() {
            if (this.internetConnection === false) {
                this.networkChangeNotification = true;
            } else {
                this.networkChangeNotification = false;
            }
        },
    },
    mounted() {
        this.intervalDevices = setInterval(
            function() {
                this.loadIptvDevices();
            }.bind(this),
            60000
        );

        this.interval = setInterval(
            function() {
                this.checkIfIsInternetConnection();
            }.bind(this),
            5000
        );

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
