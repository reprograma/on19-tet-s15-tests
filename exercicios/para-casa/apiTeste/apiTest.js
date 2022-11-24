const request = require("supertest");
const app = require("../app.js");

//finalizar a primeira rota


//segunda rota
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


  //terceira rota