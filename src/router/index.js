import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KaitoChannel from '@/components/KaitoChannel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'KaitoChannel',
      component: KaitoChannel
    }
  ]
})
