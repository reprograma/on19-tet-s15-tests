const acrescimoNoValorDoProduto = require('./acrescimo');
const DescontoDoProduto = require('./desconto');

const testando = (produto, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${produto}, deu certo `);
  } else {
    console.log(`${produto}, deu ruim`);
  }
};

testando('acrescimoNoValorDoProduto', 94.4, acrescimoNoValorDoProduto(90, 5));
testando('DescontoDoProduto', 70, DescontoDoProduto(200, 65));
