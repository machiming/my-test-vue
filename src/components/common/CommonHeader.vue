<template>
    <div class="search" >
        <input type="text" @focus="search" @blur="removeSearch" v-bind:class="{ active: isActive }" class="search-box" placeholder="搜索音乐、视频、歌词、电台">
    </div>
</template>
html:5
<script>
    export default {
        name: "PartHeader",
        data:function(){
          return{
            isActive:false
          }
        },
      methods:{
        search:function () {
          this.isActive=true
        },
        removeSearch:function () {
          this.isActive=!this.isActive
       }
      }
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
    width: 75%;
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
.active{
  width: 85%;
  float: right;
  margin-right: 12.5%;
  margin-left: 2.5%;
  transition: all 200ms;
}
input::-webkit-input-placeholder{
     color: rgba(0, 0, 0, 0.65);
   }

</style>
