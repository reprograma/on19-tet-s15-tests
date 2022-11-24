<<<<<<< HEAD
/*const somaCompras = (livroSelecionado, taxaEntrega) => {
    return livroSelecionado + taxaEntrega;
  };
  
  //let esperado = 55;
  //let retorno = somaCompras(50, 5);
  
  if (esperado === retorno) {
    console.log(`O teste deu certo :)`);
  } else {
    console.error(`O teste deu ruim :(`);
  }
  
  const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
  };*/
  
 /* esperado = 5;
  retorno = estoque(10, 5);
  if (esperado === retorno) {
    console.log(`O teste deu certo :)`);
  } else {
    console.error(`O teste deu ruim :(`);
  }*/
  /*const CupomDesconto = (ValorLivroSelecionado, cupom) => {
    return ValorLivroSelecionado - cupom;
  }*/

  // Framework de teste 
  // função de teste, adicionar 3 parematros. 1 parametro titulo(descrição), 2 parametro esperado(valor x), 3 parametro retornado (valor y)
// templente string = `${titulo} deu certo`
  const teste = (titulo, esperado, retornado) => {
=======
const teste = (titulo, esperado, retornado) => {
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
    if (esperado === retornado) {
        console.log(`${titulo} deu certo :)`);
    } else {
        console.log(`${titulo} deu ruim :(`);
<<<<<<< HEAD
    };
  };
// Quando eu chamo a função (), eu adiciono valores aos parametros. 
  
teste("somaC0mpras", 10, somaCompras(0, 10));
teste("estoque", 4, estoque(8,8));
//teste("Cupom", 20, CupomDesconto(50, 30));  
=======
    }
}

teste("somaCompras", 10, somaCompras(7, 8));
teste("estoque", 40, estoque(60, 20));







>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5
