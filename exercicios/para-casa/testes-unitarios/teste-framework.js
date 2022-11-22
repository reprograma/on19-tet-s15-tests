
/*const multiplicar = (mutiplicarEstoque, estoqueSelecionado) => {
    return mutiplicarEstoque * estoqueSelecionado;
};*/

const teste = (titulo, esperado, retornado) => {

    if (esperado === retornado) {
        console.log(` ${titulo} deu certo :) `)
    } else {
        console.log(` ${titulo} deu ruim :( `)
    }
}
teste("Adição:" , 10, somaCompras(5,5))
teste("Subtração:" , 10, estoque(20,10))
//teste("Multiplicação:" , 200, multiplicar(20,10))