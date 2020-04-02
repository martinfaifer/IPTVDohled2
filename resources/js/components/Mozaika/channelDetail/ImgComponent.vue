<template>
  <div>
    <v-img :src="channelData.img" width="500px" height="280px"></v-img>
  </div>
</template>
<script>
export default {
  props: ["channelId"],
  data() {
    return {
      channelData: []
    };
  },

  created() {
    let currentObj = this;
    axios
      .post("/api/channel/getDetail", {
        id: this.channelId
      })
      .then(function(response) {
        currentObj.channelData = response.data;
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
          .post("/api/channel/getDetail", {
            id: this.channelId
          })
          .then(function(response) {
            currentObj.channelData = response.data;
          })
          .catch(function(error) {
            console.log("chyba" + error);
          });
      }.bind(this),
      5000
    );
  }
};
</script>
