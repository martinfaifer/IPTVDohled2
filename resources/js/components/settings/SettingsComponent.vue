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
                                            to="/settings/dashboard"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon v-if="$route.path === '/settings/dashboard'" color="teal">mdi-view-dashboard</v-icon>
                                            <v-icon v-else>mdi-view-dashboard</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Dashboard</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            link
                                            to="/settings/devices"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon v-if="$route.path === '/settings/devices'" color="teal">mdi-tablet-cellphone</v-icon>
                                            <v-icon v-else>mdi-tablet-cellphone</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Zařízení</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            link
                                            to="/settings/channels"
                                            class="white--text"
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon v-if="$route.path === '/settings/channels'" color="teal">mdi-television-guide</v-icon>
                                            <v-icon v-else>mdi-television-guide</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Kanály</span>
                                </v-tooltip>

                                <div v-show="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/users"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon  v-if="$route.path === '/settings/users'" color="teal" >mdi-account-multiple</v-icon>
                                                <v-icon  v-else >mdi-account-multiple</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Uživatelé</span>
                                    </v-tooltip>
                                </div>

                                <div v-show="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/alerts"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon v-if="$route.path === '/settings/alerts'" color="teal">mdi-bell</v-icon>
                                                <v-icon v-else>mdi-bell</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Nastavení Alertingu</span>
                                    </v-tooltip>
                                </div>

                                <div v-show="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/logs"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon v-if="$route.path === '/settings/logs'" color="teal">mdi-git</v-icon>
                                                <v-icon v-else>mdi-git</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Log</span>
                                    </v-tooltip>
                                </div>

                                <div v-show="userData.user_role == 'admin'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                link
                                                to="/settings/api/users"
                                                class="white--text"
                                                v-on="on"
                                                icon
                                            >
                                                <v-icon v-if="$route.path === '/settings/api/users'" color="teal">mdi-swap-horizontal</v-icon>
                                                <v-icon v-else-if="$route.path === '/settings/api/iptv_doku'" color="teal">mdi-swap-horizontal</v-icon>
                                                <v-icon v-else>mdi-swap-horizontal</v-icon>
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
            userData: false
        };
    },
    created() {
        let currentObj = this;
        axios.get("/api/user/get").then(function(response) {
            currentObj.userData = response.data;
        });
    },
};
</script>
