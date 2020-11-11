<template lang="pug">
  nav
    el-menu.el-menu-demo(:default-active='activeIndex' mode='horizontal' @select='handleSelect')
      el-menu-item(index='1') 排序 
      el-submenu(index='2')
        template(slot='title') 精選評分
        el-menu-item(index='2-1' @click="changesort('rating_desc')") 評分高
        el-menu-item(index='2-2' @click="changesort('rating_asc')") 評分低
      el-submenu(index='3')
        template(slot='title') 價格
        el-menu-item(index='3-1' @click="changesort('price_desc')") 價格高
        el-menu-item(index='3-2' @click="changesort('price_asc')") 價格低
      el-submenu(index='4')
        template(slot='title') 天數
        el-menu-item(index='4-1') 1天
        el-menu-item(index='4-2') 2天
        el-menu-item(index='4-3') 3天
        el-menu-item(index='4-4') 4天
      el-menu-item(index='4') 出發日期
       

</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changesort(msg) {
      this.$emit('changesort',msg);
      console.log(msg);
    }
  }
}
</script>


