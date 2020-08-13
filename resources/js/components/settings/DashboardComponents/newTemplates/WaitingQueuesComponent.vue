<template>
    <div class="mb-8">
        <div v-if="queue != false">
            <v-data-table
                :loading="tableLoading === 'true'"
                :dense="userData.dense"
                fixed-header
                :headers="headers"
                :items="queue"
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
            queue: false,
            tableLoading: "true",
            interval: false,
            headers: [
                {
                    text: "connection",
                    align: "center",
                    value: "connection"
                },
                {
                    text: "queue",
                    value: "queue"
                }
            ]
        };
    },

    created() {
        this.loadQueue();
    },

    methods: {
        loadQueue() {
            window.axios.get("/api/queue/waiting").then(response => {
                this.queue = response.data;
                this.tableLoading = "false";
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadQueue();
            }.bind(this),
            30000
        );
    },

    beforeDestroy: function() {
        clearInterval(this.interval);
    }
};
</script>
