import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';
import App from './App.vue'
import Koelista from './Koelista.vue'

Vue.config.productionTip = false
Vue.use(SuiVue);

Vue.component('koelista', Koelista)

new Vue({
  render: h => h(App),
}).$mount('#app')
