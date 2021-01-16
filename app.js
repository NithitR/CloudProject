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

app.listen(4000, () => console.log('Example app listening on port 4000!'));