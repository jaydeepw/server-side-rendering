var express = require('express');
var site = express();
var port = 3000;

site.set('view engine', 'pug');

site.get('/', function(req, res){
    res.render('index');
});

site.listen(port, () => console.log(`App listening on port ${port}`))