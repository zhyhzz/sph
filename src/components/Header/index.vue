<template>
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p>
                        <span>请</span>
                        <!-- 声明式导航:务必要有to属性 -->
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register" class="register">免费注册</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <a href="###">我的订单</a>
                    <a href="###">我的购物车</a>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
              <router-link class="logo" to="/home">
                <img src="./images/logo.png" alt="">
              </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete"
                     class="input-error input-xxlarge"
                     v-model="keyword"
                      />
                    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name : "",
        data() {
          return {
            keyword: ''
          }
        },
        methods: {
          //搜索按钮的回调函数：需要向search路由进行跳转
          goSearch() {
            //路由传递参数
            //第一种：字符串形式
            // this.$router.push('/search' + this.keywords + "?k=" + this.keywords.toUpperCase())
            //第二种：模版字符串
            // this.$router.push(`/search/${this.keywords}?k=${this.keywords.toUpperCase()}`)
            //第三种：对象
            // this.$router.push(name:"research", params: {keywords: this.keywords}, query: {k: this.keywords.toUpperCase()});
            //Q1.路由传递参数（对象写法）path是否可以结合params参数一起使用
            //A:路由跳转传参的时候，对象的写法可以是name、path形式，但path不能和params一起使用
            //Q2.如何指定params参数可传可不传
            //A:配置路由的时候，占位了params参数，但是路由路转的时候就不传递，路径会出现问题

            // this:当前组件实例（search）
            //this.$router属性：当前这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，由
            //组件实例添加$router|$route属性
            //push:VueRouter类的一个实例
            // function VueRouter() {}
            // VueRouter.prototype.push = function() {}
            // let $router = new VueRouter();
          }
        }
    }
</script>

<style scoped>
 .header > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
  }
  .header > .top .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header > .top .container .loginList {
    float: left;
  }
 .header > .top .container .loginList p {
    float: left;
    margin-right: 10px;
  }
   .header > .top .container .loginList p .register {
    border-left: 1px solid #b3aeae;
    padding: 0 5px;
    margin-left: 5px;
  }
.header > .top .container .typeList {
    float: right;
  }
  .header > .top .container .typeList a {
    padding: 0 10px;
  }
 .header > .top .container .typeList a + a {
    border-left: 1px solid #b3aeae;
  }
 .header > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header > .bottom .logoArea {
    float: left;
  }
  .header > .bottom .logoArea .logo img {
    width: 175px;
    margin: 25px 45px;
  }
  .header > .bottom .searchArea {
    float: right;
    margin-top: 35px;
  }
   .header > .bottom .searchArea .searchForm {
    overflow: hidden;
  }
   .header > .bottom .searchArea .searchForm input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
    float: left;
  }
   .header > .bottom .searchArea .searchForm input:focus {
    outline: none;
  }
  .header > .bottom .searchArea .searchForm button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    float: left;
    cursor: pointer;
  }
   .header > .bottom .searchArea .searchForm button:focus {
    outline: none;
  }
</style>