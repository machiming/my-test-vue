<template>
  <ul id="list">
    <li class="nav"><img src="../assets/radio.png" width="50%"/><span>私人推荐</span></li>
    <li class="nav"><img src="../assets/radio.png" width="50%"/><span>每日推荐</span></li>
    <li class="nav"><img src="../assets/radio.png" width="50%"/><span>歌单</span></li>
    <li class="nav"><img src="../assets/radio.png" width="50%"/><span>排行榜</span></li>
  </ul>
</template>

<script>
    export default {
        name: "index-nav"
    }
</script>

<style scoped>
  #list{
    list-style: none;
    display: flex;
    height: 22vw;
    justify-content: space-between;
    width: 100%;
    background-color: white;
  }
  #list li{
    width: 100%;
    height: 22vw;
    line-height: 22vw;
    position: relative;
  }
  #list li span{
    line-height: 1em;
    position: absolute;
    bottom: 5px;
    width: 100%;
    left: 0;
    font-size: 12px;

  }
  #list li img{
    margin-top: 10px;
    border-radius: 50%;
    border: 2px solid #e72d2c;
  }
</style>
