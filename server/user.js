const Koa = require('koa')
const app = new Koa()
let router = require('./router/server.js')
console.log(router)
// 调用路由中间件
app.use(router.routers.routes())

app.listen(9000, ()=>{
    console.log('server is running at http://localhost:9000')
})