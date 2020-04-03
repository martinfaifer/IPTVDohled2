<template>
  <div class="mb-8">
    <v-data-table
      fixed-header
      :headers="headers"
      :items="crashed"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: false,
      crashed: [],
      headers: [
        {
          text: "Kanály, kde se nepodařilo detekovat audio",
          align: "center",
          value: "nazev"
        }
      ]
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/channels/audioProblem").then(response => {
      this.crashed = response.data;
    });
  },
  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/channels/audioProblem").then(response => {
          this.crashed = response.data;
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
