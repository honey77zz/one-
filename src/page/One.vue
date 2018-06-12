<template>
  <div id="one" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in items" :key="i.id">
        <p class="time">time</p>
        <p class="count">VOL.2074</p>
        <img src="../assets/logo.png" alt="">
        <p class="author">插画|狐狸狐狸鱼</p>
        <p class="text">我们所度过的每一个日常，也许就是连续发生的奇迹</p>
        <p class="title">《日常》</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'One',
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
    text-align: center;
    padding-bottom: 25px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
  .time{
    font-size: 20px;
    color: #333;
    line-height: 22px;
    padding-top: 16px;
  }
  .count,.author,.title{
    font-size: 10px;
    line-height: 14px;
    color: #808080;
  }
  .card img{
    display: block;
    width: 100%;
    height: 250px;
    margin-top: 10px;
  }
  .author{
    margin-top: 5px;
  }
  .text{
    font-size: 14px;
    color: #333;
    line-height: 26px;
    margin: 20px 0;
  }
</style>

