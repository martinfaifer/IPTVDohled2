<template>
    <div class="body-1">
        <!-- test crash -->
        <crashed-streams class="mt-12" transition="scroll-y-transition"></crashed-streams>
        <!-- end test crash -->
        <!-- konec alertingu -->
        <v-container class="ml-12" fluid>
            <v-row class="mx-auto mt-1 ma-1 mr-1">
                <div v-for="stream in streams" v-bind:key="stream.id">
                    <!-- Taby pro přehled -->
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <!-- Crash  -->
                            <v-card
                                flat
                                color="red"
                                v-if="stream.Alert === 'error'"
                                class="mx-auto ma-0"
                                width="250"
                                @click="
                                    channelInfoFunction(),
                                        (channelId = stream.id),
                                        (channelName = stream.nazev),
                                        (channelApi = stream.api),
                                        (urlDokumentace = stream.dokumentaceUrl)
                                "
                            >
                                <v-list-item>
                                    <v-list-item-content
                                        v-on="on"
                                        class="text-center"
                                    >
                                        <v-list-item-title>{{
                                            stream.nazev
                                        }}</v-list-item-title>
                                        <v-btn
                                            color="black"
                                            height="140"
                                            width="140"
                                        >
                                            <v-img
                                                height="140"
                                                :alt="stream.nazev"
                                            >
                                                <v-icon
                                                    color="red"
                                                    class="mt-8"
                                                    large
                                                >
                                                    mdi-television-off
                                                </v-icon>
                                            </v-img>
                                        </v-btn>
                                        <v-list-item-subtitle></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>

                            <!-- end  -->

                            <v-card
                                flat
                                v-else
                                color="transparent"
                                class="mx-auto ma-1 mr-1"
                                width="250"
                                @click="
                                    channelInfoFunction(),
                                        (channelId = stream.id),
                                        (channelName = stream.nazev),
                                        (channelApi = stream.api),
                                        (urlDokumentace = stream.dokumentaceUrl)
                                "
                            >
                                <v-list-item>
                                    <v-list-item-content
                                        v-on="on"
                                        class="text-center"
                                    >
                                        <v-list-item-title>{{
                                            stream.nazev
                                        }}</v-list-item-title>

                                        <v-btn
                                            color="transparent"
                                            height="140"
                                            width="140"
                                        >
                                            <v-img
                                                v-if="stream.img === 'false'"
                                                :alt="stream.nazev"
                                                height="140"
                                                contain
                                            >
                                                <v-progress-circular
                                                    :size="70"
                                                    :width="7"
                                                    color="grey lighten-5"
                                                    indeterminate
                                                ></v-progress-circular>
                                            </v-img>

                                            <v-img
                                                v-else-if="
                                                    stream.img ===
                                                        '/storage/noImg.jpg'
                                                "
                                                :alt="stream.nazev"
                                                height="140"
                                                contain
                                            >
                                                <v-icon
                                                    color="orange"
                                                    class="mt-8"
                                                    large
                                                >
                                                    mdi-television-off
                                                </v-icon>
                                                <v-row
                                                    v-show="
                                                        stream.audioLang != null
                                                    "
                                                    align="end"
                                                    class="lightbox white--text fill-height"
                                                >
                                                    <v-col>
                                                        <div
                                                            class="body-1 green--text"
                                                        >
                                                            <strong>
                                                                {{
                                                                    stream.audioLang
                                                                }}
                                                            </strong>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-img>
                                            <v-img
                                                v-else-if="
                                                    stream.img ===
                                                        '/storage/radioImage.png'
                                                "
                                                :alt="stream.nazev"
                                                height="140"
                                                contain
                                            >
                                                <v-icon class="mt-8" large>
                                                    mdi-radio
                                                </v-icon>
                                            </v-img>
                                            <v-img
                                                v-else
                                                :lazy-src="stream.img"
                                                :alt="stream.nazev"
                                                :src="stream.img"
                                                height="140"
                                                contain
                                            >
                                                <!-- template pro získání animace loadingu pri lazy nacteni obrázku -->
                                                <template v-slot:placeholder>
                                                    <v-row
                                                        class="fill-height ma-0"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="grey lighten-5"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>

                                                <v-row
                                                    v-show="
                                                        stream.audioLang != null
                                                    "
                                                    align="end"
                                                    class="lightbox white--text fill-height"
                                                >
                                                    <v-col>
                                                        <div
                                                            class="body-1 green--text"
                                                        >
                                                            <strong>
                                                                {{
                                                                    stream.audioLang
                                                                }}
                                                            </strong>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-img>
                                        </v-btn>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </template>
                    </v-tooltip>
                    <!-- Konec tabu pro přehled -->
                </div>
            </v-row>
            <br />
            <v-pagination
                v-model="pagination.current"
                :length="pagination.total"
                circle
                @input="onPageChange"
            ></v-pagination>
        </v-container>

        <!-- modal -->
        <v-row justify="center">
            <v-dialog
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                v-model="channelInfo"
            >
                <v-card>
                    <v-toolbar dark color="transparent">
                        <v-btn icon dark @click="channelInfo = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <!-- content -->
                    <!-- navigation -->
                    <v-row>
                        <v-toolbar color="transparent" flat dense dark>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="contextMenu = 'prehled'"
                                :color="colorPrehled"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-btn>
                            <v-btn
                                v-show="channelApi === '1'"
                                @click="contextMenu = 'api'"
                                :color="colorApi"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-glasses</v-icon>
                            </v-btn>

                            <v-btn
                                @click="contextMenu = 'grafy'"
                                :color="colorGrafs"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-chart-bar</v-icon>
                            </v-btn>

                            <v-btn
                                @click="contextMenu = 'ffprobe'"
                                :color="colorFfprobe"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-loupe</v-icon>
                            </v-btn>

                            <v-btn
                                @click="contextMenu = 'notes'"
                                :color="colorNote"
                                class="white--text"
                                icon
                            >
                                <v-icon>mdi-message</v-icon>
                            </v-btn>

                            <!-- mdi-message -->
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </v-row>
                    <v-row class="mt-6" justify="center">
                        <div>
                            <v-row
                                v-if="contextMenu === 'prehled'"
                                class="title"
                                >{{ channelName }} - Přehled</v-row
                            >
                            <v-row v-if="contextMenu === 'api'" class="title"
                                >{{ channelName }} - Výpis z Dokumentace</v-row
                            >
                            <v-row
                                v-if="contextMenu === 'ffprobe'"
                                class="title"
                                >{{ channelName }} - FFProbe</v-row
                            >
                            <v-row v-if="contextMenu === 'grafy'" class="title"
                                >{{ channelName }} - Grafy</v-row
                            >
                            <v-row v-if="contextMenu === 'notes'" class="title"
                                >{{ channelName }} - Poznámky</v-row
                            >
                        </div>
                    </v-row>

                    <!-- end navigation -->
                    <v-row>
                        <!-- img -->
                        <div class="mt-12 ml-12">
                            <img-component
                                v-if="channelId != ''"
                                :channelId="channelId"
                            ></img-component>
                        </div>
                        <!-- end img -->
                        <v-row class="ml-12">
                            <ffprobeTree-component
                                v-if="
                                    channelId != '' && contextMenu === 'ffprobe'
                                "
                                :channelId="channelId"
                            ></ffprobeTree-component>
                            <apidokumentace-component
                                v-if="channelId != '' && contextMenu === 'api'"
                                :channelId="channelId"
                            ></apidokumentace-component>
                            <channelBitrate-component
                                v-if="
                                    channelId != '' && contextMenu === 'prehled'
                                "
                                :channelId="channelId"
                            ></channelBitrate-component>
                            <chart-component
                                v-if="
                                    channelId != '' && contextMenu === 'grafy'
                                "
                                :channelId="channelId"
                            ></chart-component>
                            <note-component
                                v-if="
                                    channelId != '' && contextMenu === 'notes'
                                "
                                :channelId="channelId"
                            >
                            </note-component>
                        </v-row>
                    </v-row>
                    <!-- end content -->
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end modal -->

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>
<script>
import ImgComponent from "./channelDetail/ImgComponent";
import FFProbeComponent from "./channelDetail/ChannelDetailTreeFFprobe";
import BitrateComponent from "./channelDetail/ChannelNameWithBitrate";
import crashedStreams from "./channelDetail/AlertChannelComponent";
import ChartComponent from "./channelDetail/ChannelDetailCharts";
import ApiDokumentaceComponent from "./channelDetail/ApiDokumentaceComponent";
import NoteComponent from "./channelDetail/NoteComponent";
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
            contextMenu: "prehled",
            color: "",
            colorPrehled: "teal",
            colorFfprobe: "",
            colorNote: "",
            colorGrafs: "",
            colorApi: "",
            channelId: "",
            channelName: "",
            urlDokumentace: "",
            url: "",
            urlData: "",
            detailInfo: "",
            channelInfo: false,
            channelApi: "",
            problems: "",
            crashed: "",
            page: 1,
            allStreams: "",
            streams: [],
            pagination: {
                current: 1,
                total: 0
            },
            interval: false,
            crashInterval: false,
            paginationInterval: false,
            problemInterval: false,
            detailInterval: false,
            items: [],
            crashedStreams: [],
        };
    },
    created() {
        this.getStreams();
    },
    components: {
        "img-component": ImgComponent,
        "channelBitrate-component": BitrateComponent,
        "ffprobeTree-component": FFProbeComponent,
        "crashed-streams": crashedStreams,
        "chart-component": ChartComponent,
        "apidokumentace-component": ApiDokumentaceComponent,
        "note-component": NoteComponent
    },
    methods: {
        channelInfoFunction() {
            let currentObj = this;
            currentObj.channelInfo = true;
        },
        disableChannelInfoFunction() {
            let currentObj = this;
            currentObj.channelInfo = false;
            currentObj.channelName = "";
            currentObj.channelId = "";
            currentObj.contextMenu = "prehled";
        },
        getStreams() {
            window.axios
                .get("/api/channels/pagination?page=" + this.pagination.current)
                .then(response => {
                    this.streams = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                });
        },
        onPageChange() {
            this.getStreams();
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.getStreams();
            }.bind(this),
            10000
        );

        this.paginationInterval = setInterval(
            function() {
                if (this.pagination.current <= this.pagination.total - 1) {
                    this.pagination.current = this.pagination.current + 1;
                    this.getStreams();
                } else {
                    this.pagination.current = 1;
                    this.getStreams();
                }
            }.bind(this),
            30000
        );
    },
    watch: {
        // Presmerování na login pokud neni prihlasen uzivatel
        channelId: function() {
            if (this.channelId != "") {
                if (this.channelId != "") {
                    let currentObj = this;
                    axios
                        .post("/api/channel/ffprobeGet", {
                            id: this.channelId
                        })
                        .then(function(response) {
                            currentObj.items = response.data;
                        })
                        .catch(function(error) {
                            console.log("chyba" + error);
                        });
                }
            }
        },
        bitrate: function() {
            if (this.bitrate.bit_rate) {
                this.speed = this.bitrate.bit_rate / 10000;
            }
        },
        contextMenu: function() {
            if (this.contextMenu === "prehled") {
                (this.colorPrehled = "teal"),
                    (this.colorFfprobe = ""),
                    (this.colorGrafs = "");
                this.colorApi = "";
                this.colorNote = "";
            } else if (this.contextMenu === "ffprobe") {
                (this.colorPrehled = ""),
                    (this.colorFfprobe = "teal"),
                    (this.colorGrafs = "");
                this.colorApi = "";
                this.colorNote = "";
            } else if (this.contextMenu === "grafy") {
                (this.colorPrehled = ""),
                    (this.colorFfprobe = ""),
                    (this.colorGrafs = "teal");
                this.colorApi = "";
                this.colorNote = "";
            } else if (this.contextMenu === "api") {
                (this.colorPrehled = ""),
                    (this.colorFfprobe = ""),
                    (this.colorGrafs = "");
                this.colorNote = "";
                this.colorApi = "teal";
            } else if (this.contextMenu === "notes") {
                (this.colorPrehled = ""),
                    (this.colorFfprobe = ""),
                    (this.colorGrafs = "");
                this.colorApi = "";
                this.colorNote = "teal";
            }
        }
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    },

    beforeDestroy: function() {
        clearInterval(this.paginationInterval);
    }
};
</script>
