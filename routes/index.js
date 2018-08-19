const router = require('koa-router')()

router.get('/', async (ctx, next) => {

  await ctx.render('index', {
    title: '123131'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
  const data1 = await students.find()
  ctx.body = data1
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
