<template>
    <div>
        <div>
            <v-row>
                <!-- pokud je od 100% do 90% green -->
                <div v-if="percent.percent > '90' || percent.percent === '100'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percent"
                        color="green"
                        >{{ percent.percent }} %</v-progress-circular
                    >
                </div>

                <!-- pokud je od 60% do 90% orange -->
                <div
                    v-else-if="percent.percent > '60' && percent.percent < '90'"
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

                <!-- pokud je pod 60% red -->
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
                    {{ percent.celkem }} dohledovaných kanálů
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
            window.axios.get("/api/channels/percent").then(response => {
                this.percent = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadChannels();
            }.bind(this),
            30000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
