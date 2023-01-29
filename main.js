const enviarItem = document.getElementById("novoitem");
enviarItem.addEventListener("submit",(evento)=>{
    evento.preventDefault()
nomeItem = evento.target.elements["nome"];
quantidadeItem= evento.target.elements["quantidade"];
    adicionaItens(nomeItem.value,quantidadeItem.value)
nomeItem.value = "";
quantidadeItem.value = "";
})

function adicionaItens(nome,quantidade){
const linha = document.createElement('li');
linha.classList.add("item");

const numero= document.createElement('strong');
numero.innerHTML = quantidade;
linha.appendChild(numero);
linha.innerHTML+=nome;
console.log(linha);
const lista = document.getElementById("lista");
lista.appendChild(linha);
console.log(lista);

const itemAtual = {
    "nome": nome,
    "quantidade" : quantidade,
}

localStorage.setItem("item",stringfy(itemAtual));
}

