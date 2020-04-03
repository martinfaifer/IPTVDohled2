<template>
  <div>
    <v-app-bar color="transparent" fixed dense dark>
      <div v-if="this.$route.path != '/'">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn link to="/" color="white" class="white--text" v-on="on" icon>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <span>Zpět na Mozaiku</span>
        </v-tooltip>
      </div>
      <v-spacer></v-spacer>
      <!-- settings -->

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn link to="/settings" class="white--text" icon v-on="on">
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </template>

      <!-- end Settigs -->
      <!-- User cast -->
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="white--text" icon v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn @click="LogOut()" text small>Odhlásit</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn small text @click="modalEditUser = true">Editovat</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <!-- Konec User casti -->
    </v-app-bar>

    <div class="body-2 mt-12">
      <transition name="fade" mode="out-in">
        <alert-component v-if="status != []" :status="status"></alert-component>
      </transition>
    </div>
    <!-- modal pro editaci uživatele -->

    <v-row class="body-2" justify="center">
      <v-dialog v-model="modalEditUser" persistent max-width="550px">
        <v-card>
          <v-card-text>
            <v-container height="1920px" fluid>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="userData.email" label="e-mail" autofocus></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="password" label="změna hesla" type="password"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="userData.pagination"
                    label="Počet polí v mozaice"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" @click="modalEditUser = false" text>Zavřít</v-btn>
            <v-btn color="green darken-1" @click="userEdit() , modalEditUser = false" text>Uložit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- end modal pro editaci uživatele -->

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Alert from "./alerts/AlertComponent";
export default {
  data() {
    return {
      rememberMe: true,
      userData: false,
      modalEditUser: false,
      status: "",
      password: "",
      logout: "false",
      message: ""
    };
  },
  created() {
    console.log(this.$route.path);
    this.listenForChanges();

    let currentObj = this;
    axios.get("/api/user/get").then(function(response) {
      if (response.data.stat === "error") {
        currentObj.$router.push("/login");
      } else {
        currentObj.userData = response.data;
      }
    });
  },

  components: {
    "alert-component": Alert
  },

  methods: {
    LogOut() {
      let currentObj = this;
      axios
        .get("/api/user/logout")
        .then(function(response) {
          if (response.data.stat === "error") {
            currentObj.$router.push("/login");
          } else {
          }
        })
        .catch(function(error) {});
    },
    userEdit() {
      let currentObj = this;
      axios
        .post("/api/user/edit", {
          userId: this.userData.id,
          mail: this.userData.email,
          password: this.password,
          pagination: this.userData.pagination
        })
        .then(function(response) {
          currentObj.status = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    listenForChanges() {
      Echo.channel("kanals").listen("SendDesktopAlert", kanal => {
        if (!("Notification" in window)) {
          alert("Notifikace jsou povolene");
          return;
        }
        Notification.requestPermission(permission => {
          let notification = new Notification("Nefunknčí kanál!", {
            body: kanal.nazev // content for the alert
          });

          // link to page on clicking the notification
          notification.onclick = () => {
            window.open(window.location.href);
          };
        });
      });
    }
  },
  watch: {
    status: function() {
      setTimeout(() => (this.status = false), 3000);
    }
  }
};
</script>
