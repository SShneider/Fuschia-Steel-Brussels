
const {expect} = require('chai')
const chai = require('chai')
const app = require('../../indexServer.js')
const chaiHttp = require('chai-http');
const { doesNotMatch } = require('assert');
chai.use(chaiHttp)

describe('Entry test', ()=>{
    it('Works', (done) => {     
        chai.request(app).get('/').then((res)=>{
                    expect(res).to.have.status(200);
                    done();
                })
        })    
    })
