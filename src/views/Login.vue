<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4">
        <v-img src="" min-height="100%">
          <v-card width="400px" class="mx-auto my-5">
            <v-card-title class="pb-0">
              <h3 class="mx-auto mb-5">
                <strong>ACADEMIA LIVE CODING</strong>
              </h3>
            </v-card-title>
            <h4 class="d-flex justify-center">Iniciar sesión</h4>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Usuario"
                  prepend-icon="mdi-account-circle"
                  v-model="user"
                />
                <v-text-field
                  label="Contraseña"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="info" @click.prevent="login">Login</v-btn>
            </v-card-actions>
            <span class="d-flex justify-center mt-4">
              ¿No tienes una cuenta?
              <router-link :to="{ name: 'Register' }">
                Crea una</router-link
              ></span
            >
          </v-card>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Login",
  components: {},
  data() {
    return {
      user: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(() => {
          this.user = "";
          this.password = "";
          this.$router.push("/");
        })
        .catch(() => {
          alert("Todos los campos son requeridos");
        });
    },
  },
};
</script>
