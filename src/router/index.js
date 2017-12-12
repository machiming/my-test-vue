import Vue from 'vue'
import Router from 'vue-router'
import Bottom from '@/components/common/CommonBottom'
import Content from '@/components/IndexContent'
import Header from '@/components/common/CommonHeader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        header:Header,
        content:Content,
        footer:Bottom
      }
    }
  ]
})
