<template>
  <div class="mb-8">
    <v-data-table
      fixed-header
      :headers="headers"
      :items="crashed"
      item-key="name"
      class="elevation-1"
    >
     <template v-slot:item.name="{ item }">
          <span class="red--text" dark>{{ item.name }}</span>
      </template>
    </v-data-table>
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
          text: "Problémová IPTV zařízení",
          align: "center",
          value: "name"
        }
      ]
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/devices/crash").then(response => {
      this.crashed = response.data;
    });
  },
  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/devices/crash").then(response => {
          this.crashed = response.data;
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
