<template>
  <v-row justify="center">
    <v-dialog v-model="channelInfo" persistent max-width="800px">
      <v-card>
        <v-card-text>
          <v-container></v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="channelInfo = false">Zavřít</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
// import Image from "./ImgComponent";
// import ChannelNameWithBitrate from "./ChannelNameWithBitrate";
// import ChannelDetailTreeFFprobe from "./ChannelDetailTreeFFprobe";

export default {
  props: ["channelInfo"],
  data() {
    return {
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
  //   created() {
  //     let currentObj = this;
  //     axios
  //       .post("/api/channel/getDetail", {
  //         id: this.$route.params.id
  //       })
  //       .then(function(response) {
  //         currentObj.channelData = response.data;
  //       })
  //       .catch(function(error) {
  //         console.log("chyba" + error);
  //       });

  //     axios
  //       .post("api/channel/bitrate", {
  //         id: this.$route.params.id
  //       })
  //       .then(function(response) {
  //         currentObj.bitrate = response.data;
  //       })
  //       .catch(function(error) {
  //         console.log("chyba" + error);
  //       });
  //   },
  methods: {
    // sendMessageToParent() {
    //   this.$emit(channelInfo);
    // }
  },

  //   components: {
  //     "img-component": Image,
  //     "channelBitrate-component": ChannelNameWithBitrate,
  //     "ffprobeTree-component": ChannelDetailTreeFFprobe
  //   },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    //   bitrate: function() {
    //     if (this.bitrate.bit_rate) {
    //       this.speed = this.bitrate.bit_rate / 10000;
    //     }
    //   },
    //   contextMenu: function() {
    //     if (this.contextMenu === "prehled") {
    //       (this.colorPrehled = "teal"),
    //         (this.colorFfprobe = ""),
    //         (this.colorGrafs = "");
    //     } else if (this.contextMenu === "ffprobe") {
    //       (this.colorPrehled = ""),
    //         (this.colorFfprobe = "teal"),
    //         (this.colorGrafs = "");
    //     } else if (this.contextMenu === "grafy") {
    //       (this.colorPrehled = ""),
    //         (this.colorFfprobe = ""),
    //         (this.colorGrafs = "teal");
    //     }
    //   }
  }
};
</script>

