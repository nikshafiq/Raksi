import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router/index.js';

import Layouts from "@/layouts";


const app = createApp(App);

Layouts.registerComponents(app);

app.use(router);
app.mount("#app");