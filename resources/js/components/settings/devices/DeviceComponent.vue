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

                                <!-- dialog zalození zarizeni kanalu-->
                                <v-card>
                                    <v-card-title class="headline"
                                        >Založení nového zařízení</v-card-title
                                    >
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field
                                                    label="Název zařízení"
                                                    v-model="deviceName"
                                                    :rules="deviceNameRule"
                                                    autofocus
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field
                                                    label="IP"
                                                    v-model="deviceIp"
                                                    :rules="deviceIpRule"
                                                    hint="IPv4 pro dohled"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12">
                                                <v-autocomplete
                                                    v-model="dohledType"
                                                    :rules="
                                                        deviceDohledTypeRule
                                                    "
                                                    :items="['ping', 'api']"
                                                    label="typ dohledu zařízení"
                                                ></v-autocomplete>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <!-- Uloženi / zavrení dialogu -->
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="red darken-1"
                                            text
                                            @click="closeDialogAndResetImputs()"
                                            >Zavřít</v-btn
                                        >
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            :disabled="
                                                deviceName === '' ||
                                                    deviceIp === '' ||
                                                    dohledType === ''
                                            "
                                            @click="saveNewImput()"
                                            >Uložit</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                                <!-- end dialog zalozeni zarizeni kananlu-->
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
                        @click="
                            (deviceId = item.id),
                                openEditDialogAndTakeDataAboutDevice()
                        "
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

        <v-row justify="center">
            <v-dialog v-model="editDialog" persistent max-width="500">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    label="Název zařízení"
                                    v-model="editDevice.name"
                                    :rules="deviceNameRule"
                                    autofocus
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    label="IP"
                                    v-model="editDevice.ip"
                                    :rules="deviceIpRule"
                                    hint="IPv4 pro dohled"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-autocomplete
                                    v-model="dohledType"
                                    :rules="deviceDohledTypeRule"
                                    :items="['ping', 'api']"
                                    label="typ dohledu zařízení"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeDialogAndResetImputs()"
                            >Zavřít</v-btn
                        >
                        <v-btn
                            :disabled="
                                editDevice.name === '' || editDevice.ip === ''
                            "
                            color="green darken-1"
                            text
                            @click="saveEditDialog()"
                            >Editovat</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end edit dialog -->


        <!-- delete dialog -->
        <v-row justify="center">
            <v-dialog v-model="deleteDialog" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Smazat zařízení?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeDialogAndResetImputs()"
                            >Nemazat</v-btn
                        >
                        <v-btn
                            :loading="loading"
                            color="green darken-1"
                            text
                            @click="sendDeleteDialog()"
                            >Smazat</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end delete dialog -->

    </div>
</template>
<script>
import Alert from "../../alerts/AlertComponent";
export default {
    data: () => ({
        device: "",
        deviceName: "",
        deviceIp: "",
        deviceId: "",
        dohledType: "",
        loadingBtn: false,
        editDialog: false,
        deleteDialog: false,
        alertDialog: false,
        alertData: false,
        dialog: false,
        editDevice: [],
        deviceNameRule: [v => !!v || "musí být vyplněný název zařízení"],
        deviceIpRule: [v => !!v || "je zapotřebí IPv4 adresa"],
        deviceDohledTypeRule: [v => !!v || "vyberte jak dohledovat zařízení"],
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
        this.loadDevices();

        this.loadUserData();
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadUserData();
            }.bind(this),
            5000
        );
    },

    methods: {
        loadDevices() {
            let currentObj = this;
            window.axios.get("/api/devices").then(response => {
                if (response.data.stat === "warning") {
                    currentObj.status = response.data;
                } else {
                    currentObj.devices = response.data;
                }
            });
        },

        loadUserData() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        },
        closeDialogAndResetImputs() {
            this.dialog = false;
            this.editDialog = false;
            this.deleteDialog = false,
            this.deviceId = "";
            this.deviceName = "";
            this.deviceIp = "";
            this.dohledType = "";
        },

        saveNewImput() {
            let currentObj = this;
            currentObj.loading = true;
            axios
                .post("/api/device/create", {
                    deviceName: this.deviceName,
                    deviceIp: this.deviceIp,
                    dohledType: this.dohledType
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.dialog = false;
                    currentObj.deviceName = "";
                    currentObj.deviceIp = "";
                    currentObj.dohledType = "";

                    currentObj.loadDevices();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        openEditDialogAndTakeDataAboutDevice() {
            let currentObj = this;
            axios
                .post("/api/device/get", {
                    deviceId: this.deviceId
                })
                .then(function(response) {
                    currentObj.editDevice = response.data;
                    currentObj.editDialog = true;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        saveEditDialog() {
            let currentObj = this;
            currentObj.loading = true;
            axios
                .post("/api/device/edit", {
                    deviceName: this.editDevice.name,
                    deviceId: this.deviceId,
                    deviceIp: this.editDevice.ip,
                    dohledType: this.dohledType
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.editDialog = false;
                    currentObj.editDevice = "";
                    currentObj.dohledType = "";
                    currentObj.deviceId = "";

                    currentObj.loadDevices();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        openDeleteDialog() {
            this.deleteDialog = true;
        },

        sendDeleteDialog() {
            let currentObj = this;
            currentObj.loading = true;
            axios
                .post("/api/device/delete", {
                    deviceId: this.deviceId,
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.deleteDialog = false;
                    currentObj.deviceId = "";

                    currentObj.loadDevices();
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
