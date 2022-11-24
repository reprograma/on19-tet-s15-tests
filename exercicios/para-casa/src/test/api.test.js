const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
  test("Rota Get /tarefas", (done) => {
    request(app)
      .get("/tarefas")
      .expect(200)
      .expect((res) => {
        expect(res.body.length).not.toBe(0);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("Rota Post /tarefas", (done) => {
    request(app)
      .post("/tarefas")
      .expect("Content-Type", /json/)
      .send({
        name: "Cibelle",
        email: "Cibelle@reprograma.com",
        password: "senhateste",
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.tarefa;
        return done();
      });
  });
  test("Rota Delete /:id", (done) => {
    request(app)
      .delete(`tarefas/${elementId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.encontraTarefa.nome).toBe("Cibelle");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
