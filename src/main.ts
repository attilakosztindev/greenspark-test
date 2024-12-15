import App from "@/App.vue";
import store from "@/store";
import { createApp } from "vue";
import { vuetify } from "@/plugins/vuetify";

const app = createApp(App);

app.use(store);
app.use(vuetify);
app.mount("#app");
