<template>
  <v-container>
    <h1 class="d-flex justify-center">
      <strong>Nombre: {{cursoInfo.data.name}}</strong>
    </h1>
    <v-btn @click="goBack" class="ml-7">
      <v-icon dark left> mdi-arrow-left </v-icon>REGRESAR
    </v-btn>
    <list-examples :ejemplos="cursoInfo.examples"/>
  </v-container>
</template>

<script>
import ListExamples from "@/components/ListExamples.vue";
import axios from "axios";
export default {
  name: "Info",

  components: {
    ListExamples,
  },

  data() {
    return {
      cursoInfo: {
          data: {
              name:''
          }
      },
    };
  },

  methods: {
    goBack() {
      this.$router.push("/");
    },

    fetchCursos() {
      const url = `https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/`;
      axios
        .get(url)
        .then((resp) => {
          console.log(resp.data);
        
          const found = resp.data.find(
            (item) => item.id === this.$route.params.id
          );
          this.cursoInfo = found
          console.log(this.cursoInfo.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
      this.fetchCursos();
  },
};
</script>

<style></style>
