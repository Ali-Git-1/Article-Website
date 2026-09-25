import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.rtl.min.css"; // نسخه راست‌چین RTL بوت‌استرپ
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
