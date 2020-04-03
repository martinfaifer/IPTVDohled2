<template>
  <div class="mb-5">
    <v-data-table
      width="100px"
      :loading="tableLoading === 'true'"
      loading-text="Načítám data ..."
      :headers="headers"
      :items="crashed"
      :sort-by="['count']"
      :sort-desc="[true]"
      class="elevation-1"
    >
      <template v-slot:item.count="{ item }">
        <a :class="getCountColor(item.count)" dark>{{ item.count }}</a>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableLoading: "true",
      interval: false,
      crashed: [],
      headers: [
        {
          text: "Název kanálu",
          align: "center",
          value: "nazev"
        },
        { text: "Výpadky v min", value: "count" }
      ]
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios
      .get("/api/settings/dashboard/crashedChannels")
      .then(response => {
        this.crashed = response.data;
        this.tableLoading = "false";
      });
  },

  methods: {
    getCountColor(count) {
      return "red--text";
    }
  },

  mounted() {
    this.interval = setInterval(
      function() {
        window.axios
          .get("/api/settings/dashboard/crashedChannels")
          .then(response => {
            this.crashed = response.data;
          });
      }.bind(this),
      300000
    );
  },

  beforeDestroy: function() {
    clearInterval(this.interval);
  }
};
</script>
