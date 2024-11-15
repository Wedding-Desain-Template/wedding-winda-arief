import { createRouter, createWebHistory } from "vue-router";
import GenerateUrl from "../components/GenerateUrl.vue";
import adatMinang from "../pages/adatMinang.vue";

const routes = [
  {
    path: "/", // URL untuk memanggil halaman adatMinang
    name: "adatMinang",
    component: adatMinang,
  },
  {
    path: "/nama-tamu", // URL untuk memanggil halaman GenerateUrl
    name: "GenerateUrl",
    component: GenerateUrl,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
