<template>
    <div class="mb-5">
        <v-data-table
            :dense="userData.dense"
            width="100px"
            :loading="tableLoading === 'true'"
            loading-text="Načítám data ..."
            :headers="headers"
            :items="devices"
            class="elevation-1"
        >
            <template v-slot:item.status="{ item }">
                <v-icon v-if="item.status != 'online'" color="red"
                    >mdi-close</v-icon
                >
                <v-icon v-else color="green">mdi-check</v-icon>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: [],
            tableLoading: "true",
            interval: false,
            devices: [],
            headers: [
                {
                    text: "Zařízení po API",
                    align: "center",
                    value: "name"
                },
                { text: "Status", value: "status" }
            ]
        };
    },
    created() {
        this.loadDevices();

        this.loadUser();
    },

    methods: {
        getCountColor(count) {
            return "red--text";
        },

        loadDevices() {
            window.axios.get("/api/devices/connection/api").then(response => {
                this.devices = response.data;
                this.tableLoading = "false";
            });
        },

        loadUser() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadDevices();
            }.bind(this),
            300000
        );

        this.interval = setInterval(
            function() {
                this.loadUser();
            }.bind(this),
            10000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
