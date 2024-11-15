import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery'; // Mengimpor jQuery
// file css
import './assets/style.css';
// file js
import './assets/custom.js';

// Mengatur jQuery ke global
window.$ = $; 
window.jQuery = $;

new Vue({
  render: h => h(App),
}).$mount('#app');
