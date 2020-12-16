var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var offices = [];

app.get('/offices', (_, res) => res.json(offices));

app.get('/offices/:id', ({params}, res) => {
    const {id} = params;
    const office = offices.find(({id: officeId}) => officeId === Number(id));
    if (office) return res.json(office);
    res.status(404).json({message: 'Office not found'})
});

app.post('/offices', ({body}, res) => {
    // address
    var {address, timetable} = body;
    if (!address) return res.status(400).json({message: 'Address is required'});
    if (!timetable) return res.status(400).json({message: 'Timetable is required'});
    var newObject = {
        address,
        timetable,
        reversations: [],
        id: Date.now()
    }
    offices.push(newObject)
    res.status(201).json(newObject);
});


app.delete('/offices/:id', ({params}, res) => {
    const {id} = params;
    const index = offices.findIndex(({id: officeId}) => officeId === Number(id));
    if (index >= 0) {
        offices.splice(index, 1);
        return res.status(200).json({message: 'Office deleted'})
    }
    res.status(404).json('Office not found');
});

app.post('/offices/:id/reservations', ({params, body: reservation}, res) => {
    const {id} = params;
    const {timetable, reversations} = offices.find(({id: officeId}) => officeId === Number(id));
    if (!timetable.find((item) => item === reservation.time)) {
        return res.status(400).json({message: `${reservation.time} is not included in ${JSON.stringify(timetable)}`});
    }
    reversations.push(reservation);
    res.status(201).json(reversations);
});


app.listen(3002);
exports.resetOffices = resetOffices  = () => {
    offices = [];
}

exports.app = app;
