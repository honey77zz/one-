<template>
  <div id="article" style="background:#f6f6f6">
    <ul class="article_box">
      <li class="article_card" v-for="i in items" :key="i.id">
        <Card :articleData="i"></Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/Card';
import axios from 'axios';

export default{
  name: 'Article',
  components: {
    Card
  },
  mounted(){
    let self = this;
    let url = 'http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82';
    axios.get( url ).then(function( data ){
      self.items = [...data.data.data.content_list];
    }).catch(function( err ){
      console.log( err );
    });
  },
  data(){
    return {
      items: []
    }
  }
}
</script>

<style scoped>
  .article_box{
    margin-top: 54px;
  }
  .article_card{
    padding: 0 20px;
    padding-bottom: 25px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
  
</style>

