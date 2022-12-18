const request = require("supertest");
const app = require("../app")


let elementId;

describe("API test", () => {
    test("Rota Get /user/all", (done) => {
        request(app)
        .get("/users/all")
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