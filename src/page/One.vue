<template>
  <div id="one" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in oneItems" :key="i.id" @click="goDetail">
        <Story :showData="i"></Story>
      </li>
    </ul>
    <JiaZai></JiaZai>
  </div>
</template>

<script>
import Story from '../components/Story';
import JiaZai from '../components/JiaZai'
import { mapState } from 'vuex';
export default {
  name: 'One',
  components: { Story,JiaZai },
  computed: {
    ...mapState( ['oneItems'] )
  },
  mounted(){
    //执行获取数据的函数
    this.$store.dispatch('getOne');
    let self = this;
    window.onscroll = function( e ){
      //滚动条的高度
      let sH = document.documentElement.clientHeight;
      //滑动de的高度
      let sT = document.documentElement.scrollTop;
      //文档的高度
      let dH = document.body.scrollHeight;
      // console.log(sH,sT,dH);
      //判断 如果 sH+sT == dH 加载数据
      if( sT+sH > dH ){
        // self.$store.dispatch( 'getOne' );
        
      }

    }
  },
  beforeRouteLeave( to,from,next ){
    window.onscroll = null;
    next()
  },
  methods:{
      goDetail(){
          this.$router.push({path:'/details'})
      },
  }
}
</script>

<style scoped>
  .pic_box{
    margin-top: 54px;
  }
  .pic_box .card{
    text-align: center;
    padding: 25px 0;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
</style>

