<template>
    <div>
        <v-container class="mr-11 ml-11" fluid>
            <div class="mt-1">
                <v-app-bar
                    class="mt-12"
                    color="transparent"
                    fixed
                    dense
                    flat
                    dark
                >
                    <v-row justify="center" fixed>
                        <v-card fixed flat color="transparent">
                            <v-toolbar color="transparent" flat dense dark>
                                <v-spacer></v-spacer>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            link
                                            to="/settings"
                                            @click="contextMenu = 'prehled'"
                                            :color="colorPrehled"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon>mdi-view-dashboard</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Dashboard</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            link
                                            to="/settings/devices"
                                            @click="contextMenu = 'prehled'"
                                            :color="colorDevices"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon
                                                >mdi-tablet-cellphone</v-icon
                                            >
                                        </v-btn>
                                    </template>
                                    <span>Zařízení</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            link
                                            to="/settings/channels"
                                            @click="contextMenu = 'channels'"
                                            :color="colorChannels"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon
                                                >mdi-television-guide</v-icon
                                            >
                                        </v-btn>
                                    </template>
                                    <span>Kanály</span>
                                </v-tooltip>

                                <div v-if="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/users"
                                                @click="
                                                    contextMenu = 'accounts'
                                                "
                                                :color="colorAccounts"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon
                                                    >mdi-account-multiple</v-icon
                                                >
                                            </v-btn>
                                        </template>
                                        <span>Uživatelé</span>
                                    </v-tooltip>
                                </div>

                                <div v-if="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/alerts"
                                                @click="contextMenu = 'alerts'"
                                                :color="colorAlerts"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon>mdi-bell</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Nastavení Alertingu</span>
                                    </v-tooltip>
                                </div>

                                <div v-if="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/logs"
                                                @click="contextMenu = 'log'"
                                                :color="colorLog"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon>mdi-git</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Log</span>
                                    </v-tooltip>
                                </div>

                                <v-spacer></v-spacer>
                            </v-toolbar>
                        </v-card>
                    </v-row>
                </v-app-bar>
                <transition name="fade" mode="out-in">
                    <router-view class="mt-16" />
                </transition>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contextMenu: "prehled",
            color: "",
            colorPrehled: "teal",
            colorChannels: "",
            colorAccounts: "",
            colorAlerts: "",
            colorDevices: "",
            colorLog: "",
            userData: false
        };
    },
    created() {
        if (this.$route.path === "/settings") {
            (this.colorPrehled = "teal"),
                (this.colorChannels = ""),
                (this.colorAccounts = ""),
                (this.colorAlerts = ""),
                (this.colorLog = ""),
                (this.colorDevices = "");
        } else if (this.$route.path === "/settings/channels") {
            (this.colorPrehled = ""),
                (this.colorChannels = "teal"),
                (this.colorAccounts = ""),
                (this.colorAlerts = ""),
                (this.colorLog = ""),
                (this.colorDevices = "");
        } else if (this.$route.path === "/settings/users") {
            (this.colorPrehled = ""),
                (this.colorChannels = ""),
                (this.colorAccounts = "teal"),
                (this.colorAlerts = ""),
                (this.colorLog = ""),
                (this.colorDevices = "");
        } else if (this.$route.path === "/settings/alerts") {
            (this.colorPrehled = ""),
                (this.colorChannels = ""),
                (this.colorAccounts = ""),
                (this.colorAlerts = "teal"),
                (this.colorLog = ""),
                (this.colorDevices = "");
        } else if (this.$route.path === "/settings/logs") {
            (this.colorPrehled = ""),
                (this.colorChannels = ""),
                (this.colorAccounts = ""),
                (this.colorAlerts = ""),
                (this.colorLog = "teal"),
                (this.colorDevices = "");
        } else if (this.$route.path === "/settings/devices") {
            (this.colorPrehled = ""),
                (this.colorChannels = ""),
                (this.colorAccounts = ""),
                (this.colorAlerts = "");
                (this.colorLog = ""),
                (this.colorDevices = "teal");
        }

        let currentObj = this;
        axios.get("/api/user/get").then(function(response) {
            currentObj.userData = response.data;
        });
    },
    watch: {
        contextMenu: function() {
            if (this.$route.path === "/settings") {
                (this.colorPrehled = "teal"),
                    (this.colorChannels = ""),
                    (this.colorAccounts = ""),
                    (this.colorAlerts = ""),
                    (this.colorLog = ""),
                    (this.colorDevices = "");
            } else if (this.$route.path === "/settings/channels") {
                (this.colorPrehled = ""),
                    (this.colorChannels = "teal"),
                    (this.colorAccounts = ""),
                    (this.colorAlerts = ""),
                    (this.colorLog = ""),
                    (this.colorDevices = "");
            } else if (this.$route.path === "/settings/users") {
                (this.colorPrehled = ""),
                    (this.colorChannels = ""),
                    (this.colorAccounts = "teal"),
                    (this.colorAlerts = ""),
                    (this.colorLog = ""),
                    (this.colorDevices = "");
            } else if (this.$route.path === "/settings/alerts") {
                (this.colorPrehled = ""),
                    (this.colorChannels = ""),
                    (this.colorAccounts = ""),
                    (this.colorAlerts = "teal"),
                    (this.colorLog = ""),
                    (this.colorDevices = "");
            } else if (this.$route.path === "/settings/logs") {
                    (this.colorPrehled = ""),
                    (this.colorChannels = ""),
                    (this.colorAccounts = ""),
                    (this.colorAlerts = ""),
                    (this.colorLog = "teal"),
                    (this.colorDevices = "");
            } else if (this.$route.path === "/settings/devices") {
                (this.colorPrehled = ""),
                    (this.colorChannels = ""),
                    (this.colorAccounts = ""),
                    (this.colorAlerts = ""),
                    (this.colorLog = ""),
                    (this.colorDevices = "teal");
            }
        }
    }
};
</script>
