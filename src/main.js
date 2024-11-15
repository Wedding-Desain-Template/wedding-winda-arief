import { createApp } from 'vue'; // Mengimpor Vue dengan cara yang benar untuk Vue 3
import App from './App.vue';
import $ from 'jquery'; // Mengimpor jQuery
import './assets/style.css'; // Mengimpor CSS
import './assets/custom.js'; // Mengimpor file JavaScript
import router from "./router/index";


// Mengatur jQuery ke global
window.$ = $; 
window.jQuery = $;

const app = createApp(App); // Membuat instance aplikasi Vue
app.use(router); // Integrasi Vue Router

app.mount('#app'); // Mount aplikasi ke elemen dengan ID 'app'
