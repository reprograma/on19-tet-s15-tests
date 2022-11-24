


/*const valorLivroSelecionadoComDesconto = (
  livroSelecionado,
  descontoAplicado
) => {
  return livroSelecionado - descontoAplicado * livroSelecionado;
};*/

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(` ${titulo} deu certo :)`);
  } else {
    console.log(` ${titulo} deu ruim :(`);
  }
};

teste("somaCompras", 10, somaCompras(7, 8));

teste("estoque", -1, estoque(15, 16));

/*teste(
  "valorLivroSelecionadoComDesconto",
  90,
  valorLivroSelecionadoComDesconto(100, 0.1)
);*/
