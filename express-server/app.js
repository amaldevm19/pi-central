
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars');
const hbshelpers = require('handlebars-helpers')();
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const cors = require('cors');


const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const testRouter = require('./routes/test');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  helpers: hbshelpers,
  defaultLayout: 'main', 
  extname: '.hbs', 
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/test', testRouter);
app.use('/api/v1', apiRouter);


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
