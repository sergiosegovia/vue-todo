// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import PrettyCheckbox from 'pretty-checkbox'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faTrashAlt, faTimesCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue, PrettyCheckbox)

library.add({ faPlusCircle, faTrashAlt, faTimesCircle, faBars })

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
