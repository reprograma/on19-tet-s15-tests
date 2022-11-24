const request = require("supertest");
const app = require("../app")

let elementId;

describe("API test", () => {
    test("Rota Get /gastos/", (done) => {
        request(app)
            .get("/gastos/")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Rota Post /gastos/", (done) => {
        request(app)
            .post("/gastos/")
            .expect("Content-Type", /json/)
            .send({
                nome: "Beatriz",
                itemComprado: "Boneca",
                categoria: "Lazer",
                metodoDePagamento: "Dinheiro",
                valor: 20.50
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                elementId = res.body.salvaDespesa._id;
                return done();
            });
    });

    test("Rota Delete /gastos/:id", (done) => {
        request(app)
            .delete(`/gastos/${elementId}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect(res.body.encontraDespesa.itemComprado).toBe("Boneca")
            })
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
})