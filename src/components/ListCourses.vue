<template>
  <v-container>
    <v-row>
      <v-col v-for="course in courses" :key="course.id">
        <card-courses
          :id="course.id"
          :name="course.data.name"
          :image="course.data.img"
          :description="course.data.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardCourses from "../components/CardCourses.vue";
import axios from 'axios'

export default {
  name: "ListCourses",
  components: {
    CardCourses,
  },

  data() {
    return {
      courses: [],
    };
  },

  beforeCreate() {
    const url =
      "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses";
    axios.get(url).then((resp) => {
      this.courses = resp.data;
      console.log(this.courses)
    });
  },
};
</script>

<style></style>
