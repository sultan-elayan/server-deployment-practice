'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API Server', ()=> {

    // scenarios
    it('handles not found ', async () => {
        
        // add test
        const response = await request.get('/asd'); 
        expect(response.status).toEqual(404);
    });

    //callbacks ---> Promises (Promise.then() ) ----> Async/Await
    
    it('error while getting data', async () => {
        const response = await request.post('/error'); 
        expect(response.status).toEqual(500);
    });
    
    it('get data from /data ', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent 
    });
    
    it('/ route works', async () => {
        const response = await request.get('/'); 
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('hello world !!');
    });


});