// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('document-click', {
  //定义一个全局的自自定义的指令，作用与document上
  bind (el, binding, vnode) {
    //el当前绑定的dom元素，el：指令所绑定的元素，可以用来直接操作 DOM 。
    // binding：一个对象，包含以下属性：
      // name：指令名，不包括 v- 前缀。
      // value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
      // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论 值 是否改变都可用。
      // expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
      // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
      // modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
    // vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
    // oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('insert')
  },
  update () {
    console.log('update')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
