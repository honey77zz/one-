<template>
  <div id="one" style="background:#f6f6f6">
    <ul class="pic_box" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
  infinite-scroll-distance="5" infinite-scroll-immediate-check="true">
      <li class="card" v-for="i in oneItems" :key="i.id" @click="goDetail(i.content_id,i.category,i.img_url)">
        <Story :showData="i"></Story>
      </li>
      <load></load>
    </ul>
  </div>
</template>

<script>
import Story from '../components/Story';
import load from '../components/JiaZai'
import { mapState } from 'vuex';
export default {
  name: 'One',
  components: { Story,load },
  computed: {
    ...mapState( ['oneItems'] )
  },
  mounted(){
    //执行获取数据的函数
    this.$store.dispatch('getOne');
    //console.log('22333',this.$store.state.oneItems)
    console.log('hhh',this.$store.state.oneItems)

  },
  methods:{
      goDetail(id,category,img_url){
          //console.log(data)
          this.$router.push({path:'/details',query:{id:id,category:category,img_url:img_url}})
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          this.$store.dispatch('getOne');
          this.loading = false;
        }, 2500);
      }
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

