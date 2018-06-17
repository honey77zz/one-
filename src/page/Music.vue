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
import { mapState } from 'vuex';
export default{
  name: 'Music',
  components: { Ge },
  computed: {
    ...mapState( ['geItems'] )
  },
  mounted(){

    this.$store.dispatch('getOne').then((data) =>{});

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

