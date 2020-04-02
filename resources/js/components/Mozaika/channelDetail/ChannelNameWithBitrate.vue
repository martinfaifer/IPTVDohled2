<template>
  <div>
    <v-card flat class="ml-6 mt-10" height="100%" width="850px">
      <v-card-text>
        <v-row>
          <div v-if="speed != ''" class="font-weight-bold">
            Bitrate:
            <span class="teal--text">{{speed}} Mbps</span>
          </div>
          <div v-else class="font-weight-bold">
            Bitrate:
            <span class="red--text">0 Mbps</span>
          </div>
          <v-spacer></v-spacer>
          <div v-for="video in channelFormats.video ">
            <p v-if="video != 'error'" class="font-weight-bold">
              Video formát:
              <span class="teal--text">{{video}}</span>
            </p>
            <p v-if="video === 'error'" class="font-weight-bold">
              Video formát:
              <span class="red--text">{{video}}</span>
            </p>
          </div>
          <v-spacer></v-spacer>
          <div v-for="audio in channelFormats.audio ">
            <p v-if="audio != 'error'" class="font-weight-bold">
              Audio formát:
              <span class="teal--text">{{audio}}</span>
            </p>
            <p v-if="audio === 'error'" class="font-weight-bold">
              Audio formát:
              <span class="red--text">{{audio}}</span>
            </p>
          </div>
        </v-row>
        <br />
        <v-row>
          <br />
          <p class="text-center">Graf hlasitosti, posledních 60 záznamů</p>
          <line-chart
            label="úroveň hlasitosti v dB"
            width="850px"
            height="250px"
            ytitle="dB"
            :data="volumes"
          ></line-chart>
        </v-row>
        <br />
        <v-row>
          <br />
          <p class="text-center">Graf bitratu, posledních 60 záznamů</p>
          <line-chart
            label="bitrate v Mbps"
            width="850px"
            height="250px"
            ytitle="Bitrate Mbps"
            :data="bitrates"
          ></line-chart>
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
      bitrate: "",
      speed: "",
      channelFormats: [],
      volumes: [],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      bitrates: [],
      interval: false
    };
  },

  created() {
    let currentObj = this;
    axios
      .post("api/channel/bitrate", {
        id: this.channelId
      })
      .then(function(response) {
        currentObj.bitrate = response.data;
      })
      .catch(function(error) {
        console.log("chyba" + error);
      });

    axios
      .post("/api/channel/ffprobe/formats", {
        id: this.channelId
      })
      .then(function(response) {
        currentObj.channelFormats = response.data;
      })
      .catch(function(error) {
        console.log("chyba" + error);
      });

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
  },

  mounted() {
    this.interval = setInterval(
      function() {
        let currentObj = this;
        axios
          .post("api/channel/bitrate", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.bitrate = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });

        axios
          .post("/api/channel/ffprobe/formats", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.channelFormats = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });

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
      }.bind(this),
      30000
    );
  },

  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    }
  }
};
</script>

