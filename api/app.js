const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// test
const testAPIRouter = require('./routes/testAPI');

// routes
const examinationsRouter = require('./routes/examinations');
const forageRouter = require('./routes/forage');
const globalMeasuresRouter = require('./routes/global-measures');
const penMeasuresRouter = require('./routes/pen-measures');
const penRouter = require('./routes/pen');
const pigsRouter = require('./routes/pigs');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', testAPIRouter);

// Our requests

// Examinations
app.use('/examinations', examinationsRouter);

// Forage
app.use('/forage', forageRouter);

// Global measures
app.use('/global-measures', globalMeasuresRouter);

// Pen measures
app.use('/pen-measures', penMeasuresRouter);

// Pen
app.use('/pen', penRouter);
app.use('/pen/:id', penRouter);
// Pigs
app.use('/pigs', pigsRouter);

//app.use('/');

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
