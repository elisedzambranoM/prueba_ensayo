<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="example in examples" :key="example.id">
        <card-example
          :id="example.id"
          :title="example.title"
          :description="example.description"
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

  data() {
    return {
      examples: [
        {
          id: 1,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
        {
          id: 2,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
        {
          id: 3,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
        {
          id: 4,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
        {
          id: 5,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
        {
          id: 6,
          title: "Esto es un ejemplo de título de ejemplo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis ea quidem enim? In laudantium dolorum eligendi perspiciatis, assumenda autem consectetur culpa error, consequatur numquam incidunt laboriosam nesciunt, nulla aliquam.",
        },
      ],
    };
  },
};
</script>

<style></style>
