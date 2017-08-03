<template lang="html">
  <div class="sideBar">
    <h1 class="pjName">Project Name</h1>

    <router-link class="project" :class="{selected:tab == '1'}" :to="{path:'BumpPage'}">BUMP</router-link>
    <router-link class="project" :class="{selected:tab == '2'}" :to="{path:'EarTraining'}">Ear Training</router-link>
    <router-link class="project" :class="{selected:tab == '3'}" :to="{path:'CloudTicket'}">雲端發票</router-link>
    <router-link class="project" :class="{selected:tab == '4'}" :to="{path:'MusicGalaxy'}">Music Galaxy</router-link>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  props:['tab'],
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.sideBar
{
  width: 200pt;
  position: fixed;
  height: 100vh;

  .pjName
  {
    color: #e7e7e7;
    font-family: 'play';
    font-size: 25pt;
    text-align: left;
    margin-top: 15pt;
    margin-left: 15pt;
    border-bottom: 1pt solid rgba(151,151,151,0.54);
    width: auto;
    float: left;
    padding-bottom: 5pt;
    margin-bottom: 25pt;
  }

  .project
  {
    clear: left;
    display: block;
    text-align: left;
    margin-left: 15pt;
    font-size: 20pt;
    font-family: 'play';
    color: #c0c0c0;
    margin-top: 10pt;
    text-decoration: none;
  }
  .selected
  {
    color: #ffbb19;
  }
}
</style>
