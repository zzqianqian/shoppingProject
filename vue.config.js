module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      "/javaApi": {
        target: "http://192.168.0.190:9000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/javaApi": "/"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/css/_variable.scss";`
      }
      //   postcss: {
      //     plugins: [
      //       require("postcss-px2rem")({
      //         remUnit: 37.5
      //       })
      //     ]
      //   }
    }
  }
};
