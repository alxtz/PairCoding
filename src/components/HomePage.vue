<template>
  <div class="root">
    <div class="container-fluid" v-bind:class="{cyan: cyanActive}">
      <h1 class="name">Hubbie</h1>

      <div class="holder" v-bind:class="{l1: l1Active, l2: l2Active}" >
        <input type="text" class="search" placeholder="Please Enter Your Code">
        <div class="idea" >
          Gathering Ideas
        </div>
        <div class="idea2 idea21">
        </div>
        <div class="idea3">
          Assembling Projects
        </div>
      </div>

      <ul class="cates">
        <li class="cate">Product Design</li>
        <li class="cate">Motion Graphic</li>
        <li class="cate">UI</li>
        <li class="cate">Photography</li>
      </ul>

      <a class="enter" href="#" @click="enter">Enter</a>

    </div>
    <div class="background">
      <div class="imgColumn">
        <img src="~@/assets/Activity_All.png" alt="app_activities">
        <img src="~@/assets/PrizeZone.png" alt="app_activities">
        <img src="~@/assets/ActivateLoadingPage.png" alt="app_activities">
      </div>

      <div class="imgColumn">
      </div>
      <div class="imgColumn">
        <img src="~@/assets/Activity_All.png" alt="app_activities">
        <img src="~@/assets/PrizeZone.png" alt="app_activities">
        <img src="~@/assets/ActivateLoadingPage.png" alt="app_activities">
      </div>
      <div class="imgColumn">
        <img src="~@/assets/iPhonePlanet.png" alt="app_activities">
        <img src="~@/assets/iPhone7Plus.png" alt="app_activities">
        <img src="~@/assets/iPhone727.png" alt="app_activities">
        <img src="~@/assets/Bump_All.png" alt="app_activities">
      </div>
      <div class="imgColumn">
        <img src="~@/assets/Activity_All.png" alt="app_activities">
        <img src="~@/assets/PrizeZone.png" alt="app_activities">
        <img src="~@/assets/ActivateLoadingPage.png" alt="app_activities">
      </div>
      <div class="imgColumn">
        <img src="~@/assets/iPhonePlanet.png" alt="app_activities">
        <img src="~@/assets/iPhone7Plus.png" alt="app_activities">
        <img src="~@/assets/iPhone727.png" alt="app_activities">
        <img src="~@/assets/Bump_All.png" alt="app_activities">
      </div>
    </div>
  </div>
</template>

<script>

import jquery from 'jquery'
import bootstrapWebpack from 'bootstrap-webpack'

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'HomePage',
      cyanActive: false,
      l1Active: false,
      l2Active: false,
    }
  },

  methods:{
    enter(){
      // alert('enter')
      this.cyanActive = true;
      this.l1Active = true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Play');
  @import url('https://fonts.googleapis.com/css?family=Anton');

  .root {
    width: 100vw;
    height: 100vh;
  }
  .container-fluid {
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: rgba(0,0,0,0.55);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background-color 1s ease;


    h1.name {
      color: #ffb300;
      font-family: 'Anton';
      font-weight: 400;
      text-transform: uppercase;
      font-size: 100pt;
      line-height: 15vh;
      letter-spacing: 1vh;
      margin-top: 20vh;
      margin-bottom: 15vh;
      text-align: center;
      padding-left: 15pt;
    }

    div.holder
    {
      width: 350pt;
      height: 35pt;
      position: relative;
      box-shadow: 4px 8px 8px 0 rgba(0, 0, 0, 0.5);
      background-color: white;
      overflow: hidden;
      font-family: 'play';
      input.search {
        background-color: rgba(0,0,0,0);
        width: 350pt;
        margin: 0 auto;
        // border-radius: 2px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 29pt;
        height: 35pt;
        font-size: 18pt;
        font-family: 'play';
        text-align: center;
        font-weight: 600;
        float: left;
        display: inline-block;
        overflow: hidden;
        position: absolute;
        left: 0;
      }
      div.idea
      {
        transition: left 1s ease;
        width: 350pt;
        margin: 0 auto;
        // border-radius: 2px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 29pt;
        height: 35pt;
        font-size: 18pt;
        font-family: 'play';
        text-align: center;
        font-weight: 600;
        float: left;
        display: inline-block;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        font-weight: 600;
        font-family: 'play';
        line-height: 35pt;
        height: 35pt;
        position: absolute;
        display: inline-block;
        float: left;
        top: 0;
        font-size: 18pt;
        height: 35pt;
        width: 350pt;
        background-color: white;
        left: 350pt;
        background-color: rgba(0,0,0,0);
      }
      div.idea2
      {
        position: absolute;
        left: 350pt;
        height: 35pt;
        width: 350pt;
        background-color: #ffb300;
      }
      div.idea3
      {
        position: absolute;
        left: 350pt;
        height: 35pt;
        width: 350pt;
        background-color: rgba(0,0,0,0);
        font-size: 18pt;
        line-height: 35pt;
        font-weight: 600;
      }
    }

    div.l1
    {
      input.search
      {
        transition: left 1.5s ease;
        left: -350pt;
      }
      div.idea
      {
        transition: left 1.5s ease;
        left: 0;
        z-index: 5;
      }
      div.idea2
      {
        transition: left 1.5s ease;
        left: 0;
        z-index: 0;
        transition-delay: 2s;
      }
      div.idea21
      {
        transition: left 1.5s ease;
        transition-delay: 6s;
        left: 0;
        z-index: 0;
      }
      div.idea3
      {
        transition: left 1.5s ease;
        left: 0;
        p-index: 0;
        transition-delay: 4s;
      }
    }
    div.l2
    {

    }

    input.search::placeholder {
      padding-top: 2pt;
      text-align: center;
      font-family: 'play';
      color: #969696;
      font-size: 18pt;
      font-weight: 600;
    }
    input:focus {
      outline: none;
    }
    input:focus::placeholder {
      opacity: 0;
    }

    ul.cates {
      display: flex;
      width: 450pt;
      margin: 0 auto;
      justify-content: space-between;
      padding-left: 0;
      margin-top: calc(5pt + 1.5vh);
      li.cate {
        list-style-type: none;
        font-family: 'play';
        color: #d6d6d6;
        margin-left: 0;
        font-size: 17pt;
      }
    }

    a.enter
    {
      font-family: 'play';
      text-transform: uppercase;
      color: #f4f4f4;
      text-decoration: none;
      font-size: 20pt;
      font-weight: 900;
      margin-top: calc(25pt + 1vh);
    }
  }

  .cyan
  {
    background-color: #5e8aa7;
    transition: background-color 1s ease;
  }

  .background {
    // border: 2px solid red;
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: #5e8aa7;
    display: flex;
    overflow: hidden;
    z-index: 5;
    filter: blur(8.3px);


    .imgColumn {
      // border: 2px solid purple;
      padding: 0;
      padding-left: 1.5vw;
      padding-right: 1.5vw;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 1.5vw;
      margin-right: 1.5vw;
      display: none;
      img {
        width: 100%;
        margin-bottom: 2.7vw;
        display: none;
      }
    }
    .imgColumn:first-child {
      margin-left: -6vw;
    }
    .imgColumn:last-child {
      margin-right: -6vw;
    }
    .imgColumn:nth-child(1){
      background-image: url('~@/assets/bg1.png');
      background-size: 100% auto;
      animation: animatedBackground2 210s linear infinite;
    }
    .imgColumn:nth-child(2){
      background-image: url('~@/assets/bg2.png');
      background-size: 100% auto;
      animation: animatedBackground1 200s linear infinite;
    }
    .imgColumn:nth-child(3){
      background-image: url('~@/assets/bg3.png');
      background-size: 100% auto;
      animation: animatedBackground2 210s linear infinite;
    }
    .imgColumn:nth-child(4){
      background-image: url('~@/assets/bg4.png');
      background-size: 100% auto;
      animation: animatedBackground1 200s linear infinite;
    }
    .imgColumn:nth-child(5){
      background-image: url('~@/assets/bg5.png');
      background-size: 100% auto;
      animation: animatedBackground2 90s linear infinite;
    }
    .imgColumn:nth-child(6){
      background-image: url('~@/assets/bg6.png');
      background-size: 100% auto;
      animation: animatedBackground1 200s linear infinite;
    }
  }

  @-webkit-keyframes animatedBackground1 {
    from {
    	background-position:0 5000%;
    }

    to {
    	background-position:0 0;
    }
  }

  @-webkit-keyframes animatedBackground2 {
    from {
    	background-position:0 0;
    }

    to {
    	background-position:0 5000%;
    }
  }
</style>
