<template>
  <div id="music" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in items" :key="i.id">
        <p class="tip">-&nbsp;音乐&nbsp;-</p>
        <p class="title">这个世界未必所有事都如你所愿，但总有它的意思</p>
        <p class="author">文&nbsp;/&nbsp;馆长Jeekit</p>
        <img src="../assets/logo.png" alt="">
        <p class="happy">替你高兴·谢安琪&nbsp;|&nbsp;Slowness</p>
        <p class="text">上路去，别太挂念这里</p>
        <p class="time">2017/8/20</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Music',
  data(){
    return {
      items: [1,2,3,4]
    }
  }
}
</script>

<style>
   *{
    padding: 0;
    margin: 0;
  }
  .pic_box{
    margin-top: 54px;
  }
  .card{
    padding: 0 20px;
    padding-bottom: 25px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
  .tip{
    font-size: 14px;
    line-height: 24px;
    color: #808080;
    padding-top: 10px;
    text-align: center;
  }
  .title{
    font-size: 22px;
    line-height: 28px;
    color: #000;
    margin-top: 20px;
  }
  .author{
    font-size: 16px;
    line-height: 24px;
    color: #808080;
    margin-top: 10px;
  }
  .card img{
    width: 100%;
    height: 242px;
    /* margin: 10px 0; */
  }
  .text{
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    margin-top: 10px;
  }
  .happy{
    font-size:13px;
    line-height: 28px;
    color: #808080;
  }
  .time{
    font-size: 13px;
    line-height: 28px;
    color: #808080;
    margin-top: 20px;
  }
</style>

