<template>
    <div>
        <v-content class="rightFromSideUserPanel body-1">
            <transition name="fade" mode="out-in">
                <usersitenavigation-component justify="center" class="mt-12"></usersitenavigation-component>
            </transition>
        </v-content>
        <usersidemenu-compoennt></usersidemenu-compoennt>

    </div>
</template>

<script>
import UserSideMenu from "./SideUserMenuComponent";
import UserSiteNavigation from "./UserSiteNavigationComponent";
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
        "usersidemenu-compoennt": UserSideMenu,
        "usersitenavigation-component": UserSiteNavigation
    },

    created() {},
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        }
    }
};
</script>
