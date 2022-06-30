import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import MoviesView from "@/views/MoviesView.vue";
import UserView from "@/views/UserView.vue";

function isAuthenticated(_, _2, next) {
  let token = null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`jwt_token=`);
  if (parts.length === 2) {
    token = parts.pop().split(";").shift();
  }

  if (token) {
    next(true);
  } else {
    next(false);
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
      beforeEnter: [isAuthenticated],
    },
  ],
});

export default router;
