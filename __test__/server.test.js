'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server Test', () => {
    
    it('should return 200', async () => {
        const response = await request.get('/person?name=ahmad');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });

    it(' bad route', async () => {
        const response = await request.get('/abc');
        expect(response.status).toBe(404);
    });


    it(' bad method', async () => {
        const response = await request.post('/person');
        expect(response.status).toBe(404);
    });


    it('return 500', async () => {
        const response = await request.get('/person?name');
        expect(response.status).toEqual(500);
    });

});