<template>
  <div>
    <div class="body-2 mt-10">
      <transition name="fade" mode="out-in">
        <alert-component v-if="status != []" :status="status"></alert-component>
      </transition>
    </div>
    <v-container fluid class="mt-12">
      <v-row justify="center" class="mt-12">
        <v-card width="25%" class="mx-auto mt-12">
          <p class="display-1 text-center mt-5">IPTV Dohled</p>

          <v-card-text>
            <v-text-field
              label="E-mail"
              v-model="email"
              type="email"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field type="password" v-model="password" label="Heslo" prepend-icon="mdi-lock" />
            <v-checkbox v-model="rememberMe" label="Zapamatovat přihlášení"></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="login()" color="success">Přihlásit se</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Alert from "./alerts/AlertComponent";
export default {
  data() {
    return {
      rememberMe: true,
      userData: false,
      email: "",
      password: "",
      status: ""
    };
  },
  components: {
    "alert-component": Alert
  },
  created() {
    let currentObj = this;
    axios.get("/api/user/get").then(function(response) {
      if (response.data.stat === "error") {
        currentObj.status = response.data;
      } else {
        currentObj.$router.push("/");
      }
    });
  },
  methods: {
    login() {
      let currentObj = this;
      axios
        .post("/api/user/login", {
          email: this.email,
          password: this.password,
          remember: this.rememberMe
        })
        .then(function(response) {
          currentObj.status = response.data;
          if (currentObj.status.stat === "success") {
            currentObj.$router.push("/");
          }
        })
        .catch(function(error) {
          currentObj.chybaOdpovediServeru = true;
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
