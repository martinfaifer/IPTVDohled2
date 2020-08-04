<template>
    <div>
        <v-container>
            <v-row justify="center" class="mt-12">
                <h3>Kalendář planovaných výpadků kanálů</h3>
            </v-row>
            <v-row justify="center" class="mt-3">
                <small>Kanály, které jsou zde zavedené nebudou po dobu výpadku zasílat alert</small>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <v-sheet color="transparent" height="600">
                        <v-toolbar flat color="transparent">
                            <v-btn
                                v-show="userData.user_role === 'admin' || userData.user_role === 'editor'"
                                @click="openModal()"
                                outlined
                                color="teal darken-2"
                            >
                                Přidat novou událost
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-menu bottom right>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        outlined
                                        color="grey darken-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <span>{{ typeToLabel[type] }}</span>
                                        <v-icon right>mdi-menu-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="type = 'day'">
                                        <v-list-item-title
                                            >Denní</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item @click="type = 'week'">
                                        <v-list-item-title
                                            >Týdenní</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item @click="type = 'month'">
                                        <v-list-item-title
                                            >Měsíční</v-list-item-title
                                        >
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-toolbar>
                        <v-calendar
                            class="rounded"
                            ref="calendar"
                            start="monday"
                            end="sunday"
                            now="today"
                            event-color="red darken-3"
                            :value="today"
                            :events="events"
                            color="teal"
                            :type="type"
                        ></v-calendar>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>

        <!-- create event dialog -->
        <v-row justify="center">
            <v-dialog v-model="newEventDialog" persistent max-width="800">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-autocomplete
                                    v-model="channelId"
                                    :items="channels"
                                    item-text="nazev"
                                    item-value="id"
                                    label="Vyberte kanál"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <!-- zacatek -->
                        <v-row class="ml-6" v-show="channelId != ''">
                            <strong class="white--text">zacatek akce</strong>
                            <v-row>
                                <v-col cols="6" sm="6" md="6">
                                    <v-date-picker
                                        v-model="startDate"
                                        flat
                                    ></v-date-picker>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" sm="6" md="6">
                                    <v-time-picker
                                        v-model="startTime"
                                        format="24hr"
                                    ></v-time-picker>
                                </v-col>
                            </v-row>
                        </v-row>
                        <!-- konec -->
                        <v-row class="ml-6" v-show="channelId != '' || startDate != '' || startTime != ''">
                            <strong class="white--text">konec akce</strong>
                            <v-row>
                                <v-col cols="6" sm="6" md="6">
                                    <v-date-picker
                                        v-model="endDate"
                                        flat
                                    ></v-date-picker>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" sm="6" md="6">
                                    <v-time-picker
                                        v-model="endTime"
                                        format="24hr"
                                    ></v-time-picker>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeDialogAndResetImputs()"
                            >Zavřít</v-btn
                        >
                        <v-btn
                            color="green darken-1"
                            text
                            :disabled="endTime === '' || startTime === '' || endDate === '' || startDate === '' || channelId === ''"
                            @click="saveEditDialog()"
                            >Uložit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- end create event dialog -->
    </div>
</template>
<script>
export default {
    data: () => ({
        userData: [],
        endTime: "",
        startTime: "",
        endDate: "",
        startDate: "",
        channelId: "",
        channels: [],
        newEventDialog: false,
        today: new Date(),
        events: [],
        type: "month",
        typeToLabel: {
            month: "měsíční",
            week: "týdenní",
            day: "denní"
        }
    }),
    created() {
        this.loadCalendarData();
        this.loadUserData();

    },
    methods: {
        loadCalendarData() {
            window.axios.get("/api/calendar").then(response => {
                this.events = response.data;
            });
        },

        loadUserData() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        },

        loadChannels() {
            window.axios.get("/api/calendar/channels").then(response => {
                this.channels = response.data;
            });
        },

        openModal() {
            this.newEventDialog = true;
            this.loadChannels();
        },
        closeDialogAndResetImputs() {
            this.newEventDialog = false;
        },
        saveEditDialog() {
            let currentObj = this;
            axios
                .post("/api/calendar/save", {
                    channelId: this.channelId,
                    startTime: this.startTime,
                    startDate: this.startDate,
                    endTime: this.endTime,
                    endDate: this.endDate
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.newEventDialog = false;
                    currentObj.channelId = "";
                    currentObj.startDate = "";
                    currentObj.startTime = "";
                    currentObj.endTime = "";
                    currentObj.endDate = "";
                    currentObj.loadCalendarData();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.$refs.calendar.scrollToTime("08:00");
    }
};
</script>
