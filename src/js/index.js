const botoes = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desetivarBotaoSelecionado()
        // Adicionando a classe selecionado no botão que clicar
        botao.classList.add("selecionado")
        esconderImagemAtiva()
        // Adicionando a classe ativa
        imagens[indice].classList.add("ativa")
        esconderInformacoesAtivas()
        informacoes[indice].classList.add("ativa")
    
    })
})

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa")

    informacaoAtiva.classList.remove("ativa")
}

function esconderImagemAtiva() {
    // Identificando dos 5 a onde a classe ativa está.
    const imagemAtiva = document.querySelector(".ativa")
    // Removendo a classe ativa 
    imagemAtiva.classList.remove("ativa")
}

function desetivarBotaoSelecionado() {
    // Identificando dos 5 a onde a classe selecionado está.
    const botaoSelecionado = document.querySelector(".selecionado")
    // Removendo a classe selecionado
    botaoSelecionado.classList.remove("selecionado")
}
