<template>
  <div class="body-2">
    <transition name="fade" mode="out-in">
      <alert-component v-if="status != []" :status="status"></alert-component>
    </transition>
    <v-data-table :headers="headers" :items="channels" :search="search" class="elevation-1">
      <template v-slot:top>
        <v-toolbar color="transparent" flat>
          <v-text-field
            autofocus
            v-model="search"
            append-icon="mdi-magnify"
            label="Hledání..."
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <div v-if="userData.user_role != 'náhled'">
            <v-dialog v-model="dialog" persistent max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="teal" dark class="mb-2" v-on="on">Nový kanál</v-btn>
              </template>

              <!-- dialog zalození noveho kanalu-->
              <v-card>
                <v-card-title class="headline">Založení nového kanálu</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="channelInput"
                        label="Adresa dohledovaného streamu"
                        autofocus
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row v-if="ffprobeOutput.stat === 'success'">
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="ffprobeOutput.nazev" label="Popis streamu"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row v-if="ffprobeOutput.stat === 'success'">
                    <v-col cols="12" sm="3" md="8">
                      <v-select
                        v-model="worker"
                        :items="workers"
                        item-value="id"
                        item-text="workerName"
                        label="Worker, který bude kanál zpracovávat"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row v-if="ffprobeOutput.stat === 'success'">
                    <v-checkbox v-model="dohledovatKanal" label="Dohledovat stream?"></v-checkbox>
                  </v-row>
                  <v-row v-if="ffprobeOutput.stat === 'success'">
                    <v-checkbox v-model="radio" label="Radio?"></v-checkbox>
                  </v-row>
                </v-card-text>
                <!-- ffprobe status / zavreni dialogu -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="ffprobeAnalyzedData === 'false' && loading === false"
                    color="red darken-1"
                    text
                    @click="closeDialogAndResetImputs()"
                  >Zavřít</v-btn>
                  <v-btn
                    v-if="channelInput != '' && ffprobeAnalyzedData === 'false'"
                    :loading="loading"
                    color="green darken-1"
                    text
                    @click="runFFProbe()"
                  >Analyzovat</v-btn>
                </v-card-actions>

                <!-- Uloženi / zavrení dialogu -->
                <v-card-actions v-if="ffprobeOutput.stat === 'success'">
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="closeDialogAndResetImputs()">Zavřít</v-btn>
                  <v-btn color="green darken-1" text @click="saveNewImput()">Uložit</v-btn>
                </v-card-actions>
              </v-card>
              <!-- end dialog zalozeni noveho kananlu-->
            </v-dialog>
          </div>
        </v-toolbar>
      </template>
      <!-- templaty pro zobtazení informací v tabulce -->
      <template v-slot:item.img="{ item }">
        <v-img :src="getImg(item.img)" height="25" width="25"></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- edit -->
        <v-icon
          v-if="userData.user_role != 'náhled'"
          @click="channelId = item.id,openEditDialog()"
          small
          class="mr-2"
        >mdi-pencil</v-icon>

        <!-- delete -->
        <v-icon
          v-if="userData.user_role != 'náhled'"
          @click="channelId = item.id, openDeleteDialog() "
          small
          color="red"
        >mdi-delete</v-icon>

        <!-- Alerting -->
        <v-tooltip v-if="userData.user_role != 'náhled'" bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              @click="channelId = item.id, openAlertDialog()"
              v-on="on"
              small
              color="primary"
            >mdi-bell-ring</v-icon>
          </template>
          <span>Alerting</span>
        </v-tooltip>

        <router-link :to="'channels/'+ item.id + '/charts'" target="_blank">
          <v-icon small color="teal">mdi-chart-line</v-icon>
        </router-link>
      </template>

      <template v-slot:item.noMonitor="{ item }">
        <v-icon :color="getMonitorStatus(item.noMonitor)" dark>{{ item.noMonitor }}</v-icon>
      </template>

      <template v-slot:item.Alert="{ item }">
        <a :class="getAlertColor(item.Alert)" dark>{{ item.Alert }}</a>
      </template>
      <!-- Konec templatu -->
    </v-data-table>
    <!-- delete dialog -->
    <v-row justify="center">
      <v-dialog v-model="deleteDialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">Smazat kanal?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="closeDeleteDialog()">Nemazat</v-btn>
            <v-btn :loading="loading" color="green darken-1" text @click="sendDeleteDialog()">Smazat</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- end delete dialog -->

    <!-- edit dialog -->
    <v-row justify="center">
      <v-dialog v-model="editDialog" persistent max-width="500">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="editdat.url" label="Adresa dohledovaného streamu" readonly></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="editdat.nazev" label="Popis dohledovaného streamu"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <a
                  class="blue--text"
                >aktuální worker {{editdat.worker}} -> pokud nechcete měnit nevyplňujte</a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="3" md="8">
                <v-select
                  v-model="worker"
                  :items="workers"
                  item-value="id"
                  item-text="workerName"
                  label="Worker, který bude kanál zpracovávat"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-checkbox v-model="editdat.dohled" label="Dohledovat stream?"></v-checkbox>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="closeEditDialog()">Zavřít</v-btn>
            <v-btn color="green darken-1" text @click="saveEditDialog()">Editovat</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- end edit dialog -->

    <!-- alert dialog -->
    <v-row justify="center">
      <v-dialog v-model="alertDialog" persistent width="1000">
        <v-card>
          <v-card-title class="headline">Nastavení, kdy kanál má posílat Alerting</v-card-title>
          <v-card-text>
            <v-row v-if="alertData != false">
              <span class="red--text">
                <strong>Aktualně nastavené pravidlo je nastaveno: od {{alertData.start_dohled}} do {{alertData.end_dohled}}</strong>
              </span>
            </v-row>
            <v-row class="mt-2">
              <v-row>
                <span>Začatek platnosti pravidla</span>
                <v-time-picker v-model="start" format="24hr"></v-time-picker>
              </v-row>

              <v-row>
                <span>Konec platnosti pravidla</span>
                <v-time-picker v-model="end" format="24hr"></v-time-picker>
              </v-row>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="closeAlertDialog()">Zavřít</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="removeAlertDialog()"
            >Odebrat Stávající pravidlo</v-btn>
            <v-btn color="green darken-1" text @click="saveAlertDialog()">Uložit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- end alert dialog -->
  </div>
</template>
<script>
import Alert from "../../alerts/AlertComponent";
export default {
  data: () => ({
    loadingBtn: false,
    editDialog: false,
    deleteDialog: false,
    alertDialog: false,
    alertData: false,
    start: "",
    end: "",
    dialog: false,
    channelInput: "",
    ffprobeAnalyzedData: "false",
    ffprobeOutput: [],
    dohledovatKanal: true,
    radio: false,
    headers: [
      {
        text: "IMG",
        align: "start",
        sortable: false,
        value: "img"
      },
      { text: "Nazev kanálu", value: "nazev" },
      { text: "URL", value: "url" },
      { text: "Worker", value: "worker_id" },
      { text: "Dohledováno", value: "noMonitor" },
      { text: "Status", value: "Alert" },
      { text: "Akce", value: "actions" }
    ],
    channels: [],
    search: "",
    channelId: "",
    status: "",
    channelName: "",
    loading: false,
    workers: [],
    worker: "",
    editdat: [],
    userData: false
  }),
  components: {
    "alert-component": Alert
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/channels").then(response => {
      this.channels = response.data;
    });

    let currentObj = this;
    axios.get("/api/user/get").then(function(response) {
      currentObj.userData = response.data;
    });
  },
  methods: {
    openAlertDialog() {
      let currentObj = this;

      axios
        .post("/api/channel/alerting/get", {
          channelId: this.channelId
        })
        .then(function(response) {
          currentObj.alertData = response.data;
          currentObj.alertDialog = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    closeAlertDialog() {
      this.alertDialog = false;
      this.start = "";
      this.end = "";
      this.alertData = false;
    },
    saveAlertDialog() {
      let currentObj = this;
      axios
        .post("/api/channel/alerting/edit", {
          channelId: this.channelId,
          start: this.start,
          end: this.end
        })
        .then(function(response) {
          currentObj.status = response.data;
          currentObj.alertDialog = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    removeAlertDialog() {
      let currentObj = this;
      axios
        .post("/api/channel/alerting/remove", {
          channelId: this.channelId
        })
        .then(function(response) {
          currentObj.status = response.data;
          currentObj.alertDialog = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveEditDialog() {
      let currentObj = this;
      axios
        .post("/api/channel/edit", {
          channelId: this.channelId,
          url: this.editdat.url,
          nazev: this.editdat.nazev,
          dohled: this.editdat.dohled,
          workerId: this.worker
        })
        .then(function(response) {
          currentObj.status = response.data;
          currentObj.editDialog = false;
          currentObj.channelId = "";
          currentObj.editdat = [];
          window.axios.get("/api/channels").then(response => {
            currentObj.channels = response.data;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    openEditDialog() {
      let currentObj = this;

      axios
        .post("/api/channel/getdata", {
          channelId: this.channelId
        })
        .then(function(response) {
          axios
            .get("/api/channel/freeWorkers")
            .then(response => (currentObj.workers = response.data));
          currentObj.editdat = response.data;
          currentObj.editDialog = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    closeEditDialog() {
      this.editDialog = false;
      this.channelId = "";
      this.workers = [];
      this.worker = "";
    },
    openDeleteDialog() {
      this.deleteDialog = true;
    },

    sendDeleteDialog() {
      let currentObj = this;
      currentObj.loading = true;
      axios
        .post("/api/channel/delete", {
          channelId: this.channelId
        })
        .then(function(response) {
          currentObj.status = response.data;
          currentObj.deleteDialog = false;
          currentObj.channelId = "";
          currentObj.loading = false;
          window.axios.get("/api/channels").then(response => {
            currentObj.channels = response.data;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    closeDeleteDialog() {
      this.deleteDialog = false;
      this.channelId = "";
    },
    closeDialogAndResetImputs() {
      this.dialog = false;
      this.channelInput = "";
      (this.ffprobeAnalyzedData = "false"),
        (this.dohledovatKanal = true),
        (this.ffprobeOutput = []);
      this.workers = [];
      this.loading = false;
    },

    runFFProbe() {
      //  analyzovat stream
      let currentObj = this;
      currentObj.loading = true;
      axios
        .post("/api/channel/ffprobe", {
          url: this.channelInput
        })
        .then(function(response) {
          if (response.data["stat"] === "error") {
            currentObj.status = response.data;
            currentObj.loading = false;
          } else {
            currentObj.ffprobeOutput = response.data;
            currentObj.ffprobeAnalyzedData = "true";
            currentObj.loading = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      axios
        .get("/api/channel/freeWorkers")
        .then(response => (this.workers = response.data));
    },

    saveNewImput() {
      let currentObj = this;
      currentObj.loading = true;
      axios
        .post("/api/channel/create", {
          url: this.channelInput,
          channelName: this.ffprobeOutput.nazev,
          workerId: this.worker,
          dohledovat: this.dohledovatKanal,
          radio: this.radio
        })
        .then(function(response) {
          currentObj.status = response.data;
          currentObj.dialog = false;
          currentObj.channelInput = "";
          (currentObj.ffprobeAnalyzedData = "false"),
            (currentObj.dohledovatKanal = true),
            (currentObj.ffprobeOutput = []);
          currentObj.workers = [];
          currentObj.loading = false;

          axios.get("/api/channels").then(response => {
            currentObj.channels = response.data;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // Fn pro barevné rozlišení zda je kanal monitorovan -> mdi-check => zelena, jinak mdi-close => red
    getMonitorStatus(noMonitor) {
      if (noMonitor === "mdi-check") return "green";
      else return "red";
    },
    getImg(img) {
      if (img === "false") {
        return "/storage/noImg.jpg";
      } else {
        return img;
      }
    },
    getAlertColor(Alert) {
      if (Alert === "success") return "green--text";
      else return "red--text";
    }
  },
  watch: {
    status: function() {
      setTimeout(() => (this.status = false), 3000);
    }
  }
};
</script>
