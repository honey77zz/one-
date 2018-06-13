<template>
  <div id="nav">
    <ul class="top_nav">
      <li class="one" @click.stop="goone">图文</li>
      <li @click.stop="goarticle">阅读</li>
      <li @click.stop="gomusic">音乐</li>
      <li @click.stop="gomovie">影视</li>
      <li @click.stop="gologin">登录/注册</li>
      <li @click.stop="goabout">关于</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Nav',
    // liShow:false,
    methods:{
      after(){
          this.$emit("change")
      },
        goone(){
            this.$router.push({path:'/one'})
            this.after()
        },
        goarticle(){
            this.$router.push({path:'/article'})
            this.after()
        },
        gomusic(){
            this.$router.push({path:'/music'})
            this.after()
        },
        gomovie(){
            this.$router.push({path:'/movie'})
            this.after()
        },
        gologin(){
            this.$router.push({path:'/login'})
            this.after()
        },
        goabout(){
            this.$router.push({path:'/about'})
            this.after()
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
  .top_nav li:hover{
    background: #1aadef;
  }

</style>

