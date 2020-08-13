<template>
    <div class="mb-8">
        <v-data-table
            :dense="userData.dense"
            fixed-header
            :headers="headers"
            :items="crashed"
            item-key="name"
            class="elevation-0"
            :items-per-page=5
        >
            <template v-slot:item.name="{ item }">
                <span class="red--text">{{ item.name }}</span>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        },
        crashed() {
            return this.$store.state.deviceAlerts;
        }
    },
    data() {
        return {
            interval: false,
            headers: [
                {
                    text: "Problémová IPTV zařízení",
                    align: "center",
                    value: "name"
                }
            ]
        };
    },

};
</script>
