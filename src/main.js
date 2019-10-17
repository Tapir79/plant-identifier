import Vue from 'vue'
import App from './App.vue'
import Koelista from './Koelista.vue'

Vue.config.productionTip = false

Vue.component('koelista', Koelista)

new Vue({
  render: h => h(App),
}).$mount('#app')
