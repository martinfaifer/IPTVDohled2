<template>
  <div>
    <div>
      <v-row class="mr-12">
        <v-progress-circular
          class="mt-2 mr-6"
          :size="100"
          :width="3"
          :value="percent"
          color="primary"
        >{{ percent }} %</v-progress-circular>
        <span class="mt-10">
          <span class="display-1">CPU</span>
        </span>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: false,
      percent: []
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/cpu").then(response => {
      this.percent = response.data;
    });
  },

  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/cpu").then(response => {
          this.percent = response.data;
        });
      }.bind(this),
      10000
    );
  },

  beforeDestroy: function() {
    clearInterval(this.interval);
  }
};
</script>
