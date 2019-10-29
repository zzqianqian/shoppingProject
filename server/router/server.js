// const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()

// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = 'HOME page'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

module.exports.routers=router;
