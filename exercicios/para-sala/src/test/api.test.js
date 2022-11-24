const request = require("supertest");
const app = require("../app.js");

let elementId;
// done = feito
// not.toBE = não seja igual 
describe("Api test", () => {
    test("Rota Get /users/all", (done) => {
        request(app)
            .get("/users/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Rota POST /users/create", (done) => {
        request(app)
            .post("/users/create")
            .expect("Content-Type", /json/)
            .send({
                name: "Rafa",
                email: "Rafa@reprograma.com",
                password: "1234",

            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                elementId = res.savedUser._id;
                return done();
            });
    });

    test("Rota Delete /users/delete/:id", (done) => {
        request(app)
        .delete(`/users/delete/${elementId}`)
        .expect("Content-Type", /json/)
        .expect((res) => {
            console.log(res.body)
            expect(res.body.userFound.email).toBe("Rafa@reprograma");   
        })
        .end((err, res) => {
            if (err) return done(err);
            //elementId = res.savedUser._id;
            return done();
        });
    });
});