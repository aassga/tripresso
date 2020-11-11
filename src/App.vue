<template lang="pug">
  div
    headerbox
    articlebox
    footerbox
</template>

<script>
import headerbox from './components/header.vue'
import articlebox from './components/content.vue'
import footerbox from './components/footer.vue'
// import triplist from './components/tripressolist.vue'

export default {
  name: 'App',
  components: {
    headerbox,
    articlebox,
    footerbox
  },
} 
</script>


