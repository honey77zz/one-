<template>
  <div id="nav">
    <ul class="top_nav">
      <li class="one">图文</li>
      <li>阅读</li>
      <li>音乐</li>
      <li>影视</li>
      <li>登录/注册</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Nav'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.top_nav{
  height: 100%;
  width: 50%;
  background: #fff;
  position: absolute;
  left: -52%;
  box-shadow: 0 1px 8px #808080;
}
.top_nav li{
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #333;
  text-align: center;
  padding: 10px 0;
}
.top_nav .one{
  margin-top: 20px;
}
.top_nav li:hover{
  background: #1aadef;
}
</style>

