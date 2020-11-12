1.Postman帶入文件url 
  https://interview.tripresso.com/tour/search
  帶入參數:
    page:"1"
    row_per_page:"10"
    sort:"price_asc"

  回傳結果 ture --> json格式
  回傳參數:
  data: {
    tour_list: [{id、title、rating agency、tour_days、min_price、tags、group、image_url、 tour_detail_url}]
  }
-------------------------------------------------------------------------
2.規劃欄位配置，以 https://html5up.net/ --> 尋找適合版型並套版
-------------------------------------------------------------------------
3.使用 Vue Cli 建置專案
-------------------------------------------------------------------------
4.規劃 components 元件類型，並且預計規劃為 --> header、content、footer、menuBtn 建立四種 components 元件
-------------------------------------------------------------------------
5.在 Vue Cli專案 使用 pug + scss/sass 進行編輯器撰寫
-------------------------------------------------------------------------
6.串接 API 過程以及遇到問題 -->
  1.在網址url:http://interview.tripresso.com/tour/search後加上 
    --> ?page=${this.list.page}&row_per_page=${this.list.row_per_page}&sort=${this.list.sort} 判定get是否正確回傳參數資料
  2.使用vue axios 完成串接 api 
    console.log(this.list)
    console.log(this.tour_list)
    F12確認是否有顯現資料data 
  3.API串接 需搞懂物件層數邏輯 --> 選擇用 :v-for語法來撈取資料
  4.API分為 ( 3層物件資料需做處理 )
    data: { 
      tour_list: [
        {
          tags: [],
          group: [],
        }
      ],
    }
  5.