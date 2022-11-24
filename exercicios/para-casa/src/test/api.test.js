const request = require("supertest");
const app = require('../app.js');

describe("API test consoles", () => {
    test("Rota Get /gamestore/consoles/all", (done) => {
        request(app)
            .get("/gamestore/consoles/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    })

})


describe("API test games", () => {
    test("Rota Get /gamestore/games/all", (done) => {
        request(app)
            .get("/gamestore/games/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    })
})