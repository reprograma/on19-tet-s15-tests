const somaCompras = (livroSelecionado, taxaEntrega)=> {
    return livroSelecionado + taxaEntrega;
  };
  
   
  const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
   };
   
   const multiplicarCompras = (livroEstoque, livroSelecionado) => {
    return livroEstoque * livroSelecionado;
   };
  
const teste = (titulo, esperado, retornado) =>{
  if(esperado === retornado){
    console.log(`${titulo} deu certo:)`);
   }else{
     console.log(`${titulo} deu ruim :(`);
}
}
teste("somaCompras", 10, somaCompras(7,8));
//teste("multiplicarCompras", 25, multiplicarCompras(5,5));// exercicio aula- caminho feliz -25 o esperado e os finais é o a multiplicação esperada
//teste("estoque" , 10, estoque(20,10))


