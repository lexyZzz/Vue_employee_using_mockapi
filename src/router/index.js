import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddEdit from '../views/AddEdit.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddEdit },
  { path: '/edit/:id', component: AddEdit }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router