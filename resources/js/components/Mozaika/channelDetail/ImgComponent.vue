<template>
    <div>
        <v-img
            v-if="channelData.img === 'false'"
            width="720px"
            height="405px"
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
            v-else-if="channelData.img === '/storage/noImg.jpg'"
            width="720px"
            height="405px"
            contain
        >
            <v-icon color="orange" class="mt-8 ml-12" large>
                mdi-television-off
            </v-icon>
        </v-img>

        <v-img
            v-else
            :lazy-src="channelData.img"
            :src="channelData.img"
            width="720px"
            height="405px"
            contain
        ></v-img>
    </div>
</template>
<script>
export default {
    props: ["channelId"],
    data() {
        return {
            channelData: [],
            interval: false
        };
    },

    created() {
        this.loadDetail();
    },
    methods: {
        loadDetail() {
            let currentObj = this;
            axios
                .post("/api/channel/getDetail", {
                    id: this.channelId
                })
                .then(function(response) {
                    currentObj.channelData = response.data;
                })
                .catch(function(error) {
                    console.log("chyba" + error);
                });
        }
    },
    mounted() {
        this.interval = setInterval(
            function() {
                this.loadDetail();
            }.bind(this),
            1000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
