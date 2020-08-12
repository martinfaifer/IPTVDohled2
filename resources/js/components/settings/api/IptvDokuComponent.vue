<template>
    <div>
        <div class="ml-12">
            <v-data-table
                :dense="userData.dense"
                :headers="headers"
                :items="dokuData"
                class="elevation-0 mr-12"
            ></v-data-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            interval: false,
            dokuData: [],
            headers: [
                {
                    text: "typ Req",
                    align: "start",
                    value: "type"
                },
                { text: "Url", value: "apiUrl" },

                { text: "APi klíč", value: "apiKey" }
            ]
        };
    },
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    created() {
        let currentObj = this;
        axios.get("/api/channels/api/showData").then(function(response) {
            currentObj.dokuData = response.data;
        });
    },
    methods: {}
};
</script>
