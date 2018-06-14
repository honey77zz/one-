<template>
  <div id="nav">
    <ul class="top_nav" @click="show =false">
      <li class="one" @click.stop="goone">{{title}}</li>
      <li @click.stop="goarticle">{{title1}}</li>
      <li @click.stop="gomusic">{{title2}}</li>
      <li @click.stop="gomovie">{{title3}}</li>
      <li @click.stop="gologin">{{title4}}/注册</li>
      <li @click.stop="goabout">{{title5}}</li>
    </ul>
  </div>
</template>

<script>

export default{
  name: 'Nav',
    // liShow:false,
    data(){
      return{
        // title:null
          title:'图文',
          title1:'阅读',
          title2:'音乐',
          title3:'影视',
          title4:'登录',
          title5:'关于',


      }
    },
    methods:{
      after(){
          this.$emit("change")
      },
        goone(){
          // title:'tuwen'
          //   this.$router.push({path:'/one/'})
            this.$router.push({name:'One'});
            this.after()
            this.$emit("back",this.title)
        },
        goarticle(){
            this.$router.push({path:'/article'})
            this.after()
            this.$emit("back",this.title1)
        },
        gomusic(){
            this.$router.push({path:'/music'})
            this.after()
            this.$emit("back",this.title2)
        },
        gomovie(){
            this.$router.push({path:'/movie'})
            this.after()
            this.$emit("back",this.title3)
        },
        gologin(){
            this.$router.push({path:'/login'})
            this.after()
            this.$emit("back",this.title4)
        },
        goabout(){
            this.$router.push({path:'/about'})
            this.after()
            this.$emit("back",this.title5)
        },
    }
}
</script>

<style>
  #nav{
    /*height: 100rem;*/
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 188px;
    z-index: 2000;
  }

  .top_nav{
    height:100%;
    width: 188px;
    background: #fff;
    padding-top: 30px;
     /*position: absolute;*/
     /*top: 54px;*/
    /*float: left;*/
    /*left: 0;*/
    /* display: inline; */
    box-shadow: 0 1px 8px #808080;
    z-index: 10008;
  }
  .top_nav li{
    /* height: 100%; */
    line-height: 30px;
    font-size: 16px;
    color: #333;
    text-align: center;
    padding: 10px 0;
  }
  /* .top_nav .one{
    margin-top: 20px;
  } */
  .top_nav li:hover{
    background: #1aadef;
  }

</style>

