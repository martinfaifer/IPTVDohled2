<template>
  <div>
    <v-card flat class="ml-6 mt-2" height="100%" width="850px">
      <v-card-text>
        <v-row>
          <v-col class="d-flex" cols="8" sm="2">
            <v-select :items="items" v-model="value" label="Typ Grafu" dense></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <!-- Zobrazeni grafu na hlasitost -->
          <div v-if="value === 'Hlasitost'">
            <br />
            <p class="text-center">Graf hlasitosti, posledních 60 záznamů</p>
            <line-chart
              label="úroveň hlasitosti v dB"
              width="900px"
              height="250px"
              xtitle="posledních 60min"
              ytitle="dB"
              :data="volumes"
            ></line-chart>
            <br />
            <p class="text-center">Graf hlasitosti za 24h</p>
            <line-chart
              label="úroveň hlasitosti v dB"
              width="900px"
              height="250px"
              xtitle="Data za jeden den"
              ytitle="dB"
              :data="dayVolumesdata"
            ></line-chart>
          </div>
          <div v-if="value === 'Datový tok'">
            <br />
            <p class="text-center">Graf bitratu, posledních 60 záznamů</p>
            <line-chart
              label="bitrate v Mbps"
              width="900px"
              height="250px"
              xtitle="posledních 60min"
              ytitle="Bitrate"
              :data="bitrates"
            ></line-chart>
            <br />
            <p class="text-center">Graf bitratu za 24h</p>
            <line-chart
              label="bitrate v Mbps"
              width="900px"
              height="250px"
              xtitle="Data za jeden den"
              ytitle="Bitrate"
              :data="dayBitrates"
            ></line-chart>
          </div>
          <div v-if="value === 'Výpadky'">
            <br />
            <p class="text-center">Graf výpadků za 24h</p>
            <column-chart :colors="['#FF0000']" width="900px" height="450px" :data="crasheddata"></column-chart>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["channelId"],
  data() {
    return {
      channelFormats: [],
      volumes: [],
      dayVolumesdata: [],
      bitrates: [],
      dayBitrates: [],
      crasheddata: [],

      items: ["Hlasitost", "Datový tok", "Výpadky"],
      value: ""
    };
  },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    },
    value: function() {
      if (this.value === "Hlasitost") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];

        let currentObj = this;
        axios
          .post("/api/channel/volume", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.volumes = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });

        // graf s daty za jeden den
        axios
          .post("/api/channel/volume/dayData", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.dayVolumesdata = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });
      } else if (this.value === "Datový tok") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];

        let currentObj = this;

        axios
          .post("/api/channel/bitrates", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.bitrates = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });

        // Data datového toku za jeden den
        axios
          .post("/api/channel/bitrate/dayData", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.dayBitrates = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });
      } else if (this.value === "Výpadky") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];

        let currentObj = this;

        axios
          .post("/api/channel/chart/crash/hour", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.crasheddata = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });
      }
    }
  }
};
</script>

