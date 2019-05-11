import Vue from 'vue';
import './plugins/vuetify';
import firebase from 'firebase/app';
import VueFire from 'vuefire';
import 'firebase/firestore';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueFire);
firebase.initializeApp({
  apiKey: 'AIzaSyBxFMJZuXHG-TvnKF3AHZI0Mj_s5qUjN2w',
  authDomain: 'beast-crm.firebaseapp.com',
  databaseURL: 'https://beast-crm.firebaseio.com',
  projectId: 'beast-crm',
  storageBucket: 'beast-crm.appspot.com',
  messagingSenderId: '23553429425',
  appId: '1:23553429425:web:c736975e28067eb4',
});
// eslint-disable-next-line
export const db = firebase.firestore();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
