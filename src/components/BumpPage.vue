<template>
  <div class="root">

    <div class="bgImg">
      <SideBar tab='1'></SideBar>
    </div>
    <div class="content">
      <h1 class="title">BUMP</h1>
      <img class="phone" src="~@/assets/bitmap@3x.png" alt="">

      <p class="article">
        BUMP 是一款以獨立音樂為主題的應用程式，開發前後歷時兩個多月，功能從一開始的資訊查詢、揪團，到後來慢慢發展為獨立音樂平台；開發方式是直接和工程師們組成團隊，直接的進行溝通討論，而我負責的任務從資訊架構、介面設計、使用者體驗，到後期也開始進行產品設計來開發新功能和協助行銷等等，過程中學習了不只關於設計、還有種種關於任務規劃和合作的經驗。
      </p>

      <p class="article">
        產品一開始的發想是從獨立樂團聽眾出發的，獨立音樂界因為缺乏完善豐富的交流平台，讓各團或展演空間都只是在臉書或是貼貼海報宣傳最新的表演資訊，而粉絲聽眾間也只能憑藉著少少的管道去掌握最新的訊息，而如果本來的朋友圈裡沒有同好的話，會更難找到同伴一起去聽表演參與盛會。在這樣的情境下，團隊打算開發出能夠利用 OpenData 的資料彙整出全台最完整的獨立音樂表演活動資訊，再以這些資訊為基礎讓使用者能夠揪團一起前往，這樣的想法便是BUMP最一開始的雛形。
      </p>

      <img class="phone artboard" src="~@/assets/artboard-2@3x.png" alt="">

      <p class="article">
        在製作 Functional map 和功能開發時，團隊遇到了一些瓶頸：各功能在架構上的重要性、活動應該要包含哪些資訊、揪團方面應該要讓使用者掌握彼此多少資訊，為了找出合適的答案，團隊找了高雄的一個展演空間老闆和他有在聽獨立樂團的朋友們，舉行了約莫十幾個人的 Focus group 訪查，以求更明確的瞭解使用者的各面向，藉著這些訪查所獲得的需求和團隊討論的結果，製作出了 Functional map。
      </p>

      <p class="article">
        Focus group 訪查事前準備：https://goo.gl/mcXu7g
      </p>

      <img class="phone artboard2" src="~@/assets/6f.png" alt="">

      <p class="article">
        在應用程式的架構和流程明確後，便著手進行設計 UI 的部分，一開始參考了許多知名獨立樂團的風格，以求設計出會讓獨立樂團粉絲們容易有共鳴的介面；考慮到這類的應用程式和功能架構並不算常見，設計上主要是以易用性和容易了解爲目標，但也得兼顧時程和工程端，比方說在搜尋功能上，團隊開發出能以時間、地點、關鍵字作為搜尋條件，一開始便花了點心思在方便使用者輸入資訊，接著考慮到使用者會需要利用地點和時間範圍來做綜合搜尋，而這樣的搜尋條件欄位配置上又須要與關鍵字做區隔，以防使用者混淆，以及搜尋結果該如何呈現、或是沒有符合結果時要以什麼提示使用者，都是在設計面上處處考慮使用者的呈現。
      </p>

      <div class="appWrapper">
        <img class="phone artboard3" src="~@/assets/searching-copy@3x.png" alt="">
        <img class="phone artboard3" src="~@/assets/searching-result@3x.png" alt="">
      </div>

      <p class="article">
        雖然會想在各面向上都盡力去下功夫，但這次的計畫有著時程上的限制因此得在部分地方做取捨，其一是團隊決議在元件使用先以原生的為主，但是可以在配色上去做情境的營造、測試的方式也先以 Mirror 搭配流程圖的方式做評估；儘管有諸多的讓步，但也是在團隊理解到任務的優先程度後去決定的，最後能在時程內開發出功能完善的版本並上架，也的確是在取捨下得出的好結果。
      </p>

      <p class="article">
        完成上架後團隊便直接以這樣的成品去進行測試，規劃找出接下來要再完善或開發的功能，比較大的部分像是發現 opendata 的展演資訊其實不夠完善，目前的解決辦法是先以 google 表單的方式讓可信的來源直接從後端新增資料，但也在著手開發網站或是應用程式來讓各團體或單位能夠更方便的新增展演活動。種種過程跟細節都是我們花了很多心思去構想跟開發的，而目前的成果也得到了opendata競賽 開發資料應用組 優等，這樣的成績也算是對團隊大大的鼓勵，支持我們接著 BUMP 下去。
      </p>

      <img class="phone artboard5" src="~@/assets/TheIcon.png" alt="">

      <p class="article">
        App Store 下載“Bump”:
        <a href="https://goo.gl/ekkfeL">https://goo.gl/ekkfeL</a>
      </p>
    </div>

  </div>
</template>

<script>

import jquery from 'jquery'
import bootstrapWebpack from 'bootstrap-webpack'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'EachPage',
  components:{
    SideBar,
  },
  data () {
    return {
      msg: 'EachPage'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Play');
@import url('https://fonts.googleapis.com/css?family=Anton');

.root
{
  background-color: #242629;
  border: 1px solid rgba(0,0,0,0);
  position: relative;
  z-index: 999;
}

.bgImg
{
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url(~@/assets/bg_each.png);
  background-size: cover;
  background-attachment: fixed;
}
.content
{
  width: calc(100% - 200pt);
  margin-left: 200pt;
  height: 500vh;
  position: relative;
  top:0;
  z-index: 100;

  .title
  {
    color: #ffbb19;
    font-family: 'play';
    font-size: 45pt;
  }
  .phone
  {
    width: 180pt;
  }

  p.article
  {
    margin-top: 20pt;
    color: white;
    padding-right: 40pt;
    font-size: 15pt;
    text-align: left;
    margin-bottom: 60pt;
  }
  img.artboard
  {
    margin-bottom: 50pt;
    width: 300pt;
  }
  img.artboard2
  {
    margin-bottom: 50pt;
    width: 400pt;
  }
  div.appWrapper
  {
    padding-left: 150pt;
    padding-right: 150pt;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50pt;
    img
    {
      display: block;
      width: 150pt;
      height: 280pt;
    }
  }
  img.artboard5
  {
    width: 300pt;
    border-radius: 50pt;
    margin-bottom: 20pt;
  }
  a{
    text-decoration: none;
  }

}

</style>
