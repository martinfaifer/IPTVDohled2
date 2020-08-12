<template>
    <div>
        <div class="ml-12">
            <v-data-table
                :dense="userData.dense"
                :headers="headers"
                :items="usersData"
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
            usersData: [],
            headers: [
                {
                    text: "email",
                    align: "start",
                    value: "email"
                },
                { text: "ApiKlíč", value: "apiKlic" }
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
        axios.get("/api/users/api").then(function(response) {
            currentObj.usersData = response.data;
        });
    },
    methods: {}
};
</script>
