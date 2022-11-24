const request = require("supertest"); 
const app = require("../app.js");


let elementId;

test("Rota Post /tarefa/create", (done) =>{
    request(app)
    .post("/tarefa/create")
    .expect("Content-Type", /json/)
    .send({
        name:"Luciana",
        email:"dlsfarias@hotmail.com",
        password:"queodio02"
    })
    expect(200)
    .end((err,res) =>{
        if(err) return done(err);
        elementId = res
    })
  })
