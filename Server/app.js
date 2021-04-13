var express = require('express');
var dal = require('./dal/dataAccess');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bowlingController = require('./routes/bowling-controller');

var cors = require('cors')
var app = express()
    //app.set('view engine', 'html');
    //app.use(logger('dev'));
    //app.use(express.json());
    //app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dal.connectToData();


//app.use('/api/people', SwapiController); /// version 1
app.use('/api/bowling', bowlingController);
app.use('*', (req, res) => {
    res.json({ msg: 'route not avialble' })
});




// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(res);
});

module.exports = app;