<template>
    <div>
        <v-card scrollable flat class="mt-10 ml-6" color="transparent">
            <v-card-text>
                <v-row class="font-weight-bold mb-3">
                    <!-- proklik na dokumentaci pokud existuje -->
                    <a target="_blank" :href="channel.dokumentaceUrl"
                        >Proklik do dokumentace</a
                    >
                </v-row>
                <v-row v-show="items != ''" class="font-weight-bold">
                    <span class="font-weight-bold">Příjem kanálu:</span>
                    <span
                        v-for="multicastDevice in items.multicastDevice"
                        v-bind:key="multicastDevice.name"
                        class="ml-2 teal--text"
                        >{{ multicastDevice.name }}</span
                    >
                    <span class="font-weight-bold ml-8">Transcoder:</span>
                    <span
                        v-for="transcoder in items.h264Device"
                        v-bind:key="transcoder.name"
                        class="ml-2 teal--text"
                        ><a target="_blank" :href="items.h264deviceUrl">{{
                            transcoder.name
                        }}</a></span
                    >
                </v-row>
                <v-row v-show="items != ''" class="font-weight-bold mt-3">
                    Multicast
                </v-row>
                <div
                    v-show="items != ''"
                    class="ml-6 mt-1"
                    v-for="multicast in items.multicast"
                    v-bind:key="multicast.id"
                >
                    <v-row class="mt-1 font-weight-bold">
                        IP k STB:
                        <span class="teal--text ml-2">
                            {{ multicast.ipKstb }}</span
                        >
                    </v-row>
                </div>
                <v-row v-show="items != ''" class="font-weight-bold mt-3">
                    H264
                </v-row>
                <div
                    v-show="items != ''"
                    class="ml-6 mt-1"
                    v-for="h264 in items.h264"
                    v-bind:key="h264.K1080"
                >
                    <v-row
                        v-show="h264.K1080 != null"
                        class="mt-1 font-weight-bold"
                    >
                        1080p:
                        <span class="teal--text ml-2">{{ h264.K1080 }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.K404 != null"
                        class="mt-1 font-weight-bold"
                    >
                        404p:
                        <span class="teal--text ml-2">{{ h264.K404 }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.K576 != null"
                        class="mt-1 font-weight-bold"
                    >
                        576p:
                        <span class="teal--text ml-2">{{ h264.K576 }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.K720 != null"
                        class="mt-1 font-weight-bold"
                    >
                        720p:
                        <span class="teal--text ml-2">{{ h264.K720 }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.m3u8_HLS_kdekoliv != null"
                        class="mt-1 font-weight-bold"
                    >
                        HLS kdekoliv:
                        <span class="teal--text ml-2">{{
                            h264.m3u8_HLS_kdekoliv
                        }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.m3u8_mobile != null"
                        class="mt-1 font-weight-bold"
                    >
                        HLS mobile:
                        <span class="teal--text ml-2">{{
                            h264.m3u8_mobile
                        }}</span>
                    </v-row>
                    <v-row
                        v-show="h264.m3u8_stb != null"
                        class="mt-1 font-weight-bold"
                    >
                        HLS stb:
                        <span class="teal--text ml-2">{{ h264.m3u8_stb }}</span>
                    </v-row>
                </div>
                <v-row v-show="items != ''" class="font-weight-bold mt-3">
                    H265
                </v-row>
                <div
                    v-show="items != ''"
                    class="ml-6 mt-1"
                    v-for="h265 in items.h265"
                    v-bind:key="h265.id"
                >
                    <v-row
                        v-show="h265.K1080 != null"
                        class="mt-1 font-weight-bold"
                    >
                        1080p:
                        <span class="teal--text ml-2">{{ h265.K1080 }}</span>
                    </v-row>
                    <v-row
                        v-show="h265.K720 != null"
                        class="mt-1 font-weight-bold"
                    >
                        720p:
                        <span class="teal--text ml-2">{{ h265.K720 }}</span>
                    </v-row>
                </div>

                <!-- {{items}} -->
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props: ["channelId"],
    data: () => ({
        items: [],
        channel: [],
        interval: false
    }),
    created() {
        this.loadChannelInfo();

        this.loadChannelDetail();
    },

    methods: {
        loadChannelInfo() {
            let currentObj = this;
            axios
                .post("/api/communication/channel", {
                    id: this.channelId
                })
                .then(function(response) {
                    currentObj.items = response.data;
                })
                .catch(function(error) {
                    console.log("chyba" + error);
                });
        },

        loadChannelDetail() {
            let currentObj = this;

            axios
                .post("/api/channel/getDetail", {
                    id: this.channelId
                })
                .then(function(response) {
                    currentObj.channel = response.data;
                })
                .catch(function(error) {
                    console.log("chyba" + error);
                });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadChannelInfo();
                this.loadChannelDetail();
            }.bind(this),
            1000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
