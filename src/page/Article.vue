<template>
  <div id="article" style="background:#f6f6f6">
    <ul class="article_box">
      <li class="article_card" v-for="i in storyItems" :key="i.id">
        <Card :articleData="i"></Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/Card';
import { mapState } from 'vuex';
export default{
  name: 'Article',
  components: { Card },
  computed: {
    ...mapState( ['storyItems'] )
  },
  mounted(){
    this.$store.dispatch('getOne').then(function(data){
      // console.log( data ); //data  是拿回来的数组
    })
  }
}
</script>

<style scoped>
  .article_box{
    margin-top: 54px;
  }
  .article_card{
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }

</style>

