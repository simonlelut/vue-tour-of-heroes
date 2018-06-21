import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Heroes from './components/heroes/Heroes.vue'
import heroDetail from './components/hero-detail/heroDetail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect : {name: "Dashboard"}
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/detail/:id',
      name: 'hero-detail',
      component: heroDetail
    }
  ]
})
