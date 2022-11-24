const request = require("supertest");
const app = require("../app.js")


let elementId;

describe("API GAMES", () => {
    test("GET /gamestore/games/all", (done) => {
        request(app)
            .get("/gamestore/games/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.lenght).not.toBeNull();
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

    test("GET /search/:gamebygenre", (done) => {
        request(app)
            .get("/gamestore/games/search/:gamebygenre")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

    test("GET /:name", (done) => {
        request(app)
            .get("/gamestore/games/:name")
            .expect(200)
            .expect((res) => {
                expect(res.body.length);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

    test("GET /:id", (done) => {
        request(app)
            .get("/gamestore/games/:id")
            .expect(200)
            .expect((res) => {
                expect(res.body.length);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });


    test("POST /add", (done) => {
        const game = {
            consoleId: "637fc25e780f25ceca9af017",
            name: "Super Mario kart II",
            developer: "Nintendo",
            releaseDate: 2018,
            genre: "action",
            mode: [
                "Single-player"
            ],
            available: true,
            description: 'Super Mario Kart is a kart racing game featuring several single and multiplayer modes. During the game, players take control of one of eight Mario franchise characters, each with differing capabilities, and drive karts around tracks with a Mario franchise theme.'
        }
        request(app)
            .post("/gamestore/games/add")
            .expect("Content-Type", /json/)
            .send(game)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                elementId = res.body.name
                return done()
            });
    });
    test("DELETE", (done) => {
        const id = '636c5cd93d1b79f0d55ea525'
        request(app)
            .delete(`/gamestore/games/${id}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    });

    test("PATCH /add", (done) => {
        const id = '637ecb982b123d0d433837d7'
        const game = {
            name: "Mario Kart 77",
            releaseDate: 2022,
            mode: [
                "Multi-player"
            ]
        }
        request(app)
            .patch(`/gamestore/games/${id}`)
            .expect("Content-Type", /json/)
            .send(game)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });
})