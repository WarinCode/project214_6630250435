import { createApp, App as A } from 'vue'
import App from './App.vue';
import "./style/tailwind.css"
import "./style/style.css"
import '@fontsource/poppins';
import '@fontsource/k2d';
import "sweetalert2";
import { createVfm, Vfm } from 'vue-final-modal';
import 'vue-final-modal/style.css'
import "@emailjs/browser"
import AOS from "aos"
import "aos/dist/aos.css"
import "aos/dist/aos.js"
AOS.init();

const app: A<Element> = createApp(App);
const vfm: Vfm = createVfm();

app.use(vfm);
app.mount('#app');
