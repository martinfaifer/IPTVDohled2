<template>
    <div>
        <v-timeline class="mt-12 ml-12" width="800px" v-show="messeges != false">
            <v-timeline-item
                v-for="singleMessege in messeges"
                :key="singleMessege.id"
                large
            >
                <template v-slot:icon>
                    <v-avatar v-show="singleMessege.avatar != false">
                        <img :src="singleMessege.avatar" />
                    </v-avatar>

                    <v-icon v-show="singleMessege.avatar === false"
                        >mdi-account-circle</v-icon
                    >
                </template>
                <template v-slot:opposite>
                    <span>{{ singleMessege.user }}</span>
                    <p>
                        <small>{{ singleMessege.created_at }}</small>
                    </p>
                </template>
                <v-card class="elevation-2" width="250px">
                    <v-card-actions v-show="singleMessege.showActions === true">
                        <v-spacer></v-spacer>
                        <v-icon
                            small
                            color="red"
                            @click="(noteId = singleMessege.id), deleteNote()"
                            >mdi-delete</v-icon
                        >
                    </v-card-actions>
                    <v-card-text>{{ singleMessege.note }}</v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>

        <div class="mt-12 ml-12">
            <v-btn color="success" outlined text small @click="newNote()"
                >Vytvořit novou poznámku</v-btn
            >
        </div>

        <!-- new note dialog -->

        <v-row justify="center">
            <v-dialog v-model="noteDialog" persistent max-width="600px">
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea
                                    :rules="noteRule"
                                    v-model="note"
                                    required
                                    autofocus=""
                                    hint="nová poznámka"
                                ></v-textarea>
                            </v-col>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" text @click="closeNewNote()"
                            >Zavřít</v-btn
                        >
                        <v-btn
                            color="success"
                            :disabled="note === ''"
                            text
                            @click="saveNewNote()"
                            >Uložit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- end of new note dialog -->
    </div>
</template>
<script>
export default {
    props: ["channelId"],
    data: () => ({
        messeges: [],
        channel: [],
        noteDialog: false,
        note: "",
        noteId: "",
        noteRule: [v => !!v || "pole nesmí být prázdné"]
    }),
    created() {
        let currentObj = this;
        axios
            .post("/api/channel/messeges", {
                id: this.channelId
            })
            .then(function(response) {
                currentObj.messeges = response.data;
            })
            .catch(function(error) {
                console.log("chyba" + error);
            });
    },

    methods: {
        newNote() {
            this.noteDialog = true;
        },

        saveNewNote() {
            let currentObj = this;

            axios
                .post("/api/channel/message/create", {
                    channelId: this.channelId,
                    note: this.note
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.note = "";

                    currentObj.noteDialog = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        deleteNote() {
            axios
                .post("/api/channel/message/delete", {
                    noteId: this.noteId
                })
                .then(function(response) {
                    currentObj.status = response.data;
                    currentObj.noteId = "";
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        closeNewNote() {
            (this.noteDialog = false), (this.note = "");
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                let currentObj = this;
                axios
                    .post("/api/channel/messeges", {
                        id: this.channelId
                    })
                    .then(function(response) {
                        currentObj.messeges = response.data;
                    })
                    .catch(function(error) {
                        console.log("chyba" + error);
                    });
            }.bind(this),
            1000
        );
    }
};
</script>
