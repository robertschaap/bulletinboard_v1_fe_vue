import Vue from 'vue'
import Router from 'vue-router'
import Comments from '@/components/Comments'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/readsomething'
    }, {
      path: '/readsomething',
      component: Comments
    }, {
      path: '/writesomething',
      component: Form
    }
  ]
})
