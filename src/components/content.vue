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
                  .col-12.col-sm-12.col-md-12.col-lg-12.mb-4
                    .card.border-light.mb-4.animate-up-5.boxshow(v-for="(item,i) in tour_list" :key="i.tour_list" :data-tourkey="item.id")
                      .row.no-gutters.align-items-center
                        .col-12.col-lg-6.col-xl-5
                          a(v-bind:href="item.tour_detail_url")
                            img.card-img.p-2.rounded-xl(:src='item.image_url' alt)
                        .col-12.col-lg-6.col-xl-7
                          .card-body.p-3.p-md-1
                            h5.ml-2.mt-4.font-weight-bold {{ item.title }}
                            .d-flex.my-3.ml-2
                              span.badge.badge-pill.badge-primary.mr-2.ml-1 {{ item.agency }} 
                              |  
                              span.star.fas.fa-star.small.text-warning {{ item.rating + '.0' }} 


                            ul.list-group.mb-3.navbar-nav
                              li.small.p-0.nav-link.mt-2
                                a.ml-2.mb-2(type='button' v-for="(tag,i) in item.tags" :key="i.tags") 
                                  span.mb-2.btn.btn-sm.btn-outline-primary.small {{ tag }}

                              li.small.p-0.nav-link.mt-2
                                span.ml-2.mb-2.mr-2(type='button' v-for="(g,i) in item.group" :key="i.group" v-if="i < 3 || isShow")
                                  p.mb-1.text-primary {{ g.date | datefilter }} 

                                  span.mb-2.btn.btn-sm.btn-outline-primary 可售 {{ g.quantity }} 位

                              li.small.p-0.nav-link    
                                //- date-picker.ml-2.mb-2(v-model='typedata' value-type='format' range format='YYYY/MM/DD' placeholder="顯示更多日期")
                                a.ml-2.mb-2(type='button' @click="toggle")
                                  span.mb-2.btn.btn-sm.btn-danger(v-if="isMore") 更多日期
                                  span.mb-2.btn.btn-sm.btn-danger(v-else) 收起日期
                              

                            .d-flex.justify-content-between.mb-4
                              .col.pl-0.ml-2
                                .text-secondary
                                  span.font-weight-bold.text-warning {{ item.tour_days }}
                                  | 天
                                  span.font-weight-bold.text-warning {{ item.min_price }}
                                  | 元起
                                .text-secondary
                                  | 下單現賺咖幣
                                  span.font-weight-bold.text-warning $595
                                  | 起  
                                  
            //分頁面選單
            silder_nav(v-on:chagepage = "chagepage")
</template>
<script>
  import menu_rating from './menu_rating.vue' 
  import silder_nav from './silder_nav.vue' 

  import axios from "axios" 
  import moment from 'moment'

  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/locale/zh-tw';
  import 'vue2-datepicker/index.css';


  export default {
    components: {
      menu_rating,
      silder_nav,
      DatePicker,
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
        isMore:true,
        typedata:[new Date(2019, 9, 8), new Date(2019, 9, 19)],
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
          e.forEach((item) => {
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
      toggle(){
        this.isShow = !this.isShow;
        this.isMore = !this.isMore;
      },
    },
    filters:{
      datefilter(value){
        return moment(value).locale('zh-tw').format('MM/DD ( dd )');//加上 locale('zh-tw')顯示為中文
      },
    },
  }
</script>
<style lang="sass">
  .boxshow
    box-shadow: 0 25px 20px -20px rgba(0,0,0,.3), 0 0 15px rgba(0,0,0,.06);
</style>