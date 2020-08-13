<template>
    <div>
        <div class="text-center">
            <div v-show="userData.alert != 'hide'">
                <div v-if="crashed != false">
                    <div v-for="crash in crashed" :key="crash.name">
                        <v-snackbar
                            v-model="snackbar"
                            color="error"
                            timeout="10000"
                            multi-line
                        >
                            <v-row justify="center">
                                Neodpovídá <strong>{{ crash.name }}</strong>
                            </v-row>
                        </v-snackbar>
                    </div>
                </div>
                <!-- <div v-else>
                    <v-snackbar
                        color="success"
                        timeout="10000"

                    >
                        <v-row justify="center">
                            <strong>Všechny zařízení fungují</strong>
                        </v-row>
                    </v-snackbar>
                </div> -->
            </div>
        </div>
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
            snackbar: false
        };
    },
    watch: {
        crashed: function() {
            if (this.crashed != false) {
                this.snackbar = true;
            } else {
                this.snackbar = false;
            }
        }
    }
};
</script>
