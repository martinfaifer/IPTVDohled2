<template>
    <div>
        <div>
            <v-row>
                <!-- kanály od 90% do 100% -->
                <div v-if="percent.percent === '100' || percent.percent > '90'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percent"
                        color="green"
                        >{{ percent.percent }} %</v-progress-circular
                    >
                </div>
                <!-- kanály od 70% do 89% -->
                <div
                    v-else-if="percent.percent > '70' || percent.percent < '90'"
                >
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percent"
                        color="orange"
                        >{{ percent.percent }} %</v-progress-circular
                    >
                </div>

                <!-- kanály pod 70% -->
                <div v-else>
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percent"
                        color="red"
                        >{{ percent.percent }} %</v-progress-circular
                    >
                </div>

                <span class="mt-10">
                    <span class="display-1">{{ percent.checl }} /</span>
                    {{ percent.celkem }} funknčích kanálů
                </span>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            interval: false,
            percent: ""
        };
    },
    created() {
        this.loadChannels();
    },

    methods: {
        loadChannels() {
            window.axios
                .get("/api/channels/functions/percent")
                .then(response => {
                    this.percent = response.data;
                });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadChannels();
            }.bind(this),
            5000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
