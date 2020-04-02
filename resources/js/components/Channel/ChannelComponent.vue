<template>
  <div>
    <br />
    <br />
    <!-- konec alertingu -->
    <v-container class="ml-12" fluid>
      <!-- komponent pro získání náhledu -->
      <div class="channelDetailImg">
        <img-component :img="channelData.img"></img-component>
      </div>

      <div>
        <v-row>
          <v-card class="overflow-hidden">
            <v-app-bar class="mt-12" color="transparent" fixed dense dark>
              <v-spacer></v-spacer>
              <v-btn
                @click="contextMenu = 'prehled'"
                :color="colorPrehled"
                class="white--text"
                icon
              >
                <v-icon>mdi-view-dashboard</v-icon>
              </v-btn>
              <v-btn
                @click="contextMenu = 'ffprobe'"
                :color="colorFfprobe"
                class="white--text"
                icon
              >
                <v-icon>mdi-loupe</v-icon>
              </v-btn>
              <v-btn @click="contextMenu = 'grafy'" :color="colorGrafs" class="white--text" icon>
                <v-icon>mdi-chart-bar</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-app-bar>
          </v-card>
        </v-row>

        <v-row>
          <!-- <transition name="fade" mode="out-in"> -->
          <channelBitrate-component
            v-if="contextMenu == 'prehled'"
            class="mx-auto mt-10 ma-1"
            :channelName="channelData.nazev"
            :bitrate="speed"
          ></channelBitrate-component>
          <!-- </transition> -->
        </v-row>
        <v-row>
          <!-- <transition name="fade" mode="out-in"> -->
          <!-- <ffprobeTree-component v-if="contextMenu == 'ffprobe'" class="mx-auto mt-10 ma-1"></ffprobeTree-component> -->
          <v-treeview v-if="contextMenu == 'ffprobe'" open-on-click dense hoverable :items="items"></v-treeview>

          <!-- </transition> -->
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
// import Image from "./ImgComponent";
// import ChannelNameWithBitrate from "./ChannelNameWithBitrate";
// import ChannelDetailTreeFFprobe from "./ChannelDetailTreeFFprobe";

export default {
  data() {
    return {
      items: [],
      channelData: [],
      bitrate: [],
      speed: "",
      ffprobe: [],
      contextMenu: "prehled",
      color: "",
      colorPrehled: "teal",
      colorFfprobe: "",
      colorGrafs: ""
    };
  },
  created() {
    let currentObj = this;
    axios
      .post("/api/channel/getDetail", {
        id: this.$route.params.id
      })
      .then(function(response) {
        currentObj.channelData = response.data;
      })
      .catch(function(error) {
        console.log("chyba" + error);
      });

    axios
      .post("api/channel/bitrate", {
        id: this.$route.params.id
      })
      .then(function(response) {
        currentObj.bitrate = response.data;
      })
      .catch(function(error) {
        console.log("chyba" + error);
      });
  },
  methods: {},

  //   components: {
  //     "img-component": Image,
  //     "channelBitrate-component": ChannelNameWithBitrate,
  //     "ffprobeTree-component": ChannelDetailTreeFFprobe
  //   },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    },
    contextMenu: function() {
      if (this.contextMenu === "prehled") {
        (this.colorPrehled = "teal"),
          (this.colorFfprobe = ""),
          (this.colorGrafs = "");
      } else if (this.contextMenu === "ffprobe") {
        (this.colorPrehled = ""),
          (this.colorFfprobe = "teal"),
          (this.colorGrafs = "");
      } else if (this.contextMenu === "grafy") {
        (this.colorPrehled = ""),
          (this.colorFfprobe = ""),
          (this.colorGrafs = "teal");
      }
    }
  }
};
</script>
