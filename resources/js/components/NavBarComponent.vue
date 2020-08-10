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
                    <v-card-text>
                        <v-list three-line subheader ml-12>
                            <v-subheader>Nastavení uživatele</v-subheader>
                            <v-list-item>
                                <v-row>
                                    <v-col cols="6" sm="6" md="6">
                                        <v-text-field
                                            v-model="userData.email"
                                            label="e-mail"
                                            autofocus
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
                            </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list three-line subheader>
                            <v-subheader>Nastavení GUI</v-subheader>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field
                                            v-model="userData.pagination"
                                            label="Počet polí v mozaice"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox
                                        v-model="userData.dense"
                                    ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >Kompaktní mód</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >Zmenší se tabulky, i alerty, vhodné pro
                                        monitory s nízkým
                                        rozlišením</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox
                                        v-model="userData.mozaikaAlphaBet"
                                    ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >Abecední řazení kanálů v
                                        mozaice</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >Kanály se budou v mozaice řadit
                                        avecedně</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list three-line subheader>
                            <v-subheader>Alerting</v-subheader>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox
                                        v-model="userData.mailMotifikace"
                                    ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >Zasílání mailových
                                        notifikací</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >Dohled bude zasílat upozornění o
                                        nefunkčních nebo nově funkčních kanálech
                                        s odkazem na kanál a dobou
                                        výpadku</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
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
                            type="submit"
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
import Alert from "./alerts/AlertComponent";
import FooterComponent from "./FooterComponent";
export default {
    data() {
        return {
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
            crashedStreams: []
        };
    },
    created() {
        this.loadAlerts();

        this.loadUser();
    },

    components: {
        "alert-component": Alert,
        "footer-component": FooterComponent
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

        userEdit() {
            let currentObj = this;
            axios
                .post("/api/user/edit", {
                    userId: this.userData.id,
                    mail: this.userData.email,
                    password: this.password,
                    pagination: this.userData.pagination,
                    dense: this.userData.dense,
                    mozaikaAlphaBet: this.userData.mozaikaAlphaBet,
                    mailMotifikace: this.userData.mailMotifikace
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    console.log(response.data);
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
            setTimeout(() => (this.status = false), 5000);
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
