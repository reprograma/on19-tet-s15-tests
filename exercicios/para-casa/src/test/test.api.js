const request = require('supertest')
const app = require('../app.js')

let idProduto

describe('API test', () => {
  test('Rota Get /tarefas', done => {
    request(app)
      .get('/produtos')
      .expect(200)
      .expect(res => {
        expect(res.body.length).not.toBe(0)
      })
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
})
