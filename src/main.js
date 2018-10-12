// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

const {
  messages,
  dateTimeFormats,
  numberFormats
} = require('@/utils/i18n')

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages,
  dateTimeFormats,
  numberFormats
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>'
})
