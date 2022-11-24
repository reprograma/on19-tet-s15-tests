const request = require("supertest");
const app = require("../app");

let elementId;

describe("API test", ()=>{
    test ("RotaGET/cliente/all", (done)=>{
        request(app)
        .get("/cliente/all")
        .expect(200)
        .expect((res)=>{
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res)=>{
            if(err) return done(err);
            return done();
        })
});
 

 test("RotaPost/cliente/add", (done)=>{
    request (app)
    .post("/cliente/add")
    .expect("Content-Type", /json/)
    .send({
        id: 12345678,
        name: "lana del rey",
        cpf: "010101010",
        password: "nopassword",
        tipoDeConta:"poupança",
        saldo: 10000
    })
    .expect(201)
    .end((err, res )=>{
        if (err) return done(err);
        elementId = res.body.savedCliente._id;
        return done()
    })
 });
 test("RotaDelete/cliente/delete/:id", (done) => {
    request(app)
    .delete(`/cliente/delete/${elementId}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {
        console.log(res.body)
        expect(res.body.userFound.name).toBe("lana del rey");        
    })
    .end((err,res) => {
        if (err) return done(err);
        return done();
    })
  })
});
