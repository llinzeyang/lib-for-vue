import Modal from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
