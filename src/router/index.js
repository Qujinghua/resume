import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import home from '@/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: resolve => require(['../home/resume/index.vue'], resolve),
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: resolve => require(['../home/hobby/index.vue'], resolve), 
    }

  ]
})
