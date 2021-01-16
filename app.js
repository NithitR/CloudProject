let express = require('express');
let app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index', {user: 'FOO'});
})

app.get('/analysis', function (req, res) {
    res.render('main', {user: 'FOO'});
})

app.get('/export', function (req, res) {
    res.render('export', {user: 'FOO'});
})
let port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);
app.listen(port, () => console.log("Example app listening on port " + port));

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}