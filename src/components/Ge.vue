<template>
  <div class="ge">
    <p class="tip">-&nbsp;音乐&nbsp;-</p>
    <p class="title">{{geData.title}}</p>
    <p class="author">文&nbsp;/&nbsp;{{geData.author.user_name}}</p>
    <div class="ge_img">
      <div class="ge_img_bg"></div>
      <div class="ge_img_pic">
        <img :src="geData.img_url" alt="">
        <div class="ge_img_pic_icon"></div>
      </div>
    </div>
    <p class="happy">{{musicTitle}}&nbsp;|&nbsp;{{subtitle}}</p>
    <p class="text">{{geData.forward}}</p>
    <p class="time">{{geTime}}</p>
  </div>
</template>

<script>
export default{
  name: 'Ge',
  props: ['geData'],
  mounted(){
    // console.log( this.geData )
  },
  data(){
    return{
          geTime: this.geData.post_date.split(' ')[0].replace( /-/g,' / ' ),
          subtitle: this.geData.subtitle.split( ':' )[1],
          musicTitle: this.geData.share_info.title.split( ':' )[1]

    }
  }
}
</script>

<style scoped>
  .ge .tip{
    font-size: 14px;
    line-height: 24px;
    color: #808080;
    padding-top: 10px;
    text-align: center;
  }
  .ge .title{
    font-size: 22px;
    line-height: 28px;
    color: #000;
    margin-top: 20px;
    padding: 0 20px;
    
  }
  .ge .author{
    font-size: 16px;
    line-height: 24px;
    color: #808080;
    margin-top: 10px;
    padding: 0 20px;
    
  }
  .ge .ge_img{
    width: 100%;
    height: 260px;
    background: url('http://image.wufazhuce.com/music-list-right.png') no-repeat right center;
    background-size: auto 100%;
    position: relative;
    margin: 10px 0;
  }
  .ge .ge_img .ge_img_bg{
    width: 300px;
    height: 260px;
    border-radius: 0 45% 45% 0;
    box-shadow: 0 0 3px 1px #eaeaea;
  }
  .ge .ge_img .ge_img_pic{
    position: absolute;
    top: 5px;
    left: 45px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: url('http://image.wufazhuce.com/music-list-paceholder.png');
    background-size: cover;
    overflow: hidden;
  }
  .ge .ge_img .ge_img_pic img{
    width: 100%;
    height: 100%;
  }
  .ge .ge_img .ge_img_pic .ge_img_pic_icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: url('http://image.wufazhuce.com/play_btn_empty.png');

  }
  .ge .text{
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    margin-top: 10px;
    padding: 0 20px;
    
  }
  .ge .happy{
    font-size:13px;
    line-height: 28px;
    color: #808080;
    padding: 0 20px;
    
  }
  .ge .time{
    font-size: 13px;
    line-height: 28px;
    color: #808080;
    margin-top: 20px;
    padding: 0 20px;
    
  }
</style>

