<template>
  <div class="md-5">
    <v-data-table :headers="headers" :items="crashed" item-key="name" class="elevation-1">
      <template v-slot:item.nazev="{ item }">
        <router-link :to="'/settings/channels/'+ item.id + '/charts'" target="_blank">
          <a :class="getNazevColor(item.nazev)" dark>{{ item.nazev }}</a>
        </router-link>
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
          text: "Nefunkční kanály",
          align: "center",
          value: "nazev"
        }
      ]
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/channels/crashed").then(response => {
      this.crashed = response.data;
    });
  },

  methods: {
    getNazevColor(nazev) {
      return "red--text";
    }
  },
  mounted() {
    this.interval = setInterval(
      function() {
        window.axios.get("/api/channels/crashed").then(response => {
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
