<template>
  <div>
    <p>This is Modal components</p>
    <img src="./imgs/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      query: this.getScriptArgs()
    }
  },
  methods: {
    // getParameter: function (_parameter) {
    //   var str = document.getElementById("netetao").src
    //   var sValue=str.match(new RegExp("[?&]" + _parameter + "=([^&]*)(&?)","i"))
    //   if(sValue ? sValue[1] : sValue == null) {
    //     return sValue ? sValue[1] : sValue
    //   }
    // }
    getScriptArgs () { // 获取多个参数
      var script = document.getElementById("modal-script"),
          src=script.src,
          reg=/(?:\?|&)(.*?)=(.*?)(?=&|$)/g,
          temp,
          res={}
      while((temp = reg.exec(src)) != null) res[temp[1]] = decodeURIComponent(temp[2])
      return res
    }
  },
  created () {
    console.log('created!', this.query)
  },
  mounted () {
    console.log('now the components is mounted', this.query)
  }
}
</script>

<style scoped>
p {
  font-size: 40px;
}
</style>