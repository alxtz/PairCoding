<template lang="html">
  <div class="cr_bg">
    <div class="title" :class="{'titleFuck1':titleFuck1,'titleFuck2':titleFuck2}">
      BE THE HUB
    </div>
    <div class="circle cir1" :class="{fuck:shit[0]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[1]}">

    </div>
    <div class="circle cir3" :class="{fuck:shit[2]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[3]}">

    </div>
    <div class="circle cir5" :class="{fuck:shit[4]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[5]}">

    </div>
    <div class="circle cir7" :class="{fuck:shit[6]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[7]}">

    </div>
    <div class="circle cir9" :class="{fuck:shit[8]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[9]}">

    </div>
    <div class="circle cir11" :class="{fuck:shit[10]}">

    </div>
    <div class="circle cirbg" :class="{fuck:shit[11]}">

    </div>
    <div class="circle cir13" :class="{fuck:shit[12]}">

    </div>
  </div>
</template>

<script>
export default {
  name:'FuckingCircle',
  data(){
    return{
      shit:[false,false,false,false,false,false,false,false,false,false,false,false,false],
      titleFuck1:false,
      titleFuck2:false
    }
  },
  mounted:function () {
    var i = 0
    // this.shit = [true,true,true]
    // this.shit.forEach(function (shit) {
    //   shit = true
    // })
    // for(i=0;i<3;i++){
    //   setTimeout(() => {
    //     this.$set(this.shit,i,true)
    //     console.log('do');
    //   },3000)
    //
    // }
    var i = 0;
    setInterval(() => {
      this.$set(this.shit,i,true)
      i = i + 1
      if(i==2){
        this.titleFuck1 = true
      }
      if(i==8){
        this.titleFuck2 = true
      }
      console.log('ss');
    },250)
    console.log(this.shit);
  }
}
</script>

<style scoped lang="scss">
  .title{
    white-space: nowrap;
    color: #fff;
    position: fixed;
    margin-top: 0%;
    z-index: 9;
    font-size: 0vw;
    transition: font-size 2s 0s,
                margin-top 1s 0s;
    opacity: 0;
  }
  .titleFuck1{
    font-size:5vw;
    opacity: 1;
  }
  .titleFuck2{
    margin-top: 100%;
    font-size: 150vw;
  }
  .cr_bg{
    background-color: #000;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .circle{
    position: absolute;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    transition: width 3s 0s cubic-bezier(0.15, 0.32, 0.31, 1.13),
                height 3s 0s cubic-bezier(0.15, 0.32, 0.31, 1.13);
    opacity: 0;
    // transition-delay: 2s;
  }
  .cir1{
    background: gray;
  }
  .cir3{
    background: #41c7f4;
  }
  .cir5{
    background: #4283f4;
  }
  .cir7{
    background: #41c7f4;
  }
  .cir9{
    background: #f4ee41;
  }
  .cir11{
    background: #41f48e;
  }
  .cirbg{
    background: #000;
    transition: width 2.5s 0s cubic-bezier(0.18, 0.67, 0.54, 0.57),
                height 2.5s 0s cubic-bezier(0.18, 0.67, 0.54, 0.57);
  }

  .fuck{
    opacity: 1;
    width: 2000px;
    height: 2000px;
  }
</style>
