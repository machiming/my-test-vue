<template>
<div class="introduce">
<div class="top">
  <p>推荐歌单&nbsp;></p>
</div>
  <div>
    <ul id="list">
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐使人退步音乐啊</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
      <li class="nav"><img src="../assets/banner.jpg" width="100%" height="100%"/><span>音乐</span></li>
    </ul>
  </div>
</div>
</template>
<script>
    export default {
        name: "index-introduce"
    }
</script>

<style scoped>
  .introduce{
    height: auto;
     margin-bottom: 50px;
  }
.top{
  height: 32px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

}
.top:before{
  content: "";
  height: 1px;
  display: block;
  width: 100%;
  border-top: 1px solid lightgray;
  transform: scaleY(0.5);
}
.top p{
  margin-top: 10px;
  border-left: 3px #e72d2c solid;
  text-indent: 1em;
  text-align: left;
}
#list{
  list-style: none;
  display: flex;
  flex-flow: wrap;
  height: 32vw;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  height: auto;
}
#list li{
  width: 32%;
  height: 32vw;
  padding-bottom: 10vw;
}
#list li span{
  height: 1em;
  line-height: 1em;
  text-align: left;
  font-size: 14px;
}
</style>
