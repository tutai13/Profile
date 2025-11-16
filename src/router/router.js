import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import thiepmoi from "../components/thiepmoi.vue";
const routes = [{ path: "/", name: "home", component: home },
                 { path: "/thiepmoi", name: "thiepmoi", component: thiepmoi }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
