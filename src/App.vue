<template>
  <div id="app" @click="show =false">
    <!-- 顶部导航 -->
    <div class="topNav" >
      <i class="fa fa-bars" aria-hidden="true" @click.stop="change"></i>
      <span >一个{{title}}</span>
      <i class="fa fa-search" aria-hidden="true"  @click.stop="changea"></i>
    </div>
    <!-- 侧边导航栏 -->
    <transition name="slide-fade">
      <Nav v-if="show" @change="change" @back="ga"></Nav>
    </transition>
    <!-- 搜索框 -->
    <Search v-if="isshow"  ></Search>

    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Search from '@/components/Search';
// import axios from 'axios';
export default {
  name: 'App',


  components: { Nav,Search },
    // computed:mapState({
    //     iS: 'isShow'
    // }),
    data() {
        return {
            show: false,
            isshow:false,

            title:null

        };
    },
    methods:{
        change(){
          this.show = !this.show
        },
        changea(){
            this.isshow = !this.isshow
            // console.log(this.$router.query);
        },
        ga(data){
            console.log('qqqq',data);
            this.title=data

        },
        mounted(){

        },
    }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }

  .topNav{

    height: 54px;
    font-size: 14px;
    color: #333;
    position: fixed;
    top: 0;
    background: #fff;
    width: 100%;
    line-height: 54px;
    text-align: center;
    z-index: 1005;
  }
  .topNav .fa{
    font-size: 21px;
    line-height: 54px;
  }
  .topNav .fa-bars{
    float: left;
    margin-left: 10px;
  }
  .topNav .fa-search{
    float: right;
    margin-right: 10px;

  }
</style>
