<template>
  <div class="root">

    <div class="bgImg">
      <SideBar tab='2'></SideBar>
    </div>
    <div class="content">
      <h1 class="title">Perfect Pitch Train</h1>
      <img class="phone" src="~@/assets/bitmap@3x.png" alt="">

      <p class="article">
        Perfect Pitch Train 是一款訓練絕對音感的遊戲，以介面和配色營造音樂廳的情境，讓使用者在愉悅的氛圍下進行遊戲。我在這個案子中擔任 UI 的改良，重新設計出有趣又易用易懂的介面，過程中和工程師大量溝通技術可行性和出圖規格方式，是一個規模較簡單、但限制較少的作品。
      </p>

      <p class="article">
        嚴格來說這應該算是一個 redesign 的計畫，工程師一開始已經完成了整個應用程式和介面，但是在覺得介面有點過於陽春的想法下請我幫他重新製作介面；設計方向在初期就選定了想營造音樂廳的情境，因此在首頁背景的設計、整體配色、抑或是選擇遊玩模式的互動方式都以實際的音樂廳作為風格參考。
      </p>

      <div class="cr_col4_flex">
        <img class="cr_col4_img" src="~@/assets/et1.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et2.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et3.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et4.png" alt="">
      </div>

      <p class="article">
        過程中遇到的比較大的困難是在和工程師溝通出圖規格上，例如首頁出圖的方式、維互動應該怎麼呈現，而最花心力的地方應該是在遊玩畫面的配置和觸控範圍的座標註記上，解決的過程中除了和工程師大量的溝通外、也請教了工程前輩和設計的同伴們，藉由得到的回饋建議去修正方法和方向，才讓介面順利完成。
      </p>

      <div class="cr_col4_flex">
        <img class="cr_col4_img" src="~@/assets/et5.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et6.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et7.png" alt="">
        <img class="cr_col4_img" src="~@/assets/et8.png" alt="">
      </div>

      <p class="article">
        個人其實蠻滿意這次的介面設計，尤其是在資訊的呈現上做到了易讀又不失有趣，比較可惜的是沒有機會再去做流程上的優化，有些使用者體驗的部分其實還想去多下功夫，讓使用者可以藉由一些互動跟反饋更明確的瞭解遊戲的遊玩方式和目前的進度，可能等工程師有空了再跟他多建議吧！
      </p>

      <div class="cr_earTraining_sp1">
          <img class="cr_col1_img" src="~@/assets/et9.png" alt="">
      </div>







      <p class="article">
        App Store 下載“Perfect Pitch Train”:
        <a href="https://goo.gl/BwNeqd">https://goo.gl/BwNeqd</a>
      </p>
    </div>

  </div>
</template>

<script>

import jquery from 'jquery'
import bootstrapWebpack from 'bootstrap-webpack'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'EarTraining',
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
.cr_earTraining_sp1{
  margin-top: -28pt;
  text-align: center;
  img{
    width: 320px;
    height: 320px;
    border-radius: 50px;
  }
}

.cr_col4_flex{
  display: flex;
  justify-content: space-between;
  padding-right: 40pt;
  margin-bottom: 60pt;
  img{
    width: 180px;
    height: 320px;
  }
}
.root
{
  background-color: #242629;
  border: 1px solid rgba(0,0,0,0);
}

.bgImg
{
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url(~@/assets/bg_each.png);
  background-size: cover;
}
.content
{
  width: calc(100% - 200pt);
  margin-left: 200pt;
  height: 500vh;
  position: relative;
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
