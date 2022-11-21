const somaCompras = (livroSelecionado, taxaEntrega) => {
    return livroSelecionado + taxaEntrega;
  };
  
  
  const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
  };
  
  //const cashBack = (livroSelecionado, valorDesconto) => {
  //  return (livroSelecionado * valorDesconto) / 100;
 // };


  const teste = (titulo, esperado, retornado) => {
    if(esperado === retornado) {
        console.log(`${titulo} deu certo :)`);
    } else {
        console.log(`${titulo} deu ruim :()`);
    }
  }

  teste("somaCompras", 10, somaCompras(7, 8));
  teste("estoque", 40, estoque(60, 20));
  //teste("cashBack", 10, cashBack(100,10) );
 
  //console.log(estoque(60, 20))