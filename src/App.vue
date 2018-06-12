<template>
  <div id="app">
    <div class="topNav">
      <i class="fa fa-bars" aria-hidden="true"></i>
      <span>一个图文</span>
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <Nav></Nav>
    <Search></Search>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Search from '@/components/Search';
export default {
  name: 'App',
  components: { Nav,Search }
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
