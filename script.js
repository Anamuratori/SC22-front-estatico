function contadorLikes(botaoId, contadorId, numInicial) {
    const botao = document.getElementById(botaoId);
    const contador = document.getElementById(contadorId);

    let conta = numInicial;

    botao.addEventListener('click', () => {
        conta++;
        contador.innerText = conta;
    })
}

contadorLikes("likeC", "contagemC", 2656)
contadorLikes("likeSql", "contagemSql", 8768)
contadorLikes('likeHtml', 'contagemHtml', 5446);
contadorLikes("likeJava", "contagemJava", 10265)
contadorLikes("likeDocker", "contagemDocker", 1356)
contadorLikes("likePhp", "contagemPhp", 4648)