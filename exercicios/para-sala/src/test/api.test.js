const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
    test ("Rota Get /users/all", (done) =>{
        request(app)
        .get("/users/all")
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0)
        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        })
    });

    test("Rota POST /users/create", (done) => {
        request(app)
        .post("/users/create")
        .expect("Content-Type", /json/)
        .send({
            name: "Lilia",
            email: "lilia@gmail.com",
            password: "querocafe"
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done
            elementId = res.body.savedUser._id;
            return done();
        })
    })

    test("Rota Delete /users/delete/:id", (done) => {
        request(app)
        .delete(`/users/delete/${elementId}`)
        .expect("Content-type", /json/)
        .expect(200)
        .expect((res) => {
            console.log(res.body)
            expect(res.body.userFound.email).toBe("lilia@gmail.com");

        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        })

    })
 
});