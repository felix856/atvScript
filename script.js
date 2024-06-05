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
    var linkInput = document.getElementById('linkInput');
    var textoAlterado = document.getElementById('entradaTexto').value; // Pega o texto do campo "Digite algo"
    var url = linkInput.value;
    var erroMensagem = document.getElementById('erroMensagem');

    // Expressão regular para validar URLs
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocolo
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domínio
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ou endereço IP (v4)
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // porta e caminho
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // consulta
        '(\\#[-a-z\\d_]*)?$','i'); // fragmento

    if (!urlPattern.test(url)) {
        erroMensagem.innerText = "Por favor, insira um URL válido.";
        return;
    }

    erroMensagem.innerText = "";

    // Verifica se o URL começa com "http://" ou "https://"
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    var novoLink = document.createElement('a');
    novoLink.href = url; // URL para onde o link deve ir
    novoLink.target = "_blank"; // Abre o link em uma nova aba
    novoLink.innerText = textoAlterado || url; // Usa o texto do campo "Digite algo" ou o próprio URL como fallback

    var novosLinksDiv = document.getElementById('novosLinks');
    novosLinksDiv.appendChild(novoLink);

    // Adiciona uma quebra de linha após o novo link
    novosLinksDiv.appendChild(document.createElement('br'));

    // Limpa os campos de entrada
    linkInput.value = "";
    document.getElementById('entradaTexto').value = "";
});
