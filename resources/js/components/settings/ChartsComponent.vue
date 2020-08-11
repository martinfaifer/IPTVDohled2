<template>
    <div class="body-2">
        <transition name="fade" mode="out-in">
            <alert-component
                v-if="status != []"
                :status="status"
            ></alert-component>
        </transition>
        <v-row>
            <v-col class="d-flex" cols="8" sm="2">
                <v-select
                    :items="items"
                    v-model="value"
                    label="Typ Grafu"
                    dense
                ></v-select>
            </v-col>

            <!-- Zobrazeni grafu na hlasitost -->
            <div v-if="value === 'Hlasitost'">
                <div>
                    <br />
                    <p class="text-center">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-icon
                                    @click="cusotmVolumeChartDialog = true"
                                    color="primary"
                                    v-on="on"
                                    >mdi-magnify</v-icon
                                >
                            </template>
                            <span>Vlastní výběr</span>
                        </v-tooltip>
                    </p>
                </div>
                <div v-if="volumeCustomChart === true">
                    <div>
                        <br />
                        <p class="text-center">Uživatelem nadefinovaný graf</p>
                    </div>
                    <line-chart
                        label="úroveň hlasitosti v dB"
                        width="1150px"
                        height="250px"
                        ytitle="dB"
                        :data="customVolumechartdata"
                    ></line-chart>
                </div>
                <div>
                    <br />
                    <p class="text-center">Posledních 60 záznamů</p>
                </div>
                <line-chart
                    label="úroveň hlasitosti v dB"
                    width="1150px"
                    height="250px"
                    xtitle="posledních 60min"
                    ytitle="dB"
                    :data="hourVolumeData"
                ></line-chart>
                <div>
                    <br />
                    <p class="text-center">Data za 24h</p>
                </div>
                <line-chart
                    label="úroveň hlasitosti v dB"
                    width="1150px"
                    height="250px"
                    ytitle="dB"
                    :data="dayVolumesdata"
                ></line-chart>
            </div>
            <div v-if="value === 'Datový tok'">
                <div>
                    <br />
                    <p class="text-center">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-icon
                                    @click="cusotmBitrateChartDialog = true"
                                    color="primary"
                                    v-on="on"
                                    >mdi-magnify</v-icon
                                >
                            </template>
                            <span>Vlastní výběr</span>
                        </v-tooltip>
                    </p>
                </div>
                <div v-if="bitrateCustomChart === true">
                    <div>
                        <br />
                        <p class="text-center">Uživatelem nadefinovaný graf</p>
                    </div>
                    <line-chart
                        label="bitrate v Mbps"
                        width="1150px"
                        height="250px"
                        ytitle="Bitrate v Mbps"
                        :data="customBitratechartdata"
                    ></line-chart>
                </div>
                <br />
                <p class="text-center">Posledních 60 záznamů</p>
                <line-chart
                    label="bitrate v Mbps"
                    width="1150px"
                    height="250px"
                    ytitle="Bitrate V Mbps"
                    :data="bitrates"
                ></line-chart>
                <br />
                <p class="text-center">Data za 24h</p>
                <line-chart
                    label="bitrate v Mbps"
                    width="1150px"
                    height="250px"
                    xtitle="Data za jeden den"
                    ytitle="Bitrate v Mbps"
                    :data="dayBitrates"
                ></line-chart>
            </div>
            <div v-if="value === 'Výpadky'">
                <br>
                <p class="text-center mt-12 ml-12">Data za týden</p>
                <div v-if="crasheddata.status === 'false'" class="ml-12">
                    <br>
                    <v-alert type="success">
                        Kanál nemá evidovaný žádný výpadek
                    </v-alert>
                </div>
                <div v-else class="ml-12">
                    <br>
                    <v-timeline width="200px" align-top dense>
                        <v-timeline-item
                            v-for="crashData in crasheddata"
                            v-bind:key="crashData.id"
                            :color="crashData.color"
                            small
                        >
                            <v-row class="pt-1">
                                <v-col cols="12">
                                    <strong>{{ crashData.time }}</strong>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </div>
        </v-row>

        <!-- modal custom volume chart -->
        <v-row justify="center">
            <v-dialog v-model="cusotmVolumeChartDialog" width="700" persistent>
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-row>
                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    class="ml-8 mr-8"
                                    label="Od"
                                    v-model="odDate"
                                ></v-date-picker>

                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    label="Do"
                                    v-model="doDate"
                                ></v-date-picker>
                            </v-row>

                            <v-row>
                                <v-time-picker
                                    format="24hr"
                                    class="ml-8 mr-8"
                                    v-model="odCas"
                                ></v-time-picker>
                                <v-time-picker
                                    format="24hr"
                                    v-model="doCas"
                                ></v-time-picker>
                            </v-row>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="closeDialog()"
                            >Zavřít</v-btn
                        >
                        <v-btn color="green darken-1" text @click="sendData()"
                            >Zobrazit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end modal custom volume chart -->

        <!-- modal custom bitrate chart -->
        <v-row justify="center">
            <v-dialog v-model="cusotmBitrateChartDialog" width="700" persistent>
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-row>
                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    class="ml-8 mr-8"
                                    label="Od"
                                    v-model="odDate"
                                ></v-date-picker>

                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    label="Do"
                                    v-model="doDate"
                                ></v-date-picker>
                            </v-row>

                            <v-row>
                                <v-time-picker
                                    format="24hr"
                                    class="ml-8 mr-8"
                                    v-model="odCas"
                                ></v-time-picker>
                                <v-time-picker
                                    format="24hr"
                                    v-model="doCas"
                                ></v-time-picker>
                            </v-row>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="closeDialog()"
                            >Zavřít</v-btn
                        >
                        <v-btn
                            color="green darken-1"
                            text
                            @click="sendBitrateData()"
                            >Zobrazit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end modal custom bitrate chart -->

        <!-- modal custom error chart -->
        <v-row justify="center">
            <v-dialog v-model="cusotmErrorChartDialog" width="700" persistent>
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-row>
                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    class="ml-8 mr-8"
                                    label="Od"
                                    v-model="odDate"
                                ></v-date-picker>

                                <v-date-picker
                                    locale="cs"
                                    first-day-of-week="1"
                                    label="Do"
                                    v-model="doDate"
                                ></v-date-picker>
                            </v-row>

                            <v-row>
                                <v-time-picker
                                    format="24hr"
                                    class="ml-8 mr-8"
                                    v-model="odCas"
                                ></v-time-picker>
                                <v-time-picker
                                    format="24hr"
                                    v-model="doCas"
                                ></v-time-picker>
                            </v-row>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="closeDialog()"
                            >Zavřít</v-btn
                        >
                        <v-btn
                            color="green darken-1"
                            text
                            @click="sendErrorteData()"
                            >Zobrazit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end modal custom error chart -->
    </div>
</template>
<script>
let Alert = () => import("../alerts/AlertComponent");
export default {
    props: ["channelId"],
    data() {
        return {
            date1: new Date().toISOString().substr(0, 10),
            allVolume: [],
            odDate: "",
            doDate: "",
            odCas: "",
            doCas: "",
            errorCustomChart: false,
            customErrorchartdata: [],
            volumeCustomChart: false,
            customVolumechartdata: [],
            bitrateCustomChart: false,
            customBitratechartdata: [],
            cusotmBitrateChartDialog: false,
            cusotmErrorChartDialog: false,
            startDate: false,
            hourVolumeData: [],
            channelFormats: [],
            dayVolumesdata: [],
            bitrates: [],
            dayBitrates: [],
            crasheddata: [],
            cusotmVolumeChartDialog: false,
            status: [],
            items: ["Hlasitost", "Datový tok", "Výpadky"],
            value: "Hlasitost"
        };
    },
    components: {
        "alert-component": Alert
    },
    created() {
        let currentObj = this;
        axios
            .post("/api/channel/volume", {
                id: this.$route.params.id
            })
            .then(function(response) {
                currentObj.hourVolumeData = response.data;
            })
            .catch(function(error) {
                console.log("chyba" + error);
            });

        // graf s daty za jeden den
        axios
            .post("/api/channel/volume/dayData", {
                id: this.$route.params.id
            })
            .then(function(response) {
                currentObj.dayVolumesdata = response.data;
            })
            .catch(function(error) {
                console.log("chyba" + error);
            });
    },
    computed: {},

    methods: {
        closeDialog() {
            this.datumOd = "";
            this.doDate = "";
            this.odCas = "";
            this.doCas = "";
            this.cusotmVolumeChartDialog = false;
            this.customBitratechartdata = false;
            this.cusotmErrorChartDialog = false;
        },
        sendData() {
            let currentObj = this;
            axios
                .post("/api/channel/chart/volume/custom", {
                    channelId: this.$route.params.id,
                    datumOd: this.odDate,
                    doDate: this.doDate,
                    odCas: this.odCas,
                    doCas: this.doCas
                })
                .then(function(response) {
                    currentObj.customVolumechartdata = response.data;

                    if (currentObj.customVolumechartdata.stat === "error") {
                        currentObj.status = response.data;
                    } else {
                        currentObj.cusotmVolumeChartDialog = false;
                        currentObj.volumeCustomChart = true;
                        currentObj.datumOd = "";
                        currentObj.doDate = "";
                        currentObj.odCas = "";
                        currentObj.doCas = "";
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        sendBitrateData() {
            let currentObj = this;
            axios
                .post("/api/channel/chart/bitrate/custom", {
                    channelId: this.$route.params.id,
                    datumOd: this.odDate,
                    doDate: this.doDate,
                    odCas: this.odCas,
                    doCas: this.doCas
                })
                .then(function(response) {
                    currentObj.customBitratechartdata = response.data;

                    if (currentObj.customBitratechartdata.stat === "error") {
                        currentObj.status = response.data;
                    } else {
                        currentObj.cusotmBitrateChartDialog = false;
                        currentObj.bitrateCustomChart = true;
                        currentObj.datumOd = "";
                        currentObj.doDate = "";
                        currentObj.odCas = "";
                        currentObj.doCas = "";
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        sendErrorteData() {
            let currentObj = this;
            axios
                .post("/api/channel/chart/error/custom", {
                    channelId: this.$route.params.id,
                    datumOd: this.odDate,
                    doDate: this.doDate,
                    odCas: this.odCas,
                    doCas: this.doCas
                })
                .then(function(response) {
                    currentObj.customErrorchartdata = response.data;

                    if (currentObj.customErrorchartdata.stat === "error") {
                        currentObj.status = response.data;
                    } else {
                        currentObj.cusotmErrorChartDialog = false;
                        currentObj.errorCustomChart = true;
                        currentObj.datumOd = "";
                        currentObj.doDate = "";
                        currentObj.odCas = "";
                        currentObj.doCas = "";
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },

    watch: {
        status: function() {
            setTimeout(() => (this.status = false), 3000);
        },

        bitrate: function() {
            if (this.bitrate.bit_rate) {
                this.speed = this.bitrate.bit_rate / 10000;
            }
        },
        value: function() {
            if (this.value === "Hlasitost") {
                this.volumes = [];
                this.bitrates = [];
                this.dayVolumesdata = [];
                this.dayBitrates = [];

                let currentObj = this;
                axios
                    .post("/api/channel/volume", {
                        id: this.$route.params.id
                    })
                    .then(function(response) {
                        currentObj.volumes = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });

                // graf s daty za jeden den
                axios
                    .post("/api/channel/volume/dayData", {
                        id: this.$route.params.id
                    })
                    .then(function(response) {
                        currentObj.dayVolumesdata = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });
            } else if (this.value === "Datový tok") {
                this.volumes = [];
                this.bitrates = [];
                this.dayVolumesdata = [];
                this.dayBitrates = [];

                let currentObj = this;

                axios
                    .post("/api/channel/bitrates", {
                        id: this.$route.params.id
                    })
                    .then(function(response) {
                        currentObj.bitrates = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });

                // Data datového toku za jeden den
                axios
                    .post("/api/channel/bitrate/dayData", {
                        id: this.$route.params.id
                    })
                    .then(function(response) {
                        currentObj.dayBitrates = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });
            } else if (this.value === "Výpadky") {
                this.volumes = [];
                this.bitrates = [];
                this.dayVolumesdata = [];
                this.dayBitrates = [];

                let currentObj = this;

                axios
                    .post("/api/channel/chart/crash/week", {
                        id: this.$route.params.id
                    })
                    .then(function(response) {
                        currentObj.crasheddata = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });
            }
        }
    }
};
</script>
