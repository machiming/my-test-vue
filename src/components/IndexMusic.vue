<template>
  <div class="music">
    <router-view-banner name="banner"/>
    <router-view-nav name="banner"/>
    <router-view-introduce name="introduce"/>
  </div>
</template>

<script>
  import banner from './IndexBanner'
  import nav from './IndexNav'
  import introduce from './IndexIntroduce'
  import music from './IndexMusic'
  export default {
    name: "Partcontent",
    components:{
      "router-view-banner":banner,
      "router-view-nav":nav,
      "router-view-introduce":introduce,
    }
  }
</script>

<style scoped>
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
