const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
    test ("Rota Get /tarefas", (done) =>{
        request(app)
        .get("/tarefas")
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0)
        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        })
    })
    test("Rota POST /tarefas", (done) => {
        request(app)
        .post("/tarefas")
        .expect("Content-Type", /json/)
        .send({
            descricao: "Lavar Cabelo de Cliente",
            dataInclusao: "24/11/2022",
            concluido: "true",
            nomeColaboradora: "Lilia"
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done
            return done();
        })
    })

})
