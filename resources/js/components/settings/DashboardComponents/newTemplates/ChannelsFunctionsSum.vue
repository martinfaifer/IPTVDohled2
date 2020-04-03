<template>
  <div>
    <div>
      <v-row>
        <v-progress-circular
          class="mt-2 mr-6"
          :size="100"
          :width="3"
          :value="percent.percent"
          color="green"
        >{{ percent.percent }} %</v-progress-circular>
        <span class="mt-10">
          <span class="display-1">{{percent.checl}} /</span>
          {{percent.celkem}} funknčích kanálů
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
      percent: ""
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/channels/functions/percent").then(response => {
      this.percent = response.data;
    });
  },
  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/channels/functions/percent").then(response => {
          this.percent = response.data;
        });
      }.bind(this),
      2000
    );
  },

  beforeDestroy: function() {
    clearInterval(this.interval);
  }
};
</script>
