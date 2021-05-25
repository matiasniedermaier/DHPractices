var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var jwtValidation = require('./middlewares/jwtValidation');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
var actorsRouter = require('./routes/actors');
var apiActorsRouter = require('./routes/api/actors');
var apiGenresRouter = require('./routes/api/genres');
var apiMoviesRouter = require('./routes/api/movies');
var apiUsersRouter = require('./routes/api/users');

var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist'));
app.use(methodOverride('_method'));
app.use(jwtValidation);

// routes
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
app.use('/api/actors', apiActorsRouter);
app.use('/api/genres', apiGenresRouter);
app.use('/api/movies', apiMoviesRouter);
app.use('/api/users', apiUsersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
