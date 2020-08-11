<template>
  <div>
    <div>
      <v-row class="mr-12">
        <div v-for="transcodersData in apiData" :key="transcodersData.id">
            <div v-for="transcoderData in transcodersData.data" :key="transcoderData.id">
                {{transcoderData.transcoder}}
            </div>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: false,
      apiData: []
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/devices/connection/api").then(response => {
      this.apiData = response.data;
    });
  },

  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/devices/connection/api").then(response => {
          this.apiData = response.data;
        });
      }.bind(this),
      60000
    );
  },

  beforeDestroy: function() {
    clearInterval(this.interval);
  }
};
</script>
