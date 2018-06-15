<template>
  <div class="story">
    <p class="time">{{time}}</p>
    <p class="count">{{showData.volume}}</p>
    <img :src="showData.img_url" alt="">
    <p class="author">{{showData.title}} | {{showData.pic_info}}</p>
    <p class="text">{{showData.forward}}</p>
    <p class="title">{{showData.words_info}}</p>
  </div>
</template>

<script>
export default{
  name: 'Story',
  props: [ 'showData' ],
  mounted () {
    //  console.log(this.showData);
  },
  data(){
      return {
          time: this.showData.post_date.split(' ')[0].replace( /-/g,' / ' )
      }
  }
}
</script>
<style scoped>
.story{
  width: 100%;
}
.story .time{
    font-size: 20px;
    color: #333;
    line-height: 22px;
    padding-top: 16px;
  }
  .story .count,.story .author,.story .title{
    font-size: 10px;
    line-height: 14px;
    color: #808080;
    margin-top: 10px;
  }
  .story img{
    display: block;
    width: 100%;
    margin: 20px 0;
  }
  .story .text{
    font-size: 14px;
    color: #333;
    line-height: 26px;
    margin: 15px 0;
    padding: 0 20px;
  }
</style>


