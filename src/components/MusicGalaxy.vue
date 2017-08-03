<template>
  <div class="root">

    <div class="bgImg">
      <SideBar tab='4'></SideBar>
    </div>
    <div class="content">
      <h1 class="title">Music Galaxy</h1>
      <img class="phone" src="~@/assets/bitmap@3x.png" alt="">

      <p class="article">
        Music Galaxy 是參加 UI Club 上的 UI challenge 所做的一個小課題，功能上是一個音樂播放應用程式，所含的功能頁面包括音樂庫、播放器、樂手資訊和瀏覽音樂的功能，因為是參加設計挑戰且不用把實作的可能考慮進去，因此設計上就比較大膽不拘小節，做了很多很有趣的嘗試、想讓這樣的介面能讓使用者在聆聽音樂的過程中有特別的體驗和感到新奇。
      </p>

      <p class="article">
        一開始在決定設計方向時便不考慮整理音樂風格或好好排序的做法，而是打算讓應用程式可以隨機推薦使用者不同的音樂，故後來的發想便將風格設定為宇宙，使用者在首頁滑動頁面時會出現刻劃成星球的專輯，營造出在宇宙中探索巧遇不同星球的未知性和驚喜；順著這樣的風格往下思考其他功能，便將歌手包裝成太空人的形象，帶領使用者聆聽他們發現的專輯星球。
      </p>

      <div class="appWrapper">
        <img class="phone artboard3" src="~@/assets/mg1.png" alt="">
        <img class="phone artboard3" src="~@/assets/mg2.png" alt="">
      </div>

      <p class="article">
        而播放器的頁面也做了很多巧思，像是將音軌的波形角度調整成如同航向軌跡，讓畫面隨著音軌捲動而像是旅程行進，播放中歌詞也會從畫面遠出飛入、或是讓使用者在喜歡的橋段按下星形 icon 在音軌中留下記號，都是為了讓星際間航行這個意境呈現出來讓使用者感受；設計過程中也使用了大量個工具如 sketch 和 principle ，嘗試在不實際做出成品的情況下利用 prototype 模擬出使用的情境和互動特色，方便溝通讓其他人能夠理解設計的理念；這樣的種種內容和挑戰都讓這次的 UI challenge 過程特別有趣和收穫豐富。
      </p>

      <div class="appWrapper">
        <img class="phone artboard3" src="~@/assets/mg3.png" alt="">
        <img class="phone artboard3" src="~@/assets/mg4.png" alt="">
      </div>



    </div>

  </div>
</template>

<script>

import jquery from 'jquery'
import bootstrapWebpack from 'bootstrap-webpack'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'MusicGalaxy',
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
    margin-right: 40pt;
    padding-left: 150pt;
    padding-right: 150pt;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50pt;
    margin-top: -28pt;
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
