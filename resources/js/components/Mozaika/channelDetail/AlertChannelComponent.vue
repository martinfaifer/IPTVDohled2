<template>
    <div>
        <br />
        <div id="alertDivMozaika">
                <div>
                    <div
                        v-for="item in crashedStreams"
                        :key="item.id"
                        class="white--text body-1"
                    >
                        <!-- <transition name="fade" mode="out-in"> -->
                            <v-alert
                                dense
                                transition="scroll-y-transition"
                                border="bottom"
                                type="error"
                                elevation="24"
                            >
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <strong class="body-1">{{
                                        item.nazev
                                    }}</strong>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        class="pb-2"
                                        @click="
                                            (channelId = item.id),
                                                (channelName = item.nazev)
                                        "
                                        color="error"
                                        fab
                                        elevation="0"
                                        x-small
                                        dark
                                    >
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-alert>
                        <!-- </transition> -->
                    </div>
                </div>
                <div v-show="crashedStreams === false">
                    <!-- <transition name="fade" mode="out-in"> -->
                        <v-alert transition="scroll-y-transition" border="bottom" type="success" elevation="24">
                            <v-row>
                                <strong class="body-1"
                                    >Všechny kanály fungují</strong
                                >
                            </v-row>
                        </v-alert>
                    <!-- </transition> -->
                </div>
        </div>
        <!-- modal -->
        <v-row justify="center">
            <v-dialog v-model="alertDetailModal" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <br />
                        <p class="title text-center">
                            Výpadky za poslední den
                        </p>
                        <v-container height="1920px" fluid>
                            <v-timeline align-top dense>
                                <v-timeline-item
                                    v-for="crashData in crashChart"
                                    v-bind:key="crashData.id"
                                    :color="crashData.color"
                                    small
                                >
                                    <v-row class="pt-1">
                                        <v-col cols="12">
                                            <strong>{{
                                                crashData.time
                                            }}</strong>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                            </v-timeline>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="disableChannelInfoFunction()"
                            >Zavřít</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end modal -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            crashedStreams: [],
            channelId: "",
            channelName: "",
            alertDetailModal: false,
            intervalAlert: false,
            crashChart: []
        };
    },
    created() {
        // Informace, zda jsou nefunknčí streamy
        window.axios.get("/api/channels/crashed").then(response => {
            this.crashedStreams = response.data;
        });
    },
    methods: {
        disableChannelInfoFunction() {
            let currentObj = this;
            currentObj.alertDetailModal = false;
            currentObj.channelName = "";
            currentObj.channelId = "";
            currentObj.crashChart = [];
        },

        loadAlerts() {
            axios.get("/api/channels/crashed").then(response => {
                this.crashedStreams = response.data;
            });
        }
    },
    mounted() {
        this.loadAlerts();
        this.intervalAlert = setInterval(
            function() {
                this.loadAlerts();
            }.bind(this),
            1000
        );
    },
    watch: {
        channelId: function() {
            if (this.channelId !== "") {
                let currentObj = this;
                axios
                    .post("/api/channel/chart/crash/hour", {
                        id: this.channelId
                    })
                    .then(function(response) {
                        currentObj.crashChart = response.data;
                        currentObj.alertDetailModal = true;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });
            }
        }
    }
};
</script>
