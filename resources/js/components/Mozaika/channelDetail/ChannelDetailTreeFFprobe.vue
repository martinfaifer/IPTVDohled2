<template>
  <div>
    <v-card scrollable flat color="transparent">
      <v-card-text>
        <v-treeview open-all open-on-click dense hoverable :items="items">
          <template v-slot:prepend="{ item, open }">
            <v-icon>{{ item.file }}</v-icon>
          </template>
        </v-treeview>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["channelId"],
  data: () => ({
    items: []
  }),
  created() {
    let currentObj = this;
    axios
      .post("/api/channel/ffprobeGet", {
        id: this.channelId
      })
      .then(function(response) {
        currentObj.items = response.data;
      })
      .catch(function(error) {
        console.log("chyba" + error);
      });
  }
};
</script>
