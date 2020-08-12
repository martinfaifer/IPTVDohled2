<template>
    <div>
        <v-row class="title" justify="center">Komunikace po API</v-row>

        <v-container class="body-1" fluid v-if="userData.apiKey != false">
            <v-row class="mt-3">
                <v-subheader>API klíč</v-subheader>
            </v-row>
            <v-row class="mt-3">
                <p class="green--text body-1">{{ userData.apiKey }}</p>
            </v-row>
        </v-container>
        <v-container v-else class="text-center mt-12">
            <v-alert text outlined color="deep-orange">
                Nemáte vytvořený API přístup!!!
            </v-alert>
        </v-container>
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
        };
    },
};
</script>
