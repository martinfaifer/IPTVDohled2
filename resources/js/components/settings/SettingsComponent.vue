<template>
  <div>
    <div v-if="userData.user_role != 'náhled'">
      <v-container class="mr-11 ml-11" fluid>
        <div class="mt-1">
          <v-row justify="center">
            <v-card fixed flat color="transparent">
              <v-toolbar color="transparent" flat dense dark>
                <v-spacer></v-spacer>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      link
                      to="/settings"
                      @click="contextMenu = 'prehled'"
                      :color="colorPrehled"
                      class="white--text"
                      v-on="on"
                      icon
                    >
                      <v-icon>mdi-view-dashboard</v-icon>
                    </v-btn>
                  </template>
                  <span>Dashboard</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      link
                      to="/settings/channels"
                      @click="contextMenu = 'channels'"
                      :color="colorChannels"
                      class="white--text"
                      v-on="on"
                      icon
                    >
                      <v-icon>mdi-television-guide</v-icon>
                    </v-btn>
                  </template>
                  <span>Kanály</span>
                </v-tooltip>

                <div v-if="userData.user_role == 'admin'">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        link
                        to="/settings/users"
                        @click="contextMenu = 'accounts'"
                        :color="colorAccounts"
                        class="white--text"
                        v-on="on"
                        icon
                      >
                        <v-icon>mdi-account-multiple</v-icon>
                      </v-btn>
                    </template>
                    <span>Uživatelé</span>
                  </v-tooltip>
                </div>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      link
                      to="/settings/alerts"
                      @click="contextMenu = 'alerts'"
                      :color="colorAlerts"
                      class="white--text"
                      v-on="on"
                      icon
                    >
                      <v-icon>mdi-bell</v-icon>
                    </v-btn>
                  </template>
                  <span>Nastavení Alertingu</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      link
                      to="/settings/logs"
                      @click="contextMenu = 'log'"
                      :color="colorLog"
                      class="white--text"
                      v-on="on"
                      icon
                    >
                      <v-icon>mdi-git</v-icon>
                    </v-btn>
                  </template>
                  <span>Log</span>
                </v-tooltip>

                <v-spacer></v-spacer>
              </v-toolbar>
            </v-card>
          </v-row>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </v-container>
    </div>
    <div class="body-1" v-else>
      <v-alert type="error">Nemáté právo zde být!</v-alert>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contextMenu: "prehled",
      color: "",
      colorPrehled: "teal",
      colorChannels: "",
      colorAccounts: "",
      colorAlerts: "",
      colorLog: "",
      userData: false
    };
  },
  created() {
    if (this.$route.path === "/settings") {
      (this.colorPrehled = "teal"),
        (this.colorChannels = ""),
        (this.colorAccounts = ""),
        (this.colorAlerts = "");
      this.colorLog = "";
    } else if (this.$route.path === "/settings/channels") {
      (this.colorPrehled = ""),
        (this.colorChannels = "teal"),
        (this.colorAccounts = ""),
        (this.colorAlerts = "");
      this.colorLog = "";
    } else if (this.$route.path === "/settings/users") {
      (this.colorPrehled = ""),
        (this.colorChannels = ""),
        (this.colorAccounts = "teal"),
        (this.colorAlerts = "");
      this.colorLog = "";
    } else if (this.$route.path === "/settings/alerts") {
      (this.colorPrehled = ""),
        (this.colorChannels = ""),
        (this.colorAccounts = ""),
        (this.colorAlerts = "teal");
      this.colorLog = "";
    } else if (this.$route.path === "/settings/logs") {
      (this.colorPrehled = ""),
        (this.colorChannels = ""),
        (this.colorAccounts = ""),
        (this.colorAlerts = "");
      this.colorLog = "teal";
    }

    let currentObj = this;
    axios.get("/api/user/get").then(function(response) {
      currentObj.userData = response.data;
    });
  },
  watch: {
    contextMenu: function() {
      if (this.$route.path === "/settings") {
        (this.colorPrehled = "teal"),
          (this.colorChannels = ""),
          (this.colorAccounts = ""),
          (this.colorAlerts = "");
        this.colorLog = "";
      } else if (this.$route.path === "/settings/channels") {
        (this.colorPrehled = ""),
          (this.colorChannels = "teal"),
          (this.colorAccounts = ""),
          (this.colorAlerts = "");
        this.colorLog = "";
      } else if (this.$route.path === "/settings/users") {
        (this.colorPrehled = ""),
          (this.colorChannels = ""),
          (this.colorAccounts = "teal"),
          (this.colorAlerts = "");
        this.colorLog = "";
      } else if (this.$route.path === "/settings/alerts") {
        (this.colorPrehled = ""),
          (this.colorChannels = ""),
          (this.colorAccounts = ""),
          (this.colorAlerts = "teal");
        this.colorLog = "";
      } else if (this.$route.path === "/settings/logs") {
        (this.colorPrehled = ""),
          (this.colorChannels = ""),
          (this.colorAccounts = ""),
          (this.colorAlerts = "");
        this.colorLog = "teal";
      }
    }
  }
};
</script>

