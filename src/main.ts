import { createApp, App as A } from 'vue'
import App from './App.vue';
import "./style/tailwind.css"
import "./style/style.css"
import '@fontsource/poppins';
import '@fontsource/k2d';
import "sweetalert2";

const app: A<Element> = createApp(App);
app.mount('#app');
