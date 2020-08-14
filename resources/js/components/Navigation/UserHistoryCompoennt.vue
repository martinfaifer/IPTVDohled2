<template>
    <div>
        <div v-show="userLog != false" class="ml-3">
            <v-subheader>Log se uchovává po dobu 7 dnů</v-subheader>
            <v-col class="body-2">
                <v-data-table
                    v-if="userLog != false"
                    :dense="userData.dense"
                    fixed-header
                    :headers="headers"
                    :items="userLog"
                    :sort-by="['created_at']"
                    :sort-desc="[true]"
                    :search="search"
                    multi-sort
                    class="elevation-0 mr-12"
                    :items-per-page="5"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="transparent">
                            <v-text-field
                                class="body-2"
                                autofocus
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Vyhledávání v uživatelském logu..."
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-toolbar>
                    </template>
                </v-data-table>
            </v-col>
        </div>
        <div v-show="userLog === false">
            <v-alert class="ml-12" text outlined color="deep-orange">
                Není evidována žádná Vaše historie
            </v-alert>
        </div>
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
            userLog: false,
            search: "",
            headers: [
                {
                    text: "Uživatel",
                    align: "start",
                    value: "userId"
                },
                { text: "Akce", value: "akce" },
                { text: "Data", value: "data" },
                { text: "Vytvořeno", value: "created_at" }
            ]
        };
    },

    created() {
        this.loadUserLog();
    },

    methods: {
        loadUserLog() {
            window.axios.get("/api/user/history").then(response => {
                this.userLog = response.data;
            });
        }
    }
};
</script>
