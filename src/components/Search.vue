<template>
  <div id="search">
    <div class="search_top"v-show="show">
      <input type="text" placeholder="输入作者或标题关键字">
      <i class="fa fa-search" aria-hidden="true"></i>
      <i class="fa fa-times" aria-hidden="true"  @click.stop="chengea"></i>
    </div>
    <div class="search_zhe"></div>
  </div>
</template>

<script>
  export default{
    name: 'Search',
      data(){
        return{
            show:true
        }
      },
    methods:{
    chengea(){
      this.show=!this.show
    }
}

  };

</script>

<style>
#search{
  position: fixed;
  height: 100%;
  top: 0;
  /*display: none;*/
  z-index: 5000;
}
.search_top{
  height: 54px;
  background: #fff;
  padding: 0 10px;
}
.search_top input{
  float: left;
  outline: none;
  border: 0;
  height: 54px;
  line-height: 54px;
  width: 270px;
  font-size: 14px;
  color: #333;
  padding-left: 5px;
}
.search_top .fa{
  float: left;
  font-size: 20px;
  width: 20px;
  padding: 0 10px;
  height: 54px;
  line-height: 54px;
}
.search_top .fa-search{
  color: #1aadef;
}
.search_zhe{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
</style>
