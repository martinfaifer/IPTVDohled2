<template>
    <div class="md-5">
        <div v-if="crashed != false">
            <v-data-table
                :dense="userData.dense"
                loading-text="načítají se data"
                :headers="headers"
                :items="crashed"
                item-key="name"
                class="elevation-1"
            >
                <template v-slot:item.nazev="{ item }">
                    <router-link
                        :to="'/settings/channels/' + item.id + '/charts'"
                        target="_blank"
                    >
                        <a :class="getNazevColor(item.nazev)" dark>{{
                            item.nazev
                        }}</a>
                    </router-link>
                </template>
            </v-data-table>
        </div>
        <div v-else>
            <v-alert
                type="success"
                class="font-weight-regular"
                >Není zde žádný alert</v-alert
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: [],
            interval: false,
            crashed: [],
            headers: [
                {
                    text: "Nefunkční kanály",
                    align: "center",
                    value: "nazev"
                }
            ]
        };
    },
    created() {
        // Informace, zda jsou nefunknčí streamy
        window.axios
            .get("/api/channels/crashed/forDashboard")
            .then(response => {
                this.crashed = response.data;
            });

        let currentObj = this;
        axios.get("/api/user/get").then(function(response) {
            currentObj.userData = response.data;
        });
    },

    methods: {
        getNazevColor(nazev) {
            return "red--text";
        }
    },
    mounted() {
        this.interval = setInterval(
            function() {
                window.axios
                    .get("/api/channels/crashed/forDashboard")
                    .then(response => {
                        this.crashed = response.data;
                    });

                let currentObj = this;
                axios.get("/api/user/get").then(function(response) {
                    currentObj.userData = response.data;
                });
            }.bind(this),
            5000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
