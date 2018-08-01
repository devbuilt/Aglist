var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userContact = require('./routes/contact');
var userSignup = require('./routes/sign-up');
var aboutRouter = require('./routes/about');
var privacyRouter =require('./routes/privacypolicy');
var disclaimerRouter = require('./routes/disclaimer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', userContact)
app.use('/sign-up', userSignup);
app.use('/about', aboutRouter);
app.use('/privacypolicy', privacyRouter);
app.use('/disclaimer', disclaimerRouter);


// App post
app.post('/about', function(req, res, next){
    var api_key = '';
    var domain = '';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
      from: req.body.userEmail + ' ' + '',
      to: 'email@email.com',
      name: req.body.body,
      last: req.body.body,
      subject: req.body.userSubject,
      text: req.body.body,
      questions:req.body.body,
      budget:req.body.body,
      start:req.body.body,
      finish:req.body.body
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
      if(!error)
          res.render('index');
      else
          res.send('Mail not sent');
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
