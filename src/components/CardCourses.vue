<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            width="400px"
            :src="image"
          >
          </v-img>

          <v-card-subtitle class="pb-0"></v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              <strong>{{ name }}</strong>
            </div>

            <div>{{description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="goToDetails(id)" color="orange" text>
              Ver detalle del curso
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardCourses',

   props: ["id", "name", "image", "description"],

  methods: {
    goToDetails(id) {
      const path = `/info/${id}`
      this.$router.push(path);
    },
  },
};
</script>

<style></style>
