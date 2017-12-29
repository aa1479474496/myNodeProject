import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

// const routes = [{
//     path: '/',
//     name: 'login',
//     component(resolve) {
//         require(['./../components/login/login.vue'], resolve)
//     }
// }, {
//     path: '/layout',
//     name: 'layout',
//     component(resolve) {
//         require(['./../components/layout/layout.vue'], resolve)
//     }
// }, {
//     path: '/login1',
//     name: 'login1',
//     component(resolve) {
//         require(['./../components/login/login.1.vue'], resolve)
//    
// }]
const routes = [{
  path: '/',
  name: 'loginIndex',
  component(resolve) {
    require(['./../components/login/index.vue'], resolve)
  }
}, {
  path: '/flex',
  name: 'flex',
  component(resolve) {
    require(['./../components/admin/flex.vue'], resolve)
  }
}, {
  path: '/flex2',
  name: 'flex2',
  component(resolve) {
    require(['./../components/admin/flex2.vue'], resolve)
  }
}, {
  path: '/admin',
  component(resolve) {
    require(['./../components/admin/admin.vue'], resolve)
  },
  children: [{
    path: '',
    name: 'adminInfo',
    component(resolve) {
      require(['./../components/admin/articleList.vue'], resolve)
    },
  },
  {
    path: 'loginSuccess',
    name: 'loginSuccess',
    component(resolve) {
      require(['./../components/admin/loginSuccess.vue'], resolve)
    },
  }

  ]
}, {
  path: '/entrust',
  name: 'entrust',
  component(resolve) {
    require(['./../components/mobile/entrust.vue'], resolve)
  }
}, {
  path: '/vtour',
  name: 'vtour',
  component(resolve) {
    require(['./../components/mobile/vtour.vue'], resolve)
  }
}, {
  path: '/betterScroll',
  name: 'betterScroll',
  component(resolve) {
    require(['./../components/betterScroll/betterScroll.vue'], resolve)
  }
}, {
  path: '/myscorll',
  name: 'myscorll',
  component(resolve) {
    require(['./../components/betterScroll/myscorll.vue'], resolve)
  }
}, {
  path: '/city',
  name: 'city',
  component(resolve) {
    require(['./../components/betterScroll/city.vue'], resolve)
  }

}, {
  path: '/*',
  component(resolve) {
    require(['./../components/404.vue'], resolve)
  }

}]

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {

      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes,
})