<template>
  <div class="containr">
   <ul id="list">
     <li class="nav" @click="showmusics"><span>音乐</span></li>
     <li class="nav" @click="showvideos"><span>视频</span></li>
     <li class="nav"><span>电台</span></li>
   </ul>
    <router-view-music v-show="showmusic"></router-view-music>
    <router-view-video v-show="showvideo"></router-view-video>
  </div>
</template>
<script>
  import music from './IndexMusic'
  import video from './IndexVedio'
  export default {
    name: "content",
    data:function () {
      return {
        showmusic:true,
        showvideo:false
      }
    },
    props:{

    },
    components:{
      "router-view-music":music,
      "router-view-video":video,
    },

    methods:{
      showmusics:function () {
        this.showmusic=true;
        this.showvideo=false;
      },
      showvideos:function () {
        this.showmusic=false;
        this.showvideo=true;
      }
    }
  }
</script>

<style scoped>
.containr{
  margin-top: 50px;
}
#list{
  list-style: none;
  display: flex;
  height: 35px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  background-color: white;
}
#list li{
  width: 100%;
  height: 35px;
  line-height: 35px;
}
#list li span{
  display: inline-block;
  vertical-align: bottom;
  box-sizing: border-box;
  line-height: 33px;
  border-bottom: 2px solid white;
}
#list li span:hover{
  display: inline-block;
  vertical-align: bottom;
  box-sizing: border-box;
  line-height: 33px;
  border-bottom: 2px solid #e72d2c;
}
</style>
