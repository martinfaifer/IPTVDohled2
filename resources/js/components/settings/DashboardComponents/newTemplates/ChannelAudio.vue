<template>
    <div>
        <div>
            <v-row class="mr-12">
                <!-- do 50% green -->
                <div v-if="percent < '50'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent"
                        color="green"
                        >{{ percent }} %</v-progress-circular
                    >
                </div>
                <!-- od 50 do 80% -->
                <div v-else-if="percent > '50' && percent < '80'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent"
                        color="orange"
                        >{{ percent }} %</v-progress-circular
                    >
                </div>

                <div v-else>
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent"
                        color="red"
                        >{{ percent }} %</v-progress-circular
                    >
                </div>

                <span class="mt-10">
                    <span class="display-1">CPU</span>
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
        // Informace, zda jsou nefunknčí streamy
        this.loadCpu();
    },
    methods: {
        loadCpu() {
            window.axios.get("/api/cpu").then(response => {
                this.percent = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadCpu();
            }.bind(this),
            10000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
