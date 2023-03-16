const form = document.getElementById('form-agenda');
const imgAprovado = '<img src="./images/icone-check.png" alt="Check" />';
const contatos = [];
const prefixo = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputDddContato = document.getElementById('prefixo-numero');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi salvo na agenda virtual!`);
    } else {
            contatos.push(inputNomeContato.value);
            prefixo.push(parseInt(inputDddContato.value));
            prefixo.push(parseInt(inputNumeroContato.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputDddContato.value}</td>`;
            linha += `<td>${inputNumeroContato.value}</td>`;
            linha += '</tr>'
        
            linhas += linha;
        }
        
        inputNomeContato.value = '';
        inputDddContato.value = '';
        inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


