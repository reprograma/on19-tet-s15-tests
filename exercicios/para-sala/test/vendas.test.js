const somaCompras = require("../testes-unitarios/compras.js");
<<<<<<< HEAD
const estoque = require("../testes-unitarios/estoque.js")

// expect - seguinifica eu espero que (algo).seja exatamente(isso) = expect(retornado).tobe(esperado)
=======
const estoque = require("../testes-unitarios/estoque.js");

>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
test("Deve retornar a soma das compras com taxa de entrega", () => {
    const esperado = 2530;
    const retornado = somaCompras(2500, 30);

<<<<<<< HEAD
    expect(retornado).toBe(esperado)
});
=======
    expect(retornado).toBe(esperado);
})
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5

test("Deve retornar a diferença que restou no estoque", () => {
    const esperado = 2530;
    const retornado = estoque(2500, 30);

<<<<<<< HEAD
    expect(retornado).toBe(esperado)
});
=======
    expect(retornado).toBe(esperado);
})
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
