<template lang="pug">         
                    
  li.list-group-item.small.p-0
    slot

    a.btn.btn-sm.btn-secondary.vl-b.ml-2.mb-2(type='button' @click="toggle")
      span(v-if="isMore") 更多日期
      span(v-else) 收起日期
</template>
<script>
 
  export default {
    props:["groups"],
    data() {
      return {
        isShow:false,
        isMore:true,
      }
    },
    methods: {
      toggle(){
        this.isShow = !this.isShow;
        this.isMore = !this.isMore;
        // var show = this.isShow;
        // var more = this.isMore;
        // var action = {
        //    show,
        //    more,
        // }
        // this.$emit('toggle',action);
      },
    },
    watch: {
      groups(i){
        console.log(i);
      }
    },
  }
</script>
