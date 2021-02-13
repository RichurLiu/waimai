<template>
  <div id="app">
    <!-- 显示路由组件 -->
     <router-view></router-view>
     <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background-color #f5f5f5
  position relative
</style>
