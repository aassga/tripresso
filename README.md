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
## 3.環境建立
  - 下載 node.js 安裝 npm
  ```
  https://nodejs.org/zh-tw/download/
  ```
  - 安裝 Vue-CLI 命令行工具
  ```
  $ npm install -g @ vue / cli
  ```
  - Pug 加入 Vue cli 專案
  ```
  $ npm i vue-cli-plugin-pug
  ```
  - SASS 加入 Vue cli 專案
  ```
  $ npm install sass-loader node-sass --save-dev
  ```
## 4.建置專案 
  ```
  使用 Vue Cli 建置專案 
  GitHub 管理專案版控 
  使用工具:sourcetree圖形化介面
  ```
  - Vue Cli 運行方法 (localhost:8080~8081 本地端模擬)
  ```
  $ npm run serve
  ```
  - Vue Cli 打包
  ```
  $ npm run build
  ```
## 5.規劃 components 元件類型，並且預計規劃為
  ```
  header、content、footer、menu、menu_rating、daytype、silder_nav 建立七種 components 元件
  ```  
## 6.在 Vue Cli 專案
  ```
  使用 pug + scss/sass 進行編輯器撰寫
  ```
## 7.串接 API 過程以及遇到問題 
  - 在網址 url:http://interview.tripresso.com/tour/search 後加上 ?page=${this.list.page}&row_per_page=${this.list.row_per_page}&sort=${this.list.sort} 判定 get 是否正確回傳參數資料
  - 使用 vue axios 完成串接 api 
    ```
    console.log(this.list)
    console.log(this.tour_list)
    F12(開發者) 確認是否有顯現資料 data 
    ```
  - API 串接 需搞懂物件層數邏輯 
    ```
    v-for 語法來撈取資料
    ```
  - API 分為 ( 3層物件資料需做處理 )
    ```
    data: { 
      tour_list: [
        {
          tags: [],
          group: [],
        }
      ],
    }
    ```
  - 使用 v-for="(item,index) in item" 將資料輸出於頁面上
  - 製作分頁切換按鈕
    ```
    使用到元件溝通 $emit 語法技術
    父元件層加上 v-on: 語法，v-on:click 完成點擊觸發切換頁面，撈取 api 分頁資料
    ```
  - 製作高、低切換按鈕(價格、評分) 
    ```
    使用 boostrap vue 導航菜單套件製作，使用到元件溝通 $emit 語法技術
    父元件層加上 v-on: 語法，v-on:click 完成點擊觸發切換頁面，撈取 api 分頁資料
    ```
    ```
    參數切換: 
      rating_desc,
      rating_asc,
      price_desc,
      price_asc
     ```
  - group:[ ] 撈取所有可購買日期
    ```
    使用 (v-for="(g,i) in item.group" :key="i.group") 撈取
    ```
  - 設定更多可購買日期，使用 vue2-datepicker 套件製作 
    ``` 
    $ npm install vue2-datepicker --save
    ```
## 8.頁面，串接 API 完成，打包上 GitHub 發布版本v2.0
## 9.保留一天測試 debug 頁面問題
## 10.2020/11/13更換版型頁面發布版本v3.0
## 11.評分數字顯示+小數點
  ```
    {{ item.rating + '.0' }} 
  ```
## 12.data 日期格式化
  ```
  使用技術 moment 日期格式化套件
  $ npm install vue-moment
  moment().locale('zh-tw') 更改為中文語系
  ``` 
## 13.2020/11/16更換版型頁面發布版本v4.0
## 14.網站截圖
  - 切換評分按鈕
  ```
  評分高結果
  ```
  ![Image text](https://github.com/aassga/tripresso/blob/feature/tripresso_v1.0/Tripresso_rating_desc.png)
  ```
  評分低結果
  ```
  ![Image text](https://github.com/aassga/tripresso/blob/feature/tripresso_v1.0/Tripresso_rating_asc.png)
  - 切換價格按鈕
  ```
  價格高結果
  ```
  ![Image text](https://github.com/aassga/tripresso/blob/feature/tripresso_v1.0/Tripresso_price_desc.png)
  ```
  價格高結果
  ```
  ![Image text](https://github.com/aassga/tripresso/blob/feature/tripresso_v1.0/Tripresso_price_asc.png)
