<template>
  <div class="wrapper">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">name</label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          name="name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          name="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Confirm Password</label
        >
        <input
          type="password"
          class="form-control"
          name="password_confirmation"
          v-model="password_confirmation"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "@/config/axios/index.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  computed: {},
  methods: {
    handleRegister() {
      axios
        .post("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          alert("Registration Successful!");
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          alert(error.response.data.message);
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
