## 1.Postman 帶入文件 url 測試回傳結果

  https://interview.tripresso.com/tour/search
  ```
  帶入參數:
    page:"1",
    row_per_page:"10",
    sort:"price_asc",
   ```
  回傳結果 ture --> json 格式
  ```
  回傳參數:
    data: {
      tour_list: [{id、title、rating、agency、tour_days、min_price、tags、group、image_url、 tour_detail_url}]
    }
  ```    
## 2.規劃欄位配置
  ```
  https://html5up.net/ --> 尋找適合版型並套版
  ```

## 3.建置專案 
  ```
  使用 Vue Cli 建置專案 
  GitHub 管理專案版控 
  使用工具:sourcetree圖形化介面
  ```
--------------------------------------------------------------------------------------------------------------------------------------------------
## 4.規劃 components 元件類型，並且預計規劃為
  ```
  header、content、footer、menuBtn 建立四種 components 元件
  ```

## 5.在 Vue Cli 專案
```
  使用 pug + scss/sass 進行編輯器撰寫
```

## 6.串接 API 過程以及遇到問題 -->
  - 在網址 url:http://interview.tripresso.com/tour/search 後加上 
    --> ?page=${this.list.page}&row_per_page=${this.list.row_per_page}&sort=${this.list.sort} 判定 get 是否正確回傳參數資料
  - 使用 vue axios 完成串接 api 
    console.log(this.list)
    console.log(this.tour_list)
    F12 確認是否有顯現資料 data 
  - API 串接 需搞懂物件層數邏輯 --> 選擇用 v-for 語法來撈取資料
  - API 分為 ( 3層物件資料需做處理 )
    ```data: { 
      tour_list: [
        {
          tags: [],
          group: [],
        }
      ],
    }```
  - 使用 v-for="(item,index) in item" 將資料輸出於頁面上
  - 製作分頁切換按鈕，使用到元件溝通 $emit 語法技術，並在父元件層加上 v-on:語法，v-on:click 完成點擊觸發切換頁面，撈取 api 分頁資料
  - 製作高、低切換按鈕(價格、評分) 使用 ElementUI NavMenu導航菜單套件製作，使用到元件溝通 $emit 語法技術，並在父元件層加上 v-on: 語法，v-on:click 完成點擊觸發切換頁面，撈取 api 分頁資料
    ```
    參數切換: 
      rating_desc,
      rating_asc,
      price_desc,
      price_asc
     ```
  - group:[],撈取所有可購買日期,設定判斷超過三個以上日期時自動隱藏，使用 v-if="i < 3 || isShow" 技術判斷起始值
  - 設定展開更多可購買日期以及收起日期按鈕，使用技術 v-if、v-else，判定展開與否

## 7.頁面，串接 API 完成，打包上 GitHub 發布版本v2.0

## 8.保留一天測試 debug 頁面問題
