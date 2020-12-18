<template>
  <v-container>
    <v-row>
      <v-col>
      <h1 class="d-flex justify-center"><strong>Cursos Disponibles</strong></h1>
    <list-courses/> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import ListCourses from '@/components/ListCourses.vue'

export default {
  name: "Cursos",

  components: {
    ListCourses,
  },

  beforeCreate() {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
