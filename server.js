const express = require("express");
const next = require("next");
const vhost = require("vhost");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.prepare().then(() => {
  const mainServer = express();
  const userServer = express();
  const adminServer = express();
  const DB = process.env.MONGO_DB;
  try {
    mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (e) {
    console.log(e);
  }
  adminServer.get("/", (req, res) => {
    return app.render(req, res, "/admin", req.query);
  });
  adminServer.get("/*", (req, res) => {
    return app.render(req, res, `/admin${req.path}`, req.query);
  });

  adminServer.all("*", (req, res) => {
    return handle(req, res);
  });

  userServer.get("/", (req, res) => {
    return app.render(req, res, "/member", req.query);
  });
  userServer.get("/*", (req, res) => {
    return app.render(req, res, `/member${req.path}`, req.query);
  });
  userServer.all("*", (req, res) => {
    return handle(req, res);
  });

  mainServer.use(vhost(`admin.localhost`, adminServer));
  mainServer.use(vhost(`localhost`, userServer));
  mainServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
