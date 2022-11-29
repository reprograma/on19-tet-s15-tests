const request = require("supertest"); 
const app = require("../app.js");


let elementId;
describe("API test", () =>{  


test("Rota Post/tarefa/", (done) =>{
    request(app)
    .post("/tarefa/create")
    .expect("Content-Type", /json/)
   
    .send({

        descricao:"hefkohoh",
        dataInclusao: 27/11/22,
        concluido:true,
        nome: "lkdvajbçjr",
        senha:"queodio"
    })
    .expect(201)
    .end((err, res) => {
        if(err) return done(err);
        elementId = res.body.savedTarefa._id;
        return done();
       
    })
  })
})
