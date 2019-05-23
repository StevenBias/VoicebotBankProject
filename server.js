var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var agent = require('./public/js/agent.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var server = require('http').Server(app);
//Load socket.io
var io = require('socket.io')(server);
var port = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

io.on('connection', function (socket) {
//  socket.emit('news', { hello: 'world' });
  socket.on('message', function (data) {
    console.log(data);
  });
	socket.on('sendIntent', function(query){
		var resp;
		agent(query).then(function(data){
			console.log(data[0]);
			console.log('test bot '+ JSON.stringify(data[0]));
			socket.emit('resDialogflow', data[0]);
			});
	});
});

server.listen(port);
module.exports = app;
