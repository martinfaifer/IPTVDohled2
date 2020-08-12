<template>
    <div class="mb-8">
        <v-data-table
            :dense="userData.dense"
            fixed-header
            :headers="headers"
            :items="crashed"
            item-key="name"
            class="elevation-1"
        >
            <template v-slot:item.name="{ item }">
                <span class="red--text" dark>{{ item.name }}</span>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
            interval: false,
            crashed: [],
            headers: [
                {
                    text: "Problémová IPTV zařízení",
                    align: "center",
                    value: "name"
                }
            ]
        };
    },
    created() {
        this.loadIptvDevices();
    },

    methods: {
        loadIptvDevices() {
            window.axios.get("/api/devices/crash").then(response => {
                this.crashed = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadIptvDevices();
            }.bind(this),
            10000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
