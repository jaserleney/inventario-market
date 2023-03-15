import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../views/EquiposView.vue"),
  },
  {
    name: "empleados",
    path: "/empleados",
    component: () => import("../views/EmpleadosView.vue"),
  },
  {
    name: "referencias",
    path: "/referencias",
    component: () => import("../views/RefenciasView.vue"),
  },
  {
    name: "marcas",
    path: "/marcas",
    component: () => import("../views/MarcasView.vue"),
  },
  {
    name: "asignados",
    path: "/asignados",
    component: () => import("../views/AsignarEquiposView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
