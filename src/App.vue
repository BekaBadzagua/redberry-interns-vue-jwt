<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/movies">movies</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/user">user</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="content">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

.content {
  max-width: 75%;
  margin: auto;
  padding-top: 50px;
}
</style>
