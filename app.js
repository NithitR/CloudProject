let express = require('express');
let app = express();
let aws = require('./aws')
let lgs_list = require('./config/lga_vic.json')
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', async function (req, res) {
    // let embedUrl = aws.getQuickSightUrl();
    let embedUrl = await aws.getUrl();
    console.log(embedUrl);
    res.render('main', {embedUrl: embedUrl});
})

app.get('/export', function (req, res) {
    res.render('export', {user: 'FOO'});
})

app.get('/map', async function (req, res) {
    let result = await aws.createQuery(`SELECT accident_no,
                                               latitude,
                                               longitude,
                                               severity,
                                               lga_name_all,
                                               road_geometry,
                                               accident_type
                                        FROM "data"."crashes_record" limit 10`);
    console.log(result.Items)
    res.render('map', {data: result.Items,lga_list:lgs_list.lga});
})



let port = normalizePort(process.env.PORT || '3000');
app.listen(port, () => console.log(" app listening on port " + port));

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

// https://node-express-dev22.us-east-1.elasticbeanstalk.com/