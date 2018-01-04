import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/', //地图
    name: 'home',
    component: function (resolve) {
      require(['./example/fragment/home.vue'], resolve)
    }
  },{
    path: '/button', //Button
    name: 'button',
    component: function (resolve) {
      require(['./example/fragment/button.vue'], resolve)
    }
  },{
    path: '/Badge', //徽章
    name: 'Badge',
    component: function (resolve) {
      require(['./example/fragment/Badge.vue'], resolve)
    }
  },{
    path: '/list', //List
    name: 'list',
    component: function (resolve) {
      require(['./example/fragment/list.vue'], resolve)
    }
  },{
    path: '/grid', //九宫格
    name: 'grid',
    component: function (resolve) {
      require(['./example/fragment/grid.vue'], resolve)
    }
  },{
    path: '/step', //步骤
    name: 'step',
    component: function (resolve) {
      require(['./example/fragment/step.vue'], resolve)
    }
  },{
    path: '/switch', //开关
    name: 'switch',
    component: function (resolve) {
      require(['./example/fragment/switch.vue'], resolve)
    }
  },{
    path: '/picker', //列表
    name: 'picker',
    component: function (resolve) {
      require(['./example/fragment/picker.vue'], resolve)
    }
  },{
    path: '/input', //List
    name: 'input',
    component: function (resolve) {
      require(['./example/fragment/input.vue'], resolve)
    }
  },{
    path: '/accordion', //List
    name: 'accordion',
    component: function (resolve) {
      require(['./example/fragment/Accordion.vue'], resolve)
    }
  },{
    path: '/slider', //List
    name: 'slider',
    component: function (resolve) {
      require(['./example/fragment/Slider.vue'], resolve)
    }
  },{
    path: '/uploader', //List
    name: 'uploader',
    component: function (resolve) {
      require(['./example/fragment/Uploader.vue'], resolve)
    }
  },{
    path: '/stepper', //stepper
    name: 'stepper',
    component: function (resolve) {
      require(['./example/fragment/stepper.vue'], resolve)
    }
  }]
})

export default router
