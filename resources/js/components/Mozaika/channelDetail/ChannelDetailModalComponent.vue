<template>
    <v-row justify="center">
        <v-dialog v-model="channelInfo" persistent max-width="800px">
            <v-card>
                <v-card-text>
                    <v-container></v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="channelInfo = false"
                        >Zavřít</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    props: ["channelInfo"],
    data() {
        return {
            channelData: [],
            bitrate: [],
            speed: "",
            ffprobe: [],
            contextMenu: "prehled",
            color: "",
            colorPrehled: "teal",
            colorFfprobe: "",
            colorGrafs: ""
        };
    },

    methods: {},

    watch: {}
};
</script>
