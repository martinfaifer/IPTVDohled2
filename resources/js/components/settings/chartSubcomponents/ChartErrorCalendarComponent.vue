<template>
    <div>
        <v-container>
            <v-row class="mt-12">
                <v-col>
                    <v-sheet color="transparent" height="600">
                        <v-toolbar flat color="transparent">
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
    </div>
</template>
<script>
export default {
    props: ["channelId"],
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
            window.axios.post("api/calendar/channel/errors", {
                channelId: this.channelId
            }).then(response => {
                this.events = response.data;
            });
        },

        loadUserData() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                currentObj.userData = response.data;
            });
        },
    },
    mounted() {
        this.$refs.calendar.scrollToTime("08:00");
    }
};
</script>
