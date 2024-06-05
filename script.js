document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = "Você clicou no botão!";
    this.style.backgroundColor = '#28a745'; // Muda a cor do botão para verde
});

document.getElementById('entradaTexto').addEventListener('input', function() {
    var texto = this.value;
    document.getElementById('textoAlterado').innerText = texto;
});

document.getElementById('meuLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a navegação padrão
    document.getElementById('linkMensagem').innerText = "Você clicou no link!";
});

document.getElementById('adicionarLink').addEventListener('click', function() {
    var novoLink = document.createElement('a');
    novoLink.href = "#";
    novoLink.innerText = "Novo link criado dinamicamente";
    novoLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Novo link foi clicado!');
    });

    var novosLinksDiv = document.getElementById('novosLinks');
    novosLinksDiv.appendChild(novoLink);

    // Adiciona uma quebra de linha após o novo link
    novosLinksDiv.appendChild(document.createElement('br'));
});
