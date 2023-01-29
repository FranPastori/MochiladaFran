const enviarItem = document.getElementById("novoitem");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
const lista = document.getElementById("lista");
itens.forEach((elemento) => {
    console.log(elemento.nome, elemento.quantidade);
})

enviarItem.addEventListener("submit", (evento) => {
    evento.preventDefault()
    nomeItem = evento.target.elements["nome"];
    quantidadeItem = evento.target.elements["quantidade"];
    const itemAtual = {
        "nome": nomeItem.value,
        "quantidade": quantidadeItem.value,
    }
    itens.push(itemAtual);
    localStorage.setItem("itens", JSON.stringify(itens));
    adicionaItens(itemAtual);

    nomeItem.value = "";
    quantidadeItem.value = "";
    
})


function adicionaItens(item) {
    const linha = document.createElement('li');
    linha.classList.add("item");

    const numero = document.createElement('strong');
    numero.innerHTML = item.quantidade;
    linha.appendChild(numero);
    linha.innerHTML += item.nome;
    lista.appendChild(linha);

}