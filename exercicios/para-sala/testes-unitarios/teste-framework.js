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
    if (esperado === retornado) {
        console.log(`${titulo} deu certo :)`);
    } else {
        console.log(`${titulo} deu ruim :(`);
    };
  };
// Quando eu chamo a função (), eu adiciono valores aos parametros. 
  
teste("somaC0mpras", 10, somaCompras(0, 10));
teste("estoque", 4, estoque(8,8));
//teste("Cupom", 20, CupomDesconto(50, 30));  
