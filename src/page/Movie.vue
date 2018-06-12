<template>
  <div id="movie" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in items" :key="i.id">
        <p class="tip">-&nbsp;影视&nbsp;-</p>
        <p class="title">豆瓣9.9，在也找不到比他评价更牛的据了</p>
        <p class="author">文&nbsp;/&nbsp;鱼叔</p>
        <div class="pic_bg">
          <img src="../assets/logo.png" alt="">
        </div>
        <p class="happy">到底是谁没打满分！？这句都拿不到满分，观众也太严格了吧？</p>
        <p class="text">——关于《瑞克和摸底 第三季》</p>
        <p class="time">2017/10/31</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Movie',
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
  .pic_bg{
    width: 100%;
    height: 278px;
    /* margin: 10px 0; */
  }
  .text{
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    margin-top: 10px;
    text-align: right;
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

