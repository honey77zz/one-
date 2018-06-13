<template>
  <div id="movie" style="background:#f6f6f6">
    <ul class="movie_box">
      <li class="movie_box_card" v-for="i in movieItems" :key="i.id">
        <p class="tip">-&nbsp;影视&nbsp;-</p>
        <p class="title">{{i.title}}</p>
        <p class="author">文&nbsp;/&nbsp;鱼叔</p>
        <div class="pic_bg">
          <img :src="i.img_url" alt="">
        </div>
        <p class="happy">{{i.forward}}</p>
        <p class="text">——关于《瑞克和摸底 第三季》</p>
        <p class="time">{{i.post_date.split(' ')[0].replace( /-/g,' / ' )}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  name: 'Movie',
  mounted(){
    // console.log(this.$store);
    let self = this;
    let url = 'http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82';
    axios.get( url ).then(function( data ){
        self.movieItems = [...data.data.data.content_list];
        // console.log( self.movieItems );
        
    }).catch(function( err ){
        console.log( err );
    });
    // this.$store.dispatch('getOne')
  },
  data(){
    return {
      movieItems: [],
      // movieTime: self.movieItems[i].post_date.split(' ')[0].replace( /-/g,' / ' )
    }
  }
}
</script>

<style scoped>
  .movie_box{
    margin-top: 54px;
  }
  .movie_box_card{
    padding-bottom: 25px;
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

