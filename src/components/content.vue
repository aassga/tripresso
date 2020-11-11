<template lang="pug">
  <!-- Main -->
  section#main
    .container
      .row
        .col-12

          menu_rating(v-on:changesort = "changesort")

          section
            header.major
            .row
              .col-4.col-6-medium.col-12-small(v-for="(item,i) in tour_list" :key="i.tour_list")
                section.box
                  a.image.featured(href='#')
                    img(:src='item.image_url' alt)
                  header
                    h3 {{ item.title }}
                  article
                    div
                      button.margintb.btnsize.btn.btn-outline-primary(type='button' v-for="(tag,i) in item.tags" :key="i.tags") {{ tag }}
                    
                  article
                    div
                      a.margintb.floatF(href v-for="(g,i) in item.group" :key="i.group" v-if="i < 3 || isShow")
                        p.font-primary {{ g.date }}
                        button.btnsize.btn.btn-outline-primary(type='button') 可售 {{ g.quantity }} 位
                  
                  address.inline-flex
                    div.margintb
                      button.btn.btn-outline-danger(type='button' @click="toggle")
                        span(v-if="isMore") 更多日期
                        span(v-else) 收起日期
                  footer.inline-flex
                    div
                      p.font.font-secondary
                        span.font-warning {{ item.tour_days }}
                        | 天
                        span.font-warning {{ item.min_price }}
                        | 元起
                      p.font.font-secondary.smallfont
                        | 下單現賺咖幣
                        span.font-warning $595
                        | 起
              
          //分頁面選單
          silder_nav(v-on:chagepage = "chagepage")
</template>
<script>
  import menu_rating from './menu_rating.vue' 
  import silder_nav from './silder_nav.vue' 

  import axios from "axios" 
  
  export default {
    components: {
      menu_rating,
      silder_nav
    },
    data() {
      return {
        list: {
          page:"1",
          row_per_page:"10",
          sort:"price_asc",
        },
        tour_list:[],
        isShow:false,
        isMore:true,
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
          this.tour_list = res.data.data.tour_list;
          console.log(this.list);
          console.log(this.tour_list);
        })
        .catch((err) => {
          console.log(err);
        });
      },
      chagepage(number){     
        this.list.page = number;
        this.getlistData();
      },
      changesort(msg){
        this.list.sort = msg;
        this.getlistData();
      },
      toggle(){
        this.isShow = !this.isShow;
        this.isMore = !this.isMore;
      }
    },    
  }
</script>


