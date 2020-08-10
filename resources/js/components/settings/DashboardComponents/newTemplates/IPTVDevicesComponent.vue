<template>
    <div>
        <div>
            <v-row class="mr-12">
                <!-- od 100 do 80% green -->

                <div v-if="percent.percent === '100' || percent.percent > '80'">
                    <v-progress-circular
                        class="mt-2 mr-6"
                        :size="100"
                        :width="3"
                        :value="percent.percent"
                        color="success"
                        >{{ percent.percent }} %</v-progress-circular
                    >
                </div>
                <!-- od 60 do 80% -->
                <div
                    v-else-if="percent.percent > '60' || percent.percent < '80'"
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
                    <span class="display-1">{{ percent.checl }} / </span>
                    {{ percent.celkem }} funknčích zařízení
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
        this.loadDevices();
    },

    methods: {
        loadDevices() {
            window.axios.get("/api/devices/chart").then(response => {
                this.percent = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadDevices();
            }.bind(this),
            30000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
