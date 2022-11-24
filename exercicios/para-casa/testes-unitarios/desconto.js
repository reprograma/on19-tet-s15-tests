const DescontoDoProduto = (preçoDoProduto, descontoDoProduto) => (preçoDoProduto * (1 - (descontoDoProduto / 100)));
module.exports = DescontoDoProduto;
