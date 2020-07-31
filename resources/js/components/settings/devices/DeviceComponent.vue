<template>
    <div class="body-2">
        <br />
        <transition name="fade" mode="out-in">
            <alert-component
                v-if="status != []"
                :status="status"
            ></alert-component>
        </transition>
        <div>
            <v-data-table
                :dense="userData.dense"
                :headers="headers"
                :items="devices"
                :search="search"
                class="elevation-0 mr-12"
            >
                <template v-slot:top>
                    <v-toolbar color="transparent" flat>
                        <v-text-field
                            autofocus
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Hledání..."
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <div v-if="userData.user_role != 'náhled'">
                            <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="500px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        color="teal"
                                        dark
                                        class="mb-2"
                                        v-on="on"
                                        >Nové zařízení</v-btn
                                    >
                                </template>
                            </v-dialog>
                        </div>
                    </v-toolbar>
                </template>

                <template v-slot:item.status="{ item }">
                    <v-icon
                        v-show="item.status === 'success'"
                        color="green"
                        dark
                        >mdi-check</v-icon
                    >
                    <v-icon v-show="item.status === 'fail'" color="red" dark
                        >mdi-close</v-icon
                    >
                    <v-icon
                        v-show="item.status === 'waiting'"
                        color="orange"
                        dark
                        >mdi-repeat</v-icon
                    >
                </template>

                <!-- templaty pro zobtazení informací v tabulce -->
                <template v-slot:item.actions="{ item }">
                    <!-- edit -->
                    <v-icon
                        v-if="userData.user_role != 'náhled'"
                        @click="(channelId = item.id), openEditDialog()"
                        small
                        class="mr-2"
                        >mdi-pencil</v-icon
                    >

                    <!-- delete -->
                    <v-icon
                        v-if="userData.user_role != 'náhled'"
                        @click="(deviceId = item.id), openDeleteDialog()"
                        small
                        color="red"
                        >mdi-delete</v-icon
                    >

                    <!-- Konec templatu -->
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
import Alert from "../../alerts/AlertComponent";
export default {
    data: () => ({
        device: "",
        loadingBtn: false,
        editDialog: false,
        deleteDialog: false,
        alertDialog: false,
        alertData: false,
        dialog: false,
        headers: [
            { text: "Nazev", value: "name" },
            { text: "IP", value: "ip" },
            { text: "Status", value: "status" },
            { text: "Akce", value: "actions" }
        ],
        devices: [],
        search: "",
        deviceId: "",
        status: "",
        loading: false,
        userData: false
    }),
    components: {
        "alert-component": Alert
    },
    created() {
        this.listenEvent();
        // Informace, zda jsou nefunknčí streamy
        let currentObj = this;
        window.axios.get("/api/devices").then(response => {
            if (response.data.stat === "warning") {
                currentObj.status = response.data;
            } else {
                currentObj.devices = response.data;
            }
        });

        axios.get("/api/user/get").then(function(response) {
            currentObj.userData = response.data;
        });
    },

    mounted() {
        this.interval = setInterval(
            function() {
                let currentObj = this;
                axios.get("/api/user/get").then(function(response) {
                    currentObj.userData = response.data;
                });
            }.bind(this),
            5000
        );
    },

    methods: {
        listenEvent() {
            Echo.channel("devices").listen("DevicesUpdate", devices => {
                console.log(devices);
                // this.devices = [ ...this.devices , devices]
                this.devices = devices;
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
