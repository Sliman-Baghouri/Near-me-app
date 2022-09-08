import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';
import VueAxios from 'vue-axios'
import mitt from 'mitt'
import './assets/custom.js'; 
import './assets/custom.css'; 

import VueGoogleMaps from '@fawmi/vue-google-maps'
import VueGeolocation from "vue3-geolocation";
import VueProgressBar from "@aacassandra/vue3-progressbar";
// import VueGoogleMaps from "vuejs3-google-maps";


const options = {
 
  color: "#ef6c26",
  failedColor: "#ef6c26",
  thickness: "5px",
  transition: {
    speed: "0.9s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
  
};


loadFonts()
const emitter = mitt()
const app = createApp(App)
.use(VueProgressBar, options)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(vuetify)
  .use(VueGeolocation)

  app.config.globalProperties.emitter = emitter;
 
  app.use(VueGoogleMaps,{
    load: {
      key: "AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU",
      libraries: ["places","geometry"]
    }
});



  
  app.mount('#app')
