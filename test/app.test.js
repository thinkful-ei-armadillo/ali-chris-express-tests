const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /frequency tests', () => {
    it('should return highest frequency letter', () => {
        return request(app)
        .get('/frequency')
        .query({s: 'sssss'})
        .expect(200)
        .then(res => {
            expect(res.body).includes({"highest": "s"})
        })
    })
})


