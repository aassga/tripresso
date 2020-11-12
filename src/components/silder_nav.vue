<template lang="pug">
  nav
    ul.pagination
      li.page-item
        a.page-link(href='#' aria-label='Previous')
          span(aria-hidden='true') «
      li.page-item
        a.page-link(href='#' @click.prevent="chagepage(1)") 1
      li.page-item
        a.page-link(href='#' @click.prevent="chagepage(2)") 2
      li.page-item
        a.page-link(href='#' @click.prevent="chagepage(3)") 3
      li.page-item
        a.page-link(href='#' @click.prevent="chagepage(4)") 4
      li.page-item
        a.page-link(href='#' aria-label='Next')
          span(aria-hidden='true') »  

</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      chagepage(number){
        this.$emit('chagepage',number)
      },
      
    }
  }
</script>


