<template lang="pug">                          
  date-picker.ml-2.mb-2( v-model="value" value-type="date" range format="YYYY/MM/DD" placeholder="選擇更多日期") 
</template>
<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/locale/zh-tw';
  import 'vue2-datepicker/index.css';

  export default {
    components: {
      DatePicker,
    },
    data() {
      return {
        value:'',
      }
    },
  }
</script>
