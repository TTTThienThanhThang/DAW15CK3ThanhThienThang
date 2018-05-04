var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Router
var indexRouter = require('./routes/index');
const login = require('./routes/login');
const dangki = require('./routes/dangki')
const chitiet = require('./routes/chitiet')
const doimatkhau = require('./routes/doimatkhau')
const daugiacuatui = require('./routes/daugiacuatui')
const thongtinuser = require('./routes/thongtinuser')

var app = express();

//Handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', login);
app.use('/dangki', dangki);
app.use('/chitiet', chitiet);
app.use('/daugiacuatui', daugiacuatui);
app.use('/doimatkhau', doimatkhau);
app.use('/thongtinuser', thongtinuser);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;