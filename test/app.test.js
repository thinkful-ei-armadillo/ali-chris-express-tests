'use strict'; 

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
        expect(res.body).includes({'highest': 's'});
        expect(res.body).includes({'average':5});
      });
  });

  it('should return 400 status when no query string present', () => {
    return request(app)
      .get('/frequency')
      .query({s:''})
      .expect(400);
  }); 

  it('should return values if numbers are sent in', () =>{
    return request(app)
      .get('/frequency')
      .query({s: 55555 })
      .expect(200)
      .then(res => 
        expect(res.body).includes({'highest': '5'})); 
  });
  
}); 
