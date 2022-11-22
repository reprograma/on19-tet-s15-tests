const request = require("supertest")
const app = require("../app")


let elementId;

describe("Api teste", () => {
   test("Get All - Trazer todas as Tarefas Cadastradas", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0)

            })
            .end((err, res) => {
                if (err) return done(err)
                return done()

            })

    }) 


})