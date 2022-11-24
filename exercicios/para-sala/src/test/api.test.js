const request = require("supertest");
const app = require("../app.js");

let elementId;
<<<<<<< HEAD
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
=======

describe("API test", () => {
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
        })
    });

    test("Rota Post /users/create", (done) => {
        request(app)
        .post("/users/create")
        .expect("Content-Type", /json/)
        .send({
            name: "Tereza",
            email: "tereza@reprograma.com",
            password: "javascript"
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            elementId = res.body.savedUser._id;
            return done();
        })
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
    });

    test("Rota Delete /users/delete/:id", (done) => {
        request(app)
        .delete(`/users/delete/${elementId}`)
        .expect("Content-Type", /json/)
<<<<<<< HEAD
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
=======
        .expect(200)
        .expect((res) => {
            console.log(res.body)
            expect(res.body.userFound.email).toBe("tereza@reprograma.com");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        })
    })

>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
});