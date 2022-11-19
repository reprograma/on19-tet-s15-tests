const request = require("supertest");
const app = require("../app.js")


let elementId;

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

    test("Rota Post /users/create", (done) =>{
        request(app)
            .post("/users/create")
            .expect("Content-Type", /json/)
            .send({
                name: "Shirlene",
                email: "shirlene@reprograma.com",
                password: "senhateste"
            })
            .expect(201)
            .end((err, res) =>{
                if(err) return done(err);
                elementId = res.body.savedUser._id;
                return done();
            })
    });

    test("Rota Delete /users/delete/:id", (done) =>{
        request(app)
            .delete(`/users/delete/${elementId}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) =>{
                console.log(res.body);
                expect(res.body.userFound.email).toBe("shirlene@reprograma.com")
            })
            .end((err,res) =>{
                if(err) return done(err)
                return done()
            })
    })
})