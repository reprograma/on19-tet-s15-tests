const teste = (titulo, esperado, retornado) => {
    if (esperado === retornado) {
        console.log(`${titulo} deu certo :)`);
    } else {
        console.log(`${titulo} deu ruim :(`);
    }
}

teste("somaCompras", 10, somaCompras(7, 8));
teste("estoque", 40, estoque(60, 20));







