<template lang="pug">
  header
    section#header
      .container
        .row
          .col-12.text-center
            //  Logo 
            h1
              a(href='#')
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
<style lang="sass">
  #banner 
    background: #CCE8F4 url(https://dszfbyatv8d2t.cloudfront.net/curatorial/twtrip/sr_4000x520_x05.jpg)
    background-position: center center
    background-size: auto 100%
    background-repeat: no-repeat
    text-align: center
    position: relative
    padding: 10em 0

</style>

