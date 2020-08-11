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
            userData: [],
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
    created() {
        this.loadUserData();

        let currentObj = this;
        axios.get("/api/channels/api/showData").then(function(response) {
            currentObj.dokuData = response.data;
        });
    },
    methods: {
        loadUserData() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        }
    },
    mounted() {
        this.interval = setInterval(
            function() {
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
