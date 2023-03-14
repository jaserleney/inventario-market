import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "sweetalert2/dist/sweetalert2.js";

const app = createApp(App);

use(router);

app.mount("#app");
