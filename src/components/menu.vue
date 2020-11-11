<template lang="pug">
  nav
    el-menu.el-menu-demo(:default-active='activeIndex' mode='horizontal' @select='handleSelect')
      el-menu-item(index='1') 團體旅遊  
      el-menu-item(index='2') 自由行 
      el-menu-item(index='3') 機票
      el-menu-item(index='4') 國內訂房
      el-submenu(index='5')
        template(slot='title') 玩咖推薦
        el-menu-item(index='5-1') 精選住宿
        el-menu-item(index='5-2') 好食餐卷      

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


