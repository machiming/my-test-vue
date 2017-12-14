import Vue from 'vue'
import Router from 'vue-router'
import PartBottom from '@/components/common/CommonBottom'
import PartContent from '@/components/IndexContent'
import PartHeader from '@/components/common/CommonHeader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        PartHeader:PartHeader,
        PartContent:PartContent,
        PartBottom:PartBottom
      }

    }
  ]
})
