// import { createMemoryHistory, createRouter } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  { path: '/detail/:id', component: Detail },
  { path: '/:anything(.*)', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
