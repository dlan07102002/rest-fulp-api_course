require('dotenv').config()
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var usersRouter = require("./routes/users");
const mongoose = require('mongoose');

const connectDb = ()=>{
  mongoose
  // k1GTYLZw248ZdC6x
    .connect(
      'mongodb://duclanweb:k1GTYLZw248ZdC6x@ac-gfkiu5j-shard-00-00.8zutfoo.mongodb.net:27017,ac-gfkiu5j-shard-00-01.8zutfoo.mongodb.net:27017,ac-gfkiu5j-shard-00-02.8zutfoo.mongodb.net:27017/?ssl=true&replicaSet=atlas-mmregm-shard-0&authSource=admin&retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log('connect success');
    })
    .catch((err)=>{
      console.log(err)
    })
  ;
}
connectDb();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json()); //application/json
app.use(express.urlencoded({ extended: false })); //application/x-www-urlencoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);


//app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//Import module
// const { getMessage } = require("./modules/functions");
// getMessage();

const {APP_NAME} = process.env;

module.exports = app;
