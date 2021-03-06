const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

function routes(app) {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
}

module.exports = routes;
