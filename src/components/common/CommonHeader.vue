<template>
    <div class="search">
        <input type="text" class="search-box" placeholder="搜索音乐、视频、歌词、电台">
    </div>
</template>
html:5
<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
.search{
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: rgb(231, 45, 44);
}
  .search-box{
    width: 70%;
    height: 36px;
    margin: 7px auto;
    box-sizing: border-box;
    border-radius: 20px;
    background: white;
    outline: none;
    border: none;
    text-indent: 1em;
    font-size: 16px;
  }
input::-webkit-input-placeholder{
     color: rgba(0, 0, 0, 0.65);
   }

</style>
