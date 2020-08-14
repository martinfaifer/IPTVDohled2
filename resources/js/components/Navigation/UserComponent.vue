<template>
    <div>


    </div>
</template>

<script>
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

    },

    created() {},

    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        }
    }
};
</script>
