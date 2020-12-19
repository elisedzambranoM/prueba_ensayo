<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="example in ejemplos" :key="example.id">
        <card-example
          :mp3="example.data.mp3"
          :title="example.data.title"
          :description="example.data.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardExample from "@/components/CardExample.vue";


export default {
  name: "ListExamples",

  components: {
    CardExample,
  },

  props: ['ejemplos'],

  data() {
    return {
      examples: [],
    };
  },
};
</script>

<style></style>
