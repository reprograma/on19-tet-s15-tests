const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () =>{  
   test("Rota Get/users/all", (done) =>{
   request(app)
   .get("/users/all")
   .expect(200)
   .expect((res) =>{
      expect(res.body.lenght).not.toBe
   })
     .end((err, res) =>{
	if(err) return done(err);
	return done();
       })
  })
});

test("Rota POST /users/create", (done) => {
    request(app)
    .post("/users/create") 
    .expect("Content-Type", /json/)
    .send({
        name: "Anne",
        email: "Anne@reprograma.com",
        password: "javascript",

    })
    .expect(201)
    .end((err, res) => {
        if(err) return done(err);
        elementId = res.savedUser._id;
        return done();
    })
});



