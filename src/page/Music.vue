<template>
  <div id="music" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in geItems" :key="i.id">
        <Ge :geData="i"></Ge>
      </li>
    </ul>
  </div>
</template>

<script>
import Ge from '../components/Ge';
import axios from 'axios';
export default{
  name: 'Music',
  components: {
    Ge
  },
  mounted(){
    // console.log(this.$store);
    let self = this;
    let url = 'http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82';
    axios.get( url ).then(function( data ){
        self.geItems = [...data.data.data.content_list];
    }).catch(function( err ){
        console.log( err );
    });
    // this.$store.dispatch('getOne')
  },
  data(){
    return {
      geItems: []
    }
  }
}
</script>

<style scoped>
  .pic_box{
    margin-top: 54px;
  }
  .card{
    padding-bottom: 25px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(230,230,230,.7);
    background: #fff;
  }
  
</style>

