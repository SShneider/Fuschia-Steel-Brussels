
const {expect} = require('chai')
const app = require('./usersApi.js')
const request = require('supertest')

describe('Entry test', ()=>{
    it('Works', async ()=>{
        await request(app).get('/api/users').expect(200)
    })
})
