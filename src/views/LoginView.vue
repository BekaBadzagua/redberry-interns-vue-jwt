<template>
  <div class="wrapper">
    <h1>Sign in</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Log In</button>
    </form>
  </div>
</template>
<script>
import axios from "@/config/axios/index.js";
import { setJwtToken } from "@/helpers/jwt/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    handleLogin() {
      axios
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          alert("Login Successful!");

          setJwtToken(response.data.access_token, response.data.expires_in);

          this.$router.push({ name: "movies" });
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    },
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
</style>
