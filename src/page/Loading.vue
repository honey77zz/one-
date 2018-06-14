<template>
    <div id="loading" >
       <div class="loading-box">
         <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        props: ['isShow']
    }
</script>

<style scoped>
  #loading{
    width: 100%;
    height: 100%;
    position: absolute;
    /*display: none;*/
    /*z-index: 500;*/
    /*background-color: rgba(0,0,0,.5);*/
  }
  .loading-box{
      margin: 0 auto;
      position: absolute;
      bottom:50%;
      left: 50%;
      transform: translateX(-50%);
  }
  .loading-box i{
     color:green;
     font-size: 50px;
  }
</style>
