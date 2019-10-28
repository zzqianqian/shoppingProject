<template>
  <div class="css">
    css
    <!-- flex 布局start -->
    <h3>flex 布局:</h3>
    <div class="content">
      <div>
        <div class="top">11</div>
        <div class="bot">22</div>
      </div>
      <div>right</div>
    </div>
    <!-- flex 布局 end -->

    <!-- 定位 start-->
    <div class="location">
      <div>我是绝对定位</div>
    </div>
    <!-- 定位 end-->

    <!-- vh start -->
    <div class="vh">
      <div class="top"></div>
      <div class="bom"></div>
    </div>
    <!-- vh end-->

    <div class="media"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.testPost();
  },
  methods: {
    async testPost() {
      let res = await this.api.user.testApi({
        width: 200,
        height: 750,
        name: "1212"
      });
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.css {
  font-size: 16px;
  // flex布局
  h2 {
    color: $fontColor;
  }
  .content {
    display: flex;
    width: 400px;
    height: 200px;
    border: 1px solid darkcyan;
    padding: 20px;
    align-items: center;
    justify-content: center;
    & > div {
      height: 180px;
      flex: 1;
      border: 1px solid blueviolet;
      display: flex;
      flex-direction: column;
      //   align-items: center;
      justify-content: center;
      .top {
        width: 180px;
        height: 50px;
        border: 1px solid darkgray;
      }
      .bot {
        width: 180px;
        height: 50px;
        border: 1px solid darkkhaki;
      }
    }
  }

  //定位
  .location {
    margin-top: 20px;
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid darkkhaki;
    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: darkgray;
    }
  }

  //vh模块
  .vh {
    position: fixed;
    height: 100vh;
    width: 400px;
    right: 200px;
    top: 0;
    border: 1px solid darkgreen;
    .top {
      width: 100%;
      height: 300px;
      background: darkgoldenrod;
    }
    .bom {
      background: saddlebrown;
      width: 100%;
      height: calc(100vh - 300px);
    }
  }

  //媒体查询

  .media {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 1000px) {
    .media {
      background-color: darkcyan;
    }
  }
}
</style>
