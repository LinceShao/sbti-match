const Koa = require("koa");
const serve = require("koa-static");
const path = require("path");

const app = new Koa();
app.use(serve(path.join(__dirname, "public")));

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`SBTI Match running on port ${port}`);
});
