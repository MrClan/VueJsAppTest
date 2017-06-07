import Vue from 'vue'
import Router from 'vue-router'
import GoodTable from '@/components/GoodTable'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'GoodTable',
    component: GoodTable
  }]
})
