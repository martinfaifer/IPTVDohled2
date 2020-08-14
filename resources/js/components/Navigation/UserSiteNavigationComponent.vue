<template>
    <div>
        <v-card color="transparent" flat>
            <!-- navigation -->
            <v-row>
                <v-toolbar color="transparent" flat dense dark>
                    <v-spacer></v-spacer>
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
                        @click="contextMenu = 'log'"
                        :color="colorIconUser"
                        class="white--text"
                        icon
                    >
                        <v-icon>mdi-history</v-icon>
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
                 <userhistory-component
                    v-show="contextMenu === 'log'"
                ></userhistory-component>
                <gui-component v-show="contextMenu === 'gui'"></gui-component>
                <notification-component
                    v-show="contextMenu === 'alert'"
                ></notification-component>
                <api-component v-show="contextMenu === 'api'"></api-component>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import UserHistory from "./UserHistoryCompoennt";
import UserSideMenu from "./SideUserMenuComponent";
import UserGuiComponent from "./GuiComponent";
import NotificationUserComponent from "./UserNotificationComponent";
import APIUserComponent from "./ApiUserComponent";
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
            editUserDialog: false,
            contextMenu: "gui",
            colorIconUser: "",
            colorIconGui: "teal",
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
        "userhistory-component": UserHistory,
        "usersidemenu-compoennt": UserSideMenu,
        "gui-component": UserGuiComponent,
        "notification-component":NotificationUserComponent,
        "api-component": APIUserComponent
    },

    created() {},
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        },
        contextMenu: function() {
            if (this.contextMenu === "log") {
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
    }
};
</script>
