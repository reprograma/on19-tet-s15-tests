const request = require("supertest");
const app = require("../app.js");
const { findConsoleById } = require("../controller/consolesController.js");
const { findById } = require("../models/gamesModel.js");

let elementId;

describe("API test", () => {
    test("GET /gamestore/games/all", (done) => {
        request(app)
        .get(("/gamestore/games/all")
        )
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        })
    })
});

test("Post/gamestore/games/add", (done) => {
    request(app)
    .post("/gamestore/games/add")
    .expect("Content-type" , /json/)
    .send({
        console: findConsoleById ,
        name: "Test Game",
        developer: "Broderbund Software",
        releaseDate: 1985,
        genre: "Detective",
        available: true,
        description: "Whatever",
    })
    .expect(201)
    .end((err, res) => {
        if(err) return done(err);
        elementId = res.body.savedGame._id;
        return done();
    })
});

test("Delete /gamestore/games/:id", (done) => {
    request(app)
    .delete(`/gamestore/games/${elementId}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {
        console.log(res.body)
        expect(res.body.savedGame.name).toBe("Test Game");        
    })
    .end((err,res) => {
        if (err) return done(err);
        return done();
    })
});
