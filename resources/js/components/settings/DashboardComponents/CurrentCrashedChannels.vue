<template>
    <div class="md-5">
        <div v-if="crashed != false">
            <v-data-table
                :dense="userData.dense"
                loading-text="načítají se data"
                :headers="headers"
                :items="crashed"
                item-key="name"
                class="elevation-0"
                :items-per-page=5

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
            <v-alert type="success" class="font-weight-regular"
                >Není zde žádný alert</v-alert
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
    computed: {
        userData() {
            return this.$store.state.userData;
        },
    },
    created() {
        // Informace, zda jsou nefunknčí streamy
        this.loadCrashedChannels();
    },

    methods: {
        getNazevColor(nazev) {
            return "red--text";
        },

        loadCrashedChannels() {
            window.axios
                .get("/api/channels/crashed/forDashboard")
                .then(response => {
                    this.crashed = response.data;
                });
        }
    },
    mounted() {
        this.interval = setInterval(
            function() {
                this.loadCrashedChannels();
            }.bind(this),
            30000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
