<template>
  <div class="root">

    <div class="bgImg">
      <SideBar tab='3'></SideBar>
    </div>
    <div class="content">
      <h1 class="title">雲端發票</h1>
      <img class="phone" src="~@/assets/bitmap@3x.png" alt="">

      <p class="article">
        此UI 設計是對 Play store 中架上的應用程式「雲端發票」去進行 redesign，也是我第一個嘗試獨自設計作業的應用程式；設計方向主要是整理架構中的功能，再以使用者的位子去思考，拿掉許多不會用到、卻會干擾資訊閱讀的功能，再重新設計操作流程，讓使用者能以最少的步驟找到想要的資訊或功能，而配色上也以乾淨明亮為主，捨棄過重的配色版面不用，避免讓使用者在大量資訊下容易感到疲累。
      </p>

      <p class="article">
        這個作品的設計準則主要是參考 material design，所使用的元件、版面也是先以原生 UI 為主，但 UI 設計上很仔細的考量資訊呈現的方式和介面對使用者的引導，主要是想讓使用者在操作流程上感覺順暢而不煩瑣，對於電子發票中提供的大量資訊也以層級的方式作呈現，讓在找尋資訊的過程中能夠一目瞭然而不感到困惑或是花很多力氣在尋找上；而在之後利用 prototype 進行的使用者測試上也得到良好的回饋，受試者都能順暢的操作並找到想要的資訊，是一個相當完整的練習課題。
      </p>

      <div class="cr_col4_flex">
        <img class="cr_col4_img" src="~@/assets/ct1.png" alt="">
        <img class="cr_col4_img" src="~@/assets/ct2.png" alt="">
        <img class="cr_col4_img" src="~@/assets/ct3.png" alt="">
        <img class="cr_col4_img" src="~@/assets/ct4.png" alt="">
      </div>



    </div>

  </div>
</template>

<script>

import jquery from 'jquery'
import bootstrapWebpack from 'bootstrap-webpack'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'CloudTicket',
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

.cr_col4_flex{
  display: flex;
  justify-content: space-between;
  padding-right: 40pt;
  margin-bottom: 60pt;
  margin-top: -28px;
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
