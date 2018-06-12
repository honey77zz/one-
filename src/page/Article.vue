<template>
  <div id="article" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in items" :key="i.id">
        <p class="tip">- STORY -</p>
        <p class="title">没有赏味期限，只有来日方长</p>
        <p class="author">文 / 周源远</p>
        <img src="../assets/logo.png" alt="">
        <p class="text">爱一个人的时候，才会学会理解和包容。愿意为对方削去菱角，然后打磨成圆。</p>
        <p class="time">2017/7/31</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Article',
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
    height: 200px;
    margin: 10px 0;
  }
  .text{
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    margin-top: 10px;
  }
  .time{
    font-size: 13px;
    line-height: 28px;
    color: #808080;
    margin-top: 20px;
  }
</style>

