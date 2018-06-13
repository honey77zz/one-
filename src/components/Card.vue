<template>
  <div class="card">
    <p class="tip">- STORY -</p>
    <p class="title">{{articleData.title}}</p>
    <p class="author">文 / {{articleData.author.user_name}}</p>
    <img :src="articleData.img_url" alt="">
    <p class="text">{{articleData.forward}}</p>
    <p class="time">{{cardTime}}</p>
  </div>
</template>

<script>
export default{
  name: 'Card',
  props: ['articleData'],
  mounted(){
    // console.log(this.articleData);
  },
  data(){
    return{
          cardTime: this.articleData.post_date.split(' ')[0].replace( /-/g,' / ' )     
    }
  }
}
</script>

<style scoped>
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
    /* height: 200px; */
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

