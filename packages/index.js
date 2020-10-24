import Vue from 'vue'
// 导入单个组件
// import Modal from './modal/index'

import ModalTemp from './modal/src/main.vue'

function create () {
  const vm = new Vue({
    render (h) {
      return h(ModalTemp)
    }
  }).$mount()

  document.body.appendChild(vm.$el)
}

export default create()

// function showModel(tempHtml){
//   var MyComponent = Vue.extend(tempHtml)
//   var model = new MyComponent().$mount()
//   document.body.appendChild(model.$el)
// }
// showModel(ModalTemp)

// // 以数组的结构保存组件，便于遍历
// const components = [
//   Modal
// ]

// // 定义 install 方法
// const install = function (Vue) {
//     if (install.installed) return
//     install.installed = true
//     // 遍历并注册全局组件
//     components.map(component => {
//         Vue.component(component.name, component)
//     })
// }

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

// export default {
//     // 导出的对象必须具备一个 install 方法
//     install,
//     // 组件列表
//     ...components
// }
