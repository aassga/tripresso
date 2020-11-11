<template lang="pug">
  section.py-6.bg-gray-100
    .container
      .row        
        .col-lg-4.col-sm-6.mb-4
          .card.shadow.border-0.h-100
            div
              img.img-fluid.card-img-top( alt='...')
            .card-body
              .text-uppercase.text-muted.text-sm.letter-spacing-2 Travel 
              h5.my-2
                .text-dark Autumn fashion tips and tricks
                
              p.my-2.text-muted.text-sm(v-for="(item,i) in list" :key="i.list") {{ item.title }}


</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      list: {
        page:"1",
        row_per_page:"10",
        sort:"price_asc",
      },
    }
  },
  mounted() {
    this.getlistData();
  },
  methods: {
    getlistData(){
      const url = `https://interview.tripresso.com/tour/search?page=${this.list.page}&row_per_page=${this.list.row_per_page}&sort=${this.list.sort}`;
      axios.get(url)
      .then((res) => {
        this.list = res.data;
        console.log(this.list);
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
}
</script>


