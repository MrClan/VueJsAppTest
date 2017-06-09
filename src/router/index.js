import Vue from 'vue'
import Router from 'vue-router'
import GoodTable from '@/components/GoodTable'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'GoodTable',
    component: GoodTable
  }, {
    path: '/map',
    name: 'Map',
    component: Map
  }]
})
