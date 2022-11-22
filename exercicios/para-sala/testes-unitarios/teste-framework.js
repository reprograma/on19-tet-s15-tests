


// const desconto = (preco, desconto) => {
//     const precoComDesconto = preco*(100-desconto)/100
//     return precoComDesconto
// }

const teste = (titulo, esperado, retornado) => {
    if(esperado === retornado) {
        console.log(`${titulo} deu certo!`);
    } else {
        console.log(`${titulo} deu ruim!`);
    }
}

teste("somaCompras", 10, somaCompras(7, 3))
teste("estoque", 36, estoque(37, 1))
teste("desconto", 80, desconto(100,20))