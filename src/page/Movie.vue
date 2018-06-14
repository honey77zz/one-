<template>
  <div id="movie" style="background:#f6f6f6">
    <ul class="movie_box">
      <li class="movie_box_card" v-for="i in movieItems" :key="i.id">
        <p class="tip">-&nbsp;影视&nbsp;-</p>
        <p class="title">{{i.title}}</p>
        <p class="author">文&nbsp;/&nbsp;{{i.author.user_name}}</p>
        <div class="pic_bg">
          <img :src="i.img_url" alt="">
        </div>
        <p class="happy">{{i.forward}}</p>
        <p class="text">——《{{i.subtitle}}》</p>
        <p class="time">{{i.post_date.split(' ')[0].replace( /-/g,' / ' )}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default{
  name: 'Movie',
  computed: {
    ...mapState( ['movieItems'] )
  },
  mounted(){
    this.$store.dispatch('getOne')
  }
}
</script>

<style scoped>
  .movie_box{
    margin-top: 54px;
  }
  .movie_box_card{
    padding: 20px 0;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
  .movie_box_card .tip{
    font-size: 14px;
    line-height: 24px;
    color: #808080;
    padding-top: 10px;
    text-align: center;
    padding: 0 20px;
  }
  .movie_box_card .title{
    font-size: 22px;
    line-height: 28px;
    color: #000;
    margin-top: 20px;
    padding: 0 20px;

  }
  .movie_box_card .author{
    font-size: 16px;
    line-height: 24px;
    color: #808080;
    margin-top: 10px;
    padding: 0 20px;

  }
  .movie_box_card .pic_bg{
    width: 100%;
    height: 300px;
    background: url('http://image.wufazhuce.com/movie-list-background.png') no-repeat;
    background-size: cover;
    position: relative;
  }
  .movie_box_card .pic_bg img{
    width: 340px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .movie_box_card .text{
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    margin-top: 10px;
    text-align: right;
    padding: 0 20px;

  }
  .movie_box_card .happy{
    font-size:13px;
    line-height: 28px;
    color: #808080;
    padding: 0 20px;

  }
  .movie_box_card .time{
    font-size: 13px;
    line-height: 28px;
    color: #808080;
    margin-top: 20px;
    padding: 0 20px;

  }
</style>

