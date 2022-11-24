const acrescimoNoValorDoProduto = require("../testes-unitarios/acrescimo");
const DescontoDoProduto = require("../testes-unitarios/desconto");

test(" Deve retornar o novo valor com o acréscimo", () =>{
    const esperado= 2530
    const retornado = acrescimoNoValorDoProduto(2500, 30)
  expect(retornado).toBe(esperado)
});

test("Deve retorna  novo valor com desconto", ()=>{
    const esperado = 2470
    const retornado = DescontoDoProduto(2500, 30)
    expect(retornado).toBe(esperado)
});