const request = require('supertest');
const app = require('../app');


let elementId;

describe ("Teste de API - Console", () => {
    test("Rota Get - /gamestore/consolesproj/all", (done) => {
        request(app)
            .get("/gamestore/consolesproj/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
     });
});

test("Rota Get - gamestore/consoleproj/id", (done) => {
    request(app)
        .get(`/gamestore/consolesproj/id`)
        .expect(500)
        .expect((res) => {
            expect(res.body.id).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
 });

test("Rota Get - Listar por developer", (done) => {
    request(app)
        .get("/gamestore/consolesproj/developer?developer=")
        .expect(200)
        .expect((res) => {
            expect(res.body.developer).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
 });

 test("Rota Post - /gamestore/consolesproj/add ", (done) =>{
    request(app)
        .post("/gamestore/consolesproj/add")
        .expect("Content-Type", /json/)
        .send({
            name:"Teste 2",
            developer:"Sony",
            releaseDate:2020,
            display: ["1080p"],
            storageCapacities:["16 GB DDR3"],
            numberOfPlayers:["1","2"],
            available:true,
            description:"O Xbox One apresenta jogos com gráficos de alta definição superiores aos vistos no seu antecessor."
        })
        .expect(500)
        .end((err, res) =>{
            if(err) return done(err);
            elementId = res.body.id;
            return done();
        }, 10000);
});
 
/*
test("Rota Post: /gamestore/consoleproj/add", (done) =>{
    request(app)
        .post("/gamestore/consoleproj/add")
        .expect(200)
        .send({
            name:"Teste 2",
            developer:"Sony",
            releaseDate:2020,
            display: ["1080p"],
            storageCapacities:["16 GB DDR3"],
            numberOfPlayers:["1","2"],
            available:true,
            description:"O Xbox One apresenta jogos com gráficos de alta definição superiores aos vistos no seu antecessor."
        })
        .expect(404)
            .end((err, res) =>{
                if(err) return done(err);
                elementId = res.body.id;
                return done();
            })
    });
*/
 
test("Rota Delete consolesproj/delete/id=", (done) =>{
    request(app)
        .delete(`/consolesproj/delete/id=${elementId}`)
        .expect(200)
        .expect((res) =>{
            console.log(res.body);
            expect(res.body.message).toBe(`Console was successfully deleted.`)
        })
        .end((err,res) =>{
            if(err) return done(err)
            return done()
        });
    });
