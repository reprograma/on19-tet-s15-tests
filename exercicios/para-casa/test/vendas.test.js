const somaCompras = require("../testes-unitarios/compras")
const estoque = require("../testes-unitarios/estoque")

test("Deve retornar a soma das compras com a taxa de entrega", () => {
    let esperado = 2530
    let retornado = somaCompras(2500, 30)

    expect(retornado).toBe(esperado)



})


test("Deve retornar a diferença que restou no estoque", () => {
    const esperado = 2500
    const retornado = estoque(2530, 30)

    expect(retornado).toBe(esperado)



})