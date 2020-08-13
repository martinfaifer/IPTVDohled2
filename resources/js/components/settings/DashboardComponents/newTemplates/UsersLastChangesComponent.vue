<template>
    <div class="mb-8">
        <div v-if="lastChanges != false">
            <v-data-table
                :loading="tableLoading === 'true'"
                :dense="userData.dense"
                fixed-header
                :headers="headers"
                :items="lastChanges"
                item-key="name"
                class="elevation-0"
                :items-per-page="5"
            >
            </v-data-table>
        </div>
        <div v-else>
            <v-data-table
                :dense="userData.dense"
                fixed-header
                :headers="headers"
                class="elevation-0"
                :items-per-page="5"
                no-data-text="Neexistuje žádný záznam"
            >
            </v-data-table>
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
            lastChanges: false,
            tableLoading: "true",
            interval: false,
            headers: [
                {
                    text: "Uživatel",
                    align: "center",
                    value: "userId"
                },
                {
                    text: "Akce",
                    value: "akce"
                },
                {
                    text: "Data",
                    value: "data"
                }
            ]
        };
    },

    created() {
        this.loadLastUsersChanges();
    },

    methods: {
        loadLastUsersChanges() {
            window.axios.get("/api/users/history/lastTwenty").then(response => {
                this.lastChanges = response.data;
                this.tableLoading = "false";
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadLastUsersChanges();
            }.bind(this),
            60000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
