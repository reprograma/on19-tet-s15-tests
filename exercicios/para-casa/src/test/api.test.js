const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
  test("Get /tarefas", (done) => {
    request(app)
      .get("/tarefas/")
      .expect(200)
      .expect((res) => {
        expect(res.body.lenght).not.toBe(0);
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
        descricao: "elaborar proposta de projeto",
        dataInclusao: "02/11/2021",
        concluido: true,
        nomeColaboradora: "Liliane",
        password: "senha01",
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.descricao._id;
        return done();
      });
  });

  test("Rota Delete /tarefas/delete/:id", (done) => {
    request(app)
      .delete(`/tarefas/delete/${elementId}`)
      .expect("Content-Type", /json/)
      .expect(400)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.tarefas.descricao).toBe("elaborar proposta de projeto");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
