<template>
  <div class="hello">
    <ul id="list">
      <li class="nav"><p>发现音乐</p></li>
      <li class="nav"><p>我的音乐</p></li>
      <li class="nav"><p>朋&nbsp;友</p></li>
      <li class="nav"><p>账&nbsp;号</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .hello{
    z-index: 1000;
  }

#list{
  list-style: none;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(47, 47, 47);

}

#list>.nav:nth-child(1){
  width: 100%;
  line-height: 50px;
  color: white;
  background: url("../../assets/music.png")no-repeat;
  background-size: auto 55%;
  background-position: center 10%;

}
  #list>.nav:nth-child(1):hover{
    background: url("../../assets/music-hover.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;
    color: rgb(231, 45, 44);

  }
  #list>.nav:nth-child(2){
    width: 100%;
    line-height: 50px;
    color: white;
    background: url("../../assets/mymusic.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;

  }
  #list>.nav:nth-child(2):hover{
    background: url("../../assets/mymusic-hover.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;
    color: rgb(231, 45, 44);

  }
  #list>.nav:nth-child(3){
    width: 100%;
    line-height: 50px;
    color: white;
    background: url("../../assets/parent.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;

  }
  #list>.nav:nth-child(3):hover{
    background: url("../../assets/parent-hover.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;
    color: rgb(231, 45, 44);

  }
  #list>.nav:nth-child(4){
    width: 100%;
    line-height: 50px;
    color: white;
    background: url("../../assets/account.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;

  }
  #list>.nav:nth-child(4):hover{
    background: url("../../assets/account-hover.png")no-repeat;
    background-size: auto 55%;
    background-position: center 10%;
    color: rgb(231, 45, 44);

  }

  #list>.nav p{
     line-height: 20px;
    position: relative;
    top: 30px;
    font-size: 12px;
 }
</style>
