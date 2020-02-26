import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './plugins/scrollactive';
import './plugins/fontAwesome';
import vuetify from './plugins/vuetify';
import store from './plugins/store';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    store,
  render: (h) => h(App),
}).$mount('#app');
