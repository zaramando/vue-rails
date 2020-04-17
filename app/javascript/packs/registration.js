import Vue from 'vue'
import Registration from '../registration.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(Registration)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})