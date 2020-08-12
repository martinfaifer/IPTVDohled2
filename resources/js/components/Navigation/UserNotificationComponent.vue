<template>
    <div>
        <alert-component
            :status="status"
            v-if="status.isAlert === 'isAlert'"
        ></alert-component>
        <v-row class="title" justify="center">Nastavení notifikací</v-row>

        <v-container class="body-1" fluid>
            <v-row class="mt-3">
                <v-subheader>Zasílání mailových notifikací</v-subheader>
            </v-row>
            <v-row class="mt-3">
                <v-col cols="3" sm="3" md="3">
                    <v-checkbox
                        v-model="userData.mailMotifikace"
                        label="Zaslat notifikaci o změměně stavu kanálu?"
                    ></v-checkbox>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-3">
                <v-subheader>Zasílání SMS notifikací</v-subheader>
            </v-row>
            <v-row class="mt-3">
                <v-col cols="3" sm="3" md="3">
                    <v-checkbox
                        disabled
                        label="Zaslat notifikaci o změměně stavu kanálu formou SMS?"
                    ></v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn
                :loading="loading"
                color="green darken-1"
                type="submit"
                @click="userEdit()"
                text
                >Uložit</v-btn
            >
        </v-row>
    </div>
</template>

<script>
import Alert from "../alerts/AlertComponent";
export default {
    data() {
        return {
            loading: false,
            mailMotifikace: false,
            status: [],
            intervalAlert: false
        };
    },
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },

    components: {
        "alert-component": Alert
    },

    methods: {
        userEdit() {
            this.loading = true;
            let currentObj = this;
            axios
                .post("/api/user/edit/notification", {
                    email: this.userData.email,
                    mailMotifikace: this.userData.mailMotifikace
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    axios.get("/api/user/get").then(function(response) {
                        currentObj.$store.commit("update", response.data);
                    });
                    currentObj.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        }
    }
};
</script>
