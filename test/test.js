var assert = require('assert');
var chai = require('chai').should();
const request = require('supertest');
const { app, resetOffices}  = require('../app2.js');

describe('Offices', function() {
    const body = {
        address: 'Via del monte',
        timetable: ['10.00', '10.15', '10.30', '10.45'],
    }
  
    it('read all offices ', async () => {
        const {status, body} = await request(app).get('/offices').set('Accept', 'application/json');
        status.should.equal(200); 
        body.should.have.property('length'); 
    });
    describe('insert a new office', () => {
        it('insert a new office success', async () => {
            const {status} = await request(app).post('/offices').set('Accept', 'application/json').send(body);
            status.should.equal(201); 
            resetOffices();
        });
        it('insert a new office unsuccess missing timetable', async () => {
            const {status} = await request(app).post('/offices').set('Accept', 'application/json').send({address: 'Via del monte 1'});
            status.should.equal(400); 
        });
        it('insert a new office unsuccess missing address ', async () => {
            const {status} = await request(app).post('/offices').set('Accept', 'application/json').send({timetable: ['10.30', '10.45']});
            status.should.equal(400); 
        });
    });
 
    
    it('read a office', async () => {
        const {body: office1} = await request(app).post('/offices').set('Accept', 'application/json').send(body);
        // dentro il body il nuovo ufficio creato
        const {status, body: officeByGet} = await request(app).get(`/offices/${office1.id}`).set('Accept', 'application/json');
        status.should.equal(200);
        officeByGet.should.have.property('address', office1.address);
        resetOffices();
    });
    it('delete a office', async () => {
        const {body: office1} = await request(app).post('/offices').set('Accept', 'application/json').send(body);
        const {status} = await request(app).delete(`/offices/${office1.id}`);
        status.should.equal(200);
        const {status: statusDeleted} = await request(app).get(`/offices/${office1.id}`).set('Accept', 'application/json');
        statusDeleted.should.equal(404);
        const {body: allOffices} = await request(app).get('/offices').set('Accept', 'application/json');
        allOffices.should.have.property('length', 0);
    });

    describe('insert a new reservation', () => {
        var office1;
        beforeEach(async () => {
            const {body: office} = await request(app).post('/offices').set('Accept', 'application/json').send(body);
            office1 = office;
        })
        afterEach(resetOffices)
        
        it('insert a new reservation success', async () => {
            const {status, body: office} = await request(app).post(`/offices/${office1.id}/reservations`).set('Accept', 'application/json')
                .send({name: 'Carlo Leonardi', time: '10.00'});
            status.should.equal(201);
        });

        it('insert a new reservation unsuccess', async () => {
            let {status, body: b} = await request(app).post(`/offices/${office1.id}/reservations`).set('Accept', 'application/json')
                .send({name: 'Carlo Leonardi', time: '10.10'});
            status.should.equal(400);
            console.log('response:', b.message)
        });
    })

 

});

