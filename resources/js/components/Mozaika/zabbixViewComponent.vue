<template>
    <div class="mt-12">
        <div v-if="crashed != false">
            <v-data-table
                :dense="userData.dense"
                loading-text="načítají se data"
                :headers="headers"
                :items="crashed"
                item-key="name"
                class="elevation-0 body-1"
                :items-per-page="100"
            >
                <template v-slot:item.img="{ item }">
                    <div>
                        <v-img :src="item.img" height="25" width="25"></v-img>
                    </div>
                </template>
                <template v-slot:item.api="{ item }">
                    <v-icon v-if="item.api != '1'" color="red"
                        >mdi-close</v-icon
                    >
                    <v-icon v-else color="green">mdi-check</v-icon>
                </template>
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
                    text: "poslední vytvořený náhled",
                    value: "img"
                },
                {
                    text: "kanál",
                    value: "nazev"
                },
                {
                    text: "napojení na API",
                    value: "api"
                },
                {
                    text: "audio",
                    value: "audioLang"
                },
                {
                    text: "Aktualizováno",
                    value: "updated_at"
                }
            ]
        };
    },
    computed: {
        userData() {
            return this.$store.state.userData;
        }
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
            10000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
