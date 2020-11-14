<template lang="pug">
  div.tab-content.mt-5.mb-1
    b-navbar(type='light' variant='light')
      b-navbar-nav.small
        b-nav-item(href='#') 排序 
        //  Navbar dropdowns 
        b-nav-item-dropdown(text='精選評分' right)
          b-dropdown-item.small(href='#' @click="changesort('rating_desc')") 評分高
          b-dropdown-item.small(href='#' @click="changesort('rating_asc')") 評分低
        b-nav-item-dropdown(text='價格' right)
          b-dropdown-item.small(href='#' @click="changesort('price_desc')") 價格高
          b-dropdown-item.small(href='#' @click="changesort('price_asc')") 價格低
        b-nav-item-dropdown(text='天數' right)
          b-dropdown-item.small(href='#') 1天
          b-dropdown-item.small(href='#') 2天
          b-dropdown-item.small(href='#') 3天
          b-dropdown-item.small(href='#') 4天
          b-dropdown-item.small(href='#') 5天
          b-dropdown-item.small(href='#') 6天
        b-nav-item(href='#') 出發日期
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    changesort(msg) {
      this.$emit('changesort',msg);
      console.log(msg);
    },
  }
}
</script>
<style lang="sass">
  .small
    font-size: 90%!important
</style>



