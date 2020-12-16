var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var users = [{
    name: 'Carlo',
    surname: 'Leonardi'
}, {
    name: 'Mark',
    surname: 'Zuckermberg'
}];

var checkIndex = (req, res, next) => { // middleware
    var index = Number(req.params.index);
    if (isNaN(index)) {
        res.status(400).json({message: 'index is not number'});
    } else if (index < 0) {
        res.status(400).json({message: 'index must be positive'});
    } else if (index >= users.length) {
        res.status(404).json({message: 'user not found'});
    } else {
        next();
    }
}
var x= (req, res) => {
    // req.query.name
    res.json(users)
}
app.get('/users', x)// --> x(req, rea)
app.get('/users/:index', checkIndex, (req, res) => {
    var index = Number(req.params.index);
    console.log('index:', index);
    console.log('typeof index:', typeof index);
    res.json(users[Number(req.params.index)])
})

app.post('/users', (req, res) => {
    var user = {name: req.body.name, surname: req.body.surname};
    users.push(user)
    res.json(user)
})
app.put('/users/:index', checkIndex, function(req, res){
    users[Number(req.params.index)].name = req.body.name;
    users[Number(req.params.index)].surname = req.body.surname;
    res.json(users[Number(req.params.index)])
})

app.get('/xxx', 
    (req, res, next) => {
        console.log('salto 1');
        next();}, 
    (req, res, next) => {
        console.log('salto 2');
        next();}, 
    (req, res, next) => {
        res.json({message: 'fine dei salti'})});


app.listen(3001);
module.exports = app;