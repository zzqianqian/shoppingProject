<template>
  <div class="home">
    <header class="header">nodejs</header>
    <div class="middle-body">
      <div class="home-left">
        <ul>
          <li><a href="#">0~500</a></li>
          <li><a href="#">500~1000</a></li>
          <li><a href="#">1000~2000</a></li>
          <li><a href="#">2000~3000</a></li>
        </ul>
      </div>
      <div class="home-content">
        <div v-for="(item ,index) in priceList" class="home-content-child">
          <img src="../../assets/img/logo.png" alt="">
          <p>价钱：{{item.price}}</p>
          <p>名称：{{item.name}}</p>
        </div>
      </div>
      <div class="home-right">

      </div>
    </div>
    <footer class="footer">Dont`t copy me!</footer>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              priceList:[
                  {price:186.00,name:"衬衫",code:0},
                  {price:205.00,name:"毛衣",code:1},
                  {price:3020.00,name:"休闲裤",code:2},
                  {price:2650.00,name:"羽绒服",code:3}
              ]
          }
      },
      created() {
          this.getUserData();
      },
      methods:{
          getUserData(){
              this.api.user.home().then(res=>{
                  console.log(res)
              }).catch(error=>{
                  console.log(err)
              })
          }
      }
  }
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  .header{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height:60px;

  }
  .middle-body{
    height:calc(100vh - 120px);
    display: flex;
    .home-left{
      padding: 20px;
      width: 20%;
      li{
        line-height: 40px;
        list-style: none;
      }
    }
    .home-content{
      display: flex;
      width: 60%;
      flex-wrap:wrap;
      .home-content-child{
        flex-wrap:wrap;
        margin-right: 20px;
        margin-bottom: 20px;
        border: 1px solid #e7e7e7;
        height: 270px;
        cursor: pointer;
        p{
          padding-left: 15px;
          line-height: 30px;
          font-size: 14px;
        }
      }
    }
    .home-right{
      width: 20%;
    }
  }
  .footer{
    font-size: 14px;
    text-align: right;
    line-height:60px;
  }
}
</style>
