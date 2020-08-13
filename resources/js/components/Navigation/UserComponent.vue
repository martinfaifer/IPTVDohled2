<template>
    <div>
        <v-row class="title" justify="center">Nastavení uživatele</v-row>

        <usersidemenu-compoennt></usersidemenu-compoennt>
        <v-container class="rightFromSIdePanel">
            <!-- <v-subheader>
                test
            </v-subheader> -->
        </v-container>
        <userhistory-component
            class="rightFromSIdePanel"
        ></userhistory-component>
    </div>
</template>

<script>
import UserHistory from "./UserHistoryCompoennt";
import UserSideMenu from "./SideUserMenuComponent";
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
        "userhistory-component": UserHistory,
        "usersidemenu-compoennt": UserSideMenu
    },

    created() {},

    // methods: {
    //     userEdit() {
    //         let currentObj = this;
    //         axios
    //             .post("/api/user/edit", {
    //                 userId: this.userData.id,
    //                 mail: this.userData.email,
    //                 password: this.password,
    //                 name: this.userData.name,
    //                 surname: this.userData.surname
    //             })
    //             .then(function(response) {
    //                 currentObj.status = response.data;
    //                 axios.get("/api/user/get").then(function(response) {
    //                     currentObj.$store.commit("update", response.data);
    //                 });
    //                 currentObj.editUserDialog = false;
    //             })
    //             .catch(function(error) {
    //                 console.log(error);
    //             });
    //     }
    // },
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        }
    }
};
</script>
