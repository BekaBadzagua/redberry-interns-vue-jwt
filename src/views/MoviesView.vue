<template>
  <div class="movies">
    <div class="btn-wrapper">
      <button @click="handleGetMovies" class="btn btn-primary">
        Get Movies
      </button>
    </div>
    <div class="cards" v-if="error === null">
      <div v-if="movies.length === 0" class="no-movies-wrapper">
        <h4>No movies Yet</h4>
        <span>please click the button</span>
      </div>
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="card"
        style="width: 18rem"
      >
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <span class="card-text">year: {{ movie.year }}</span>
        </div>
      </div>
    </div>
    <div v-else class="error-wrapper">
      <span>error: {{ this.error }}</span>
    </div>
  </div>
</template>

<script>
import axios from "@/config/axios/index.js";

export default {
  data() {
    return {
      movies: [],
      error: null,
    };
  },
  methods: {
    handleGetMovies() {
      axios
        .get("movies")
        .then((response) => {
          this.movies = response.data;
          this.error = null;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
  },
};
</script>

<style scoped>
.no-movies-wrapper {
  max-width: 500px;
  margin: auto;
}
.btn-wrapper {
  text-align: right;
}
.cards {
  display: flex;
}
.card {
  margin: 20px;
}
.error-wrapper {
  color: red;
  font-size: 30px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}
</style>
