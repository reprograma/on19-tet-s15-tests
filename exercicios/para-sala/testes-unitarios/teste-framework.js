  const teste = (titulo, esperado, retornado) => {
    if (esperado === retornado) {
        console.log(`${titulo} deu certo :)`)
    } else {
        console.log(`${titulo} deu ruim :(`)
    }
  }

/*  const blackFriday = (valorLivro, qtdLivro, desconto, taxaEntrega) => {
    const totaLivros = valorLivro*qtdLivro   
    return totaLivros - (totaLivros*desconto) + taxaEntrega
  } */

  teste("somaCompras", 10, somaCompras(7,8))

  teste("estoque", 40, estoque( 60, 20))

  //teste("ComprasBlack", 47, blackFriday(10, 5, 0.1, 2))
