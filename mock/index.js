const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

// post请求提交数据时 解析request的body
// const bodyParser = require('koa-bodyparser');
// app.use(bodyParser()); 

// 允许跨域设置
const cors = require('koa-cors');
app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 500,
    credentials: true,  //cookie
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

const handler = async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
};

const ssr = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = [
    'Koa 的中间件通过一种更加传统（您也许会很熟悉）的方式进行级联，摒弃了以往 node 频繁的回调函数造成的复杂代码逻辑。',
    '然而，使用异步函数，我们可以实现"真正" 的中间件。',
    '与之不同，当执行到 yield next 语句时，Koa 暂停了该中间件，继续执行下一个符合请求的中间件，然后控制权再逐级返回给上层中间件。'
  ];
}

app.use(handler);
app.use(route.get('/ssr/api', ssr))

app.listen(8080)