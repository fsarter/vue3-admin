const router = require('./router');
const Koa = require('koa');
const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log('Koa server running at port 3001');
});
