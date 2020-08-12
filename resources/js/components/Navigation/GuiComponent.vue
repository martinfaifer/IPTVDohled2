<template>
    <div>
        <alert-component
            :status="status"
            v-if="status.isAlert === 'isAlert'"
        ></alert-component>
        <v-row class="title" justify="center">Nastavení zobrazení</v-row>

        <v-container class="body-1" fluid>
            <v-row class="mt-3">
                <v-subheader>Nastavení mozaiky</v-subheader>
            </v-row>
            <v-row>
                <v-subheader
                    >Změny budou provedeny do 10s od potvrzení</v-subheader
                >
            </v-row>
            <v-row class="mt-3">
                <v-col cols="4" sm="4" md="4">
                    <v-text-field
                        v-model="userData.pagination"
                        type="number"
                        label="počet zobrazených náhledů v mozaice"
                        autofocus
                    ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3">
                    <v-checkbox
                        v-model="userData.mozaikaAlphaBet"
                        label="Abecední řazení kanálů v mozaice"
                    ></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="mt-3">
                <v-col cols="3" sm="3" md="3">
                    <v-switch
                        v-model="customMozaika"
                        label="vytvoření statických kanálů v mozaice"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row v-show="customMozaika === true">
                <v-col cols="4" sm="4" md="4">
                    <v-combobox
                        v-model="staticChannels"
                        :items="channels"
                        item-text="nazev"
                        item-value="id"
                        label="Vyberte kanály"
                        hint="Doporučení 7 kanálu pro 1080p a 14 kanálů pro 4K rozlišení"
                        hide-selected
                        multiple
                        persistent-hint
                        small-chips
                    ></v-combobox>
                </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row class="mt-3">
                <v-subheader>Nastavení GUI</v-subheader>
            </v-row>
            <v-row class="mt-3">
                <v-col cols="3" sm="3" md="3">
                    <v-checkbox
                        v-model="userData.dense"
                        label="Kompaktní mód"
                    ></v-checkbox>
                </v-col>

                <v-col cols="3" sm="3" md="3">
                    <v-switch disabled label="Dark mode"></v-switch>
                </v-col>
            </v-row>
        </v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn
                :loading="loading"
                color="green darken-1"
                type="submit"
                @click="userEdit(), (modalEditUser = false)"
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
            staticChannels: [],
            channels: [],
            customMozaika: false,
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
            intervalAlert: false
        };
    },

    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },

    created() {
        this.loadChannels();
        this.checkCustomMozaika();
        this.checkStaticChannels();
    },

    components: {
        "alert-component": Alert
    },
    methods: {
        checkCustomMozaika() {
            if (this.userData.customMozaika === true) {
                return (this.customMozaika = this.userData.customMozaika);
            }
        },

        checkStaticChannels() {
            if (this.userData.customMozaika === true) {
                return (this.staticChannels = this.userData.staticChannels);
            }
        },

        loadChannels() {
            let currentObj = this;
            axios.get("/api/calendar/channels").then(function(response) {
                currentObj.channels = response.data;
            });
        },
        userEdit() {
            this.loading = true;
            let currentObj = this;
            axios
                .post("/api/user/edit/gui", {
                    userId: this.userData.id,
                    pagination: this.userData.pagination,
                    mozaikaAlphaBet: this.userData.mozaikaAlphaBet,
                    dense: this.userData.dense,
                    customMozaika: this.customMozaika,
                    staticChannels: this.staticChannels
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    axios.get("/api/user/get").then(function(response) {
                        currentObj.$store.commit("update", response.data);
                        currentObj.checkCustomMozaika();
                        currentObj.checkStaticChannels();
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
