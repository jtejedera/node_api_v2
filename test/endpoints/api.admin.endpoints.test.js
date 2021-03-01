import {expect} from 'chai';
import app from '../../server'
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

var token = null

describe('Login',() =>{
  it('should get token by authentication header', (done) => {
    chai.request(app)
    .post('/api/v1/login')
    .send({client_id:"dare", client_secret: 's3cr3t'})
    .end( (err, res ) => {
      expect(res.body).to.have.property('token');
      res.body.token?token=res.body.token:null
      done();
    });
  });

});

describe('Get Client Data Endpoint ',() =>{
  it('should get all client data using auth headers', (done) => {
    chai.request(app)
    .get('/api/v1/clients')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.length > 0;
      done();
    });
  });
 });

describe('Get Policy List Endpoint',() =>{
  it('should get all policy data using auth headers', (done) => {
    chai.request(app)
    .get('/api/v1/policies')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.length > 0;
      done();
    });
  });
});