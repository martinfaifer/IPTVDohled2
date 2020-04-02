<template>
  <div class="body-2">
    <br />
    <v-row justify="start">
      <v-col class="d-flex" cols="3" sm="3">
        <v-select :items="items" v-model="value" label="Typ dat" dense></v-select>
      </v-col>
    </v-row>
    <br />
    <!-- user Log -->

    <v-data-table
      v-if="value == 'Uživatelský Log'"
      fixed-header
      :loading="tableUsersLoading === 'true'"
      :headers="headers"
      :items="userhistorie"
      :sort-by="['created_at']"
      :sort-desc="[true]"
      multi-sort
      class="elevation-1"
    ></v-data-table>

    <!-- Mail log -->
    <v-data-table
      v-if="value == 'Odeslané maily'"
      fixed-header
      :loading="tableMailLoading === 'true'"
      :headers="headersMail"
      :items="mailHistore"
      :sort-by="['created_at']"
      :sort-desc="[true]"
      multi-sort
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Uživatel",
          align: "start",
          value: "userId"
        },
        { text: "Akce", value: "akce" },
        { text: "Data", value: "data" },
        { text: "Vytvořeno", value: "created_at" }
      ],
      headersMail: [
        {
          text: "Cílový mail",
          align: "start",
          value: "to"
        },
        { text: "Obsah", value: "body" },
        { text: "Vytvořeno", value: "created_at" }
      ],
      userhistorie: [],
      mailHistore: [],
      items: ["Uživatelský Log", "Odeslané maily"],
      value: "Uživatelský Log",
      tableMailLoading: true,
      tableUsersLoading: true
    };
  },
  created() {
    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/users/history").then(response => {
      this.userhistorie = response.data;
      this.tableUsersLoading = false;
    });
  },
  watch: {
    value: function() {
      if (this.value === "Uživatelský Log") {
        window.axios.get("/api/users/history").then(response => {
          this.userhistorie = response.data;
          this.tableUsersLoading = false;
        });
        this.mailHistore = [];
        this.tableMailLoading = true;
      } else if (this.value === "Odeslané maily") {
        window.axios.get("/api/mail/history").then(response => {
          this.mailHistore = response.data;
          this.tableMailLoading = false;
        });
        this.userhistorie = [];
        this.tableUsersLoading = true;
      }
    }
  }
};
</script>
