<template lang="pug">
  main
    section#main
      .container
        .row
          .col-12.el-col-lg-push-12
            menu_rating(v-on:changesort = "changesort")
            .tab-content.mt-4
              .tab-pane.fade.show.active#tab-grid-1(aria-labelledby='tab-grid-1-tab' role='tabpanel')
                .row.justify-content-center
                  .col-12.col-sm-10.col-md-6.col-lg-12.mb-4
                    .card.border-light.mb-4.animate-up-5.boxshow(v-for="(item,i) in tour_list" :key="i.tour_list" :data-tourkey="item.id")
                      .row.no-gutters.align-items-center
                        .col-12.col-lg-6.col-xl-5
                          a(v-bind:href="item.tour_detail_url")
                            img.card-img.p-2.rounded-xl(:src='item.image_url' alt)
                        .col-12.col-lg-6.col-xl-7
                          .card-body.p-3.p-md-1
                            p
                              h4.h5.ml-2.mt-4 {{ item.title }}
                            .d-flex.my-3.ml-2
                              span.badge.badge-pill.badge-primary.mr-2 {{ item.agency }}
                              |  
                              span.star.fas.fa-star.text-warning
                              |  
                              span.star.fas.fa-star.text-warning
                              |  
                              span.star.fas.fa-star.text-warning
                              |  
                              span.star.fas.fa-star.text-warning
                              |  
                              span.star.fas.fa-star.text-warning
                              |  
                              
                            ul.list-group.mb-3
                              li.list-group-item.small.p-0
                                a.btn.btn-sm.btn-outline-primary.mb-3.ml-2(type='button' v-for="(tag,i) in item.tags" :key="i.tags") {{ tag }}
                              // li.list-group-item.small.p-0
                              //   a.btn.btn-sm(type='button' v-for="(g,i) in item.group" :key="i.group" v-if="i < 3 || isShow")
                              //     p.mb-1.font-primary {{ g.date }} 
                              //     a.btn.btn-sm.btn-outline-primary 可售 {{ g.quantity }} 位
                              //   a.btn.btn-sm.btn-secondary.vl-b.mb-2(type='button' @click="toggle")
                              //     span(v-if="isMore") 更多日期
                              //     span(v-else) 收起日期

                              datamenu(v-bind:groups="groups")
                                a.btn.btn-sm(type='button' v-for="(g,i) in groups[i]" :key="i.groups" v-if="i< 3 || isShow")
                                  p.mb-1.font-primary {{ g.date }} 
                                  a.btn.btn-sm.btn-outline-primary 可售 {{ g.quantity }} 位


                            .d-flex.justify-content-between.mb-4
                              .col.pl-0.ml-2
                                .font.font-secondary
                                  span.font-warning {{ item.tour_days }}
                                  | 天
                                  span.font-warning {{ item.min_price }}
                                  | 元起
                                .font.font-secondary.smallfont
                                  | 下單現賺咖幣
                                  span.font-warning $595
                                  | 起  
                                  
            //分頁面選單
            silder_nav(v-on:chagepage = "chagepage")
</template>
<script>
  import menu_rating from './menu_rating.vue' 
  import silder_nav from './silder_nav.vue' 
  import datamenu from './datamenu.vue' 

  import axios from "axios" 
  
  export default {
    components: {
      menu_rating,
      silder_nav,
      datamenu,
    },
    data() {
      return {
        list: {
          page:"1",
          row_per_page:"10",
          sort:"price_asc",
        },
        tour_list:[],
        groups:[],
        isShow:false,
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

          var e = this.tour_list;
          this.groups = [];
          e.forEach(item => {
            this.groups.push(item.group);
          });
          console.log(this.groups);
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
      
    },
  }
</script>
<style lang="sass">
  .boxshow
    box-shadow: 0 25px 20px -20px rgba(0,0,0,.3), 0 0 15px rgba(0,0,0,.06);
</style>