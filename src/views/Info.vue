<template>
  <v-container>
    <h1 class="d-flex justify-center">
      <strong>Nombre: {{ $route.params.banana }}</strong>
    </h1>
    <v-btn @click="goBack" class="ml-7">
      <v-icon dark left>
        mdi-arrow-left </v-icon
      >REGRESAR
    </v-btn>
    <list-examples />
  </v-container>
</template>

<script>
import ListExamples from "@/components/ListExamples.vue";
export default {
  name: "Info",

  components: {
    ListExamples,
  },

  methods:{
    goBack(){
      this.$router.push("/")
    }
  }
};
</script>

<style></style>
