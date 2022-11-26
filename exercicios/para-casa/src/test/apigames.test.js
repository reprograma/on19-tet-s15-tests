const request = require('supertest');
const app = require('../app');
//const { findById, find } = require('../models/gamesprojModel');

let elementId;

describe ("Teste de API - Games", () => {
    test("Rota Get - Listar todos os games.", (done) => {
        request(app)
            .get("/gamestore/gamesproj/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0);//
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
     });
});

test('Listar game pelo id', (done) => {
    request(app)
        .get("/gamestore/gamesproj/id")
        .expect(500)
        .expect((res) => {    
            expect(res.body._id).not.toBe(0)
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        }, 10000);
   });
/*
test(`Rota Get /gamestore/gamesproj/_id`, (done) => {
    request(app)
        .get("/gamestore/gamesproj/_id")
        .expect(500)
        .expect((res) => {
            expect(res.body.id).not.toBe(0);;
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        }, 10000);
 });
*/

 test("Rota Get - Listar por nome", (done) => {
    request(app)
        .get("/gamestore/gamesproj/name?name=")
        .expect(200)
        .expect((res) => {
            expect(res.body.name).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
 });

test("Rota post - Adicionar novo game", (done) => {
    request(app)
        .post("/gamestore/gamesproj/add")
        .expect(500)
        .send({
            consoleId: "_id",
            name:"Teste 3",
            developer:"Sony",
            releaseDate:2020,
            genre:["Ação", "Aventura"],
            available:true,
            description:"Grand Theft Auto V é um jogo eletrônico."
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    


test("Rota Delete consolesproj/delete/id=", (done) =>{
    request(app)
        .delete(`/consolesproj/delete/id=${elementId}`)
        .expect(200)
        .expect((res) =>{
            console.log(res.body);
            expect(res.body.message).toBe(`Game with id ${elementId} was successfully deleted`)
            })
            .end((err,res) =>{
                if(err) return done(err)
                return done()
        });
    });

    