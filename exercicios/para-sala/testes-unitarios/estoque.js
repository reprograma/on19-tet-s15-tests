const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
  };

module.exports = estoque;


/*Outra forma de exportar 
export const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
  };*/