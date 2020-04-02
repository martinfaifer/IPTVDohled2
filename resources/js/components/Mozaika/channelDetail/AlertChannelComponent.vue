<template>
  <div>
    <br />
    <div id="alertDivMozaika">
      <template>
        <div
          dense
          v-for="item in crashedStreams"
          :key="item.id"
          class="white--text font-weight-normal"
        >
          <transition name="fade" mode="out-in">
            <v-alert dense type="error" elevation="24">
              <v-row>
                <v-spacer></v-spacer>
                <strong class="subtitle-2">{{item.nazev}}</strong>
                <v-spacer></v-spacer>
                <v-btn
                  @click="channelId = item.id, channelName = item.nazev"
                  color="red"
                  fab
                  x-small
                  dark
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-row>
            </v-alert>
          </transition>
        </div>
      </template>
    </div>
    <!-- modal -->
    <v-row justify="center">
      <v-dialog v-model="alertDetailModal" max-width="1920px">
        <v-card>
          <v-card-text>
            <br />
            <p class="title text-center">Výpadky za poslední den</p>
            <v-container height="1920px" fluid>
              <column-chart :colors="['#FF0000']" width="100%" height="200px" :data="crashChart"></column-chart>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="disableChannelInfoFunction()">Zavřít</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- end modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      crashedStreams: [],
      channelId: "",
      channelName: "",
      alertDetailModal: false,
      intervalAlert: false,
      crashChart: []
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/channels/crashed").then(response => {
      this.crashedStreams = response.data;
    });
  },
  methods: {
    disableChannelInfoFunction() {
      let currentObj = this;
      currentObj.alertDetailModal = false;
      currentObj.channelName = "";
      currentObj.channelId = "";
      currentObj.crashChart = [];
    },

    loadAlerts() {
      axios.get("/api/channels/crashed").then(response => {
        this.crashedStreams = response.data;
      });
    }
  },
  mounted() {
    this.loadAlerts();
    this.intervalAlert = setInterval(
      function() {
        this.loadAlerts();
      }.bind(this),
      2000
    );
  },
  watch: {
    channelId: function() {
      if (this.channelId !== "") {
        let currentObj = this;
        axios
          .post("/api/channel/chart/crash/hour", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.crashChart = response.data;
            currentObj.alertDetailModal = true;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });
      }
    }
  }
};
</script>

