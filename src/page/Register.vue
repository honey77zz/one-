<template>
    <div id="register">
      <img src="../images/login_head.png" alt="">
      <div class="login-box">
        <div class="user">
          <span class="fa-user-spanl"><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
          <input type='text' ref="input1" name="username" id="username" placeholder="请输入手机号码" />
          <!--<span class="fa-user-spanr"><i class="fa fa-angle-down" aria-hidden="true"></i></span>-->
        </div>
        <div class="password">
          <span class="fa-user-spanl"><i class="fa fa-lock" aria-hidden="true"></i></span>
          <input type='password'  ref="input2" name="pwd" id="pwd" placeholder="请输入密码" />
          <!--<span class="fa-user-spanr"><i class="fa fa-eye" aria-hidden="true"></i></span>-->
        </div>
        <!--<span  class="login-fgo"><a  class="login-fg" href="">忘记密码？</a></span>-->
        <div class="login-log">
          <input type="button" name="btn" id="btn" value="注册"  @click="add1" />
          <!--<input type="button" name="btn" id="btn2" value="注册"  v-show="isShow"/>-->
        </div>
        <!--<p class="login-fgo"> <a href="" class="login-fg1">还有账号？立即注册</a></p>-->
        <p class="login-fgo fgo"><a href="" class="login-fg2">注册即代表您同意用户服务协议</a></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register",

      data(){
          return{
            isShow:true
          }
      },
        methods:{
            add1(){
                let uname =this.$refs.input1.value
                let upwd =this.$refs.input2.value
                let  myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                let mypwd=/^\d{6}$/
                console.log(uname);
                console.log(upwd);
                if(myreg.test(uname) && mypwd.test(upwd)){
                    document.cookie='name='+uname
                    document.cookie='pwd='+upwd
                    this.$router.push({path:'/login'})
                }

            }
        }
    }

</script>

<style scoped>

  #register{
    margin-top: 50px;
  }

  #register img{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  .login-box{
    text-align: center;

  }
  .login-box input{
    border: 0;
    text-indent: 2em;
    font-size: 16px;
    color: #000;
    flex: 1;
    outline: none;

  }
  .login-box i{
    font-size: 16px;
  }
  .login-box .user{
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid gainsboro;
    margin: 15px  18% 0;
    display: flex;
  }
  .fa-user-spanl{
    position: absolute;
    left: 5px;
  }
  .login-box .password{
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid gainsboro;
    margin:  0 18%;
    display: flex;
  }
  .fa-user-spanr{
    position: absolute;
    right: 5px;
  }
  .login-fgo{
    position: relative;
     display: block;
    margin:  10px 18%;
    line-height: 40px;
    height: 40px;
  }
  .login-fg{
    display: block;
    font-size: 16px;
    position: absolute;
    left: 0;
    color: #2e2e2e;
  }
  .login-log{
    margin: 50px 18% 0;
  }
  .login-log input{
    text-align: center;
    text-indent:0;
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 18px;
    color: #fff;
  }
  .login-fg2{
    display: block;
    font-size: 16px;
    position: absolute;
    left: 0;
    color: #2f2f2f;
    line-height: 30px;
  }
  .login-fg1{
    display: block;
    font-size: 16px;
    position: absolute;
    left: 0;
    color: #b7b7b7;
  }
  .fgo{
    margin-top: 60px;
  }
</style>
