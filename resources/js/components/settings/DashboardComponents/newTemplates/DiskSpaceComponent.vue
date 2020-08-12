<template>
    <div>
        <div>
            <v-row class="mr-12">
                <!-- zobrazení podbarneví jak je na tom HDD -->
                <!-- pokud je do 80% green -->
                <div v-show="percent.percents < '80'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percents"
                        color="green"
                        >{{ percent.percents }} %</v-progress-circular
                    >
                </div>

                <!-- mezi 80 - 90% -->
                <div
                    v-show="percent.percents > '80' && percent.percents < '90'"
                >
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percents"
                        color="orange"
                        >{{ percent.percents }} %</v-progress-circular
                    >
                </div>

                <!-- nad 90%-->
                <div v-show="percent.percents > '90'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percents"
                        color="red"
                        >{{ percent.percents }} %</v-progress-circular
                    >
                </div>

                <span class="mt-10">
                    <span class="display-1">{{ percent.freeSpace }}GB /</span>
                    {{ percent.allspace }}GB využití HDD
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
            percent: []
        };
    },
    created() {
        this.loadHdd();
    },

    methods: {
        loadHdd() {
            window.axios.get("/api/disk").then(response => {
                this.percent = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadHdd();
            }.bind(this),
            3000000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
