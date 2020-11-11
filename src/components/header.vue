<template lang="pug">
  section#header
    .row
      .container
        .col-12
          //  Logo 
          h1
            a(href='/')
              img.logo-img(src='https://dszfbyatv8d2t.cloudfront.net/img/logo.svg' alt='Tripresso - 旅遊咖' title='Tripresso - 旅遊咖')
          //  Nav 
          menubox
        //  Banner 
        section#banner
</template>
<script>
  import menubox from './menu.vue'  
  export default {
    components: {
    menubox,
    }
  }
</script>


