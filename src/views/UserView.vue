<template>
  <div class="wrapper">
    <h1>Guarded Route</h1>
    <span>User: {{ name }}</span>
    <span>email: {{ email }}</span>
  </div>
</template>
<script>
import axios from "@/config/axios/index.js";
export default {
  data() {
    return {
      name: "Loading...",
      email: "Loading...",
    };
  },
  mounted() {
    axios
      .post("authorized-user")
      .then((response) => {
        this.name = response.data.name;
        this.email = response.data.email;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  },
};
</script>
<style scoped>
span {
  display: block;
}
</style>
