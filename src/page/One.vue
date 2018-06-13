<template>
  <div id="one" style="background:#f6f6f6">
    <ul class="pic_box">
      <li class="card" v-for="i in Oneitems" :key="i.id">
        <Story :showData="i"></Story>
      </li>
    </ul>
  </div>
</template>

<script>
import Story from '../components/Story';
// import { mapMutations,mapState } from 'vuex';
import axios from 'axios';
export default {
  name: 'One',
  components: { Story },
  computed: {
    // ...mapState( ['Oneitems'] )
  },
  methods: {
    
  },
  mounted(){
    // console.log(this.$store);
    let self = this;
    let url = 'http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82';
    axios.get( url ).then(function( data ){
        self.Oneitems = [...data.data.data.content_list];
        // res( data );
        // console.log( state.Oneitems );
        
        // commit( '' )
    }).catch(function( err ){
        console.log( err );
    });
    // this.$store.dispatch('getOne')
  },
  data(){
    return {
      Oneitems: []
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

