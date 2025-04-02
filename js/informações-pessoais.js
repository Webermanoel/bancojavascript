let emailCadastrado = [];
let senhaCadastrado = [];
let saldo = 0; 

function exibirTextoNaTela(tag, texto, classe = '') {
    const elemento = document.createElement(tag);
    elemento.innerText = texto;
    if (classe) {
        elemento.classList.add(classe);
    }
    document.body.appendChild(elemento);

    setTimeout(() => {
        elemento.remove();
    }, 5000);
}

function salvarNome() {
    const nome = document.querySelector('.entrada_do_nome').value.trim();
    
    if (nome === '') {
        exibirTextoNaTela('p', 'Nome inválido!', 'erro');
        return;
    }

    exibirTextoNaTela('p', `Nome salvo com sucesso, ${nome}`, 'texto');
}

function salvarEndereco() {
    const endereco = document.querySelector('.entrada_do_endereco').value.trim();
    
    if (endereco === '') {
        exibirTextoNaTela('p', 'Endereço inválido!', 'erro');
        return;
    }

    exibirTextoNaTela('p', `Endereço salvo com sucesso, ${endereco}`, 'texto');
}

function salvarRenda() {
    let renda = parseFloat(document.querySelector('.entrada_da_renda').value);

    if (isNaN(renda) || renda < 0) {
        exibirTextoNaTela('p', 'Renda insuficiente para cadastro!', 'erro');
        return;
    }

    exibirTextoNaTela('p', `Renda salva com sucesso, R$ ${renda.toFixed(2)}`, 'texto');
}

function realizarCadastro() {
    exibirTextoNaTela('p', 'Cadastro realizado com sucesso!', 'sucesso');
}

function fazerLogin() {
    return true;
}



realizarCadastro();
if (fazerLogin()) {
    exibirTextoNaTela('h3', 'Bem-vindo ao sistema bancário!', 'boas-vindas');
}
