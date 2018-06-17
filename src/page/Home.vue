<template>
  <div class="home">
    <!--<router-link  to="h1"  @backd="show" @click="change">跳转到 home 的 h1</router-link>-->
    <!--<router-view></router-view>-->
    <Loading v-show="isShow"/>
    <div class="home-img-box">
      <div class="home-img-boxbg"></div>
      <img :src="home.img_url"/>
      <div class="home-text-box" @click="gotolink(home.content_id,home.category,home.img_url)" >
        <p class="day">{{day}}</p>
        <p class="month">{{home.volume}}&nbsp;|&nbsp;{{itemDate}}</p>
        <p class="content-short">{{home.forward}}</p>
        <span class="span-angle-down"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    </div>
     <div class="home-text" v-for="i in homeItems" @click="gotolink(home.content_id,home.category,home.img_url)" :key="i.id">
        <div class="aticle">
        <p><a href="#" class="home-link"  >阅读 |</a></p>
          <div class="aticle-link">
            <p class="aticle-title">{{i.title}}</p>
            <p class="aticle-auther">作者/{{i.author.user_name}} </p>
            <p class="aticle-content">
              <i >{{i.forward}}</i>
              <!--<i>——海因莱因</i>-->
            </p>
            <p class="aticle-more"><a href="">阅读全文</a></p>
          </div>
        </div>
        <div class="question"></div>
     </div>
    <a  class="home-more"  @click="goone">更多内容
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>
    <div class="bottom">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000462" class="bottom-link">
        <img src="http://image.wufazhuce.com/beian.png" alt="">
        <span class="bottom-hu">沪公安网备31010502000462</span>
      </a>
    </div>

  </div>
</template>

<script>

    import Loading from "./Loading";
    import { mapState } from 'vuex'

export default {
  name: 'Home',

    components: { Loading},
  computed: {
    ...mapState( ['home','homeItems','day','itemDate'] )
  },

    mounted(){
      this.$store.dispatch('getOne');

      console.log('yyy',this.home.post_date)


    },
  data () {
    return {
        isShow:true,
        // backgroundImage: url(home.img_url),

    }
  },
  methods:{
    gotolink(id,category,img_url){
      this.$router.push({path:'/details',query:{id:id,category:category,img_url:img_url}})
     },
      goone(){
          this.$router.push({path:'/one'})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    margin-top: 50px;

  }
  a{
    text-decoration: none;
  }
  .home-img-box{
    position: relative;
    height:616px;
    /*width: 750px;*/
    /*background:rgba(0,0,0,0.5);*/
    /*background-image: url(home.img_url);*/

    text-align: center;
    overflow: hidden;
    text-align: center;
    z-index: 1000;
  }
  .home-img-boxbg{
    position: absolute;
    top: 0;
    background: rgba(0,0,0,.3);
    height:616px;
    /*width: 750px;*/
    /*background:rgba(0,0,0,0.5);*/


  width: 100%;
    z-index: 10;
  }
 .home-img-box img{
  position: absolute;
   left: -284px;
   /*width: 100%;*/
   height: 100%;
   display: block;

  }
  .home-text-box{
    position: absolute;
   bottom: 50px;
    z-index: 100;
  }
  .home-text-box p{
    margin: 0 20px;
    color: white;
    text-align: left;
  }
  .day{

    font-size: 48px;
    line-height: 48px;

    font-family: Serif;

  }
  .month{

    font-size: 19px;
  }
  .content-short{

    line-height: 26px;
    max-height: 78px;
    margin-top: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .span-angle-down{
    display: block;
  }
  .span-angle-down i{
    width: 23px;
    height: 12px;
  font-size: 20px;
    color: #fff;
position: absolute;
    left: 40%;
  }
  .home-text{
    width: 100%;
    margin-top: 20px;
  }
  .home-text div{
    margin-bottom: 70px;
  }
  .home-text p{
    margin: 0 20px;

  }
  .home-link{
    text-decoration: none;
    font-weight: normal;
    color: #38c;
  }
  .aticle-link{

  }
  .aticle-auther{
    padding: 0 20px;

  }
  .aticle-content i{
    display: block;
    line-height: 26px;
    font-size: 16px;
  }
  .aticle-title{
    color: black;
    font-size: 28px;
    margin: 94px 20px 0 20px;
    font-weight: bold;
    line-height: 1.3;
  }
  .aticle-more a{
    color: #38c;
  }
  .home-more{
  font-size: 16px;
  margin: .5em 0;
  padding: .7em 1em;
  display: block;
  position: relative;
  text-align: center;
  border:1px solid #ddd;
  border-radius:20px;
  background-color: #f6f6f6;
  color: #333;
  cursor: pointer;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  }
  .fa{
    margin: 10px;
  }
  .bottom{
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
  }
  .bottom-link{
    display: inline-block;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
  }
  .bottom-link img{
    float: left;
  }
  .bottom-hu{
    float: left;
    height: 20px;
    font-size: 18px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
    color: #939393;
  }
</style>
