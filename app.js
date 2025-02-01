//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes_amigos = [];

function adicionarAmigo() {
    
    let nome_input = document.getElementById('amigo');
    let nome = nome_input.value;

    if (nome == "") {
        alert('Por favor, insira um nome.');
    } else {
        nomes_amigos.push(nome);
        nome_input.value = '';
        preencherLista();
    }
}

function limparListaDeNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

function reiniciarJogo() {
    limparListaDeNomes()
    nomes_amigos = [];
    
    let resultado = document.getElementById('resultado');
    resultado.removeChild(document.getElementById('nome_resultado'))
}

function preencherLista() {
 
    limparListaDeNomes()

    let lista = document.getElementById('listaAmigos');

    for (let index = 0; index < nomes_amigos.length; index++) {
        
        let nome = document.createElement('li')
        nome.textContent = nomes_amigos[index];

        lista.appendChild(nome)
    }
}

function sortearAmigo() {
    
    if (nomes_amigos.length >= 2) {

        if (document.getElementById('nome_resultado')) {
            reiniciarJogo()
            alert('Reiniciando Jogo!')
        } else {
            let indice = Math.floor(Math.random() * (nomes_amigos.length-1)) + 1;
        
            let nome_sorteado = nomes_amigos[indice];
            document.getElementById('resultado').innerHTML += `<p id='nome_resultado'>${nome_sorteado}</p>`
        }
        
    } else {
        alert('Deve-se ter ao menos dois nomes na lista!');
    }
}
