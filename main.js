const enviarItem = document.getElementById("novoitem");
const itens = localStorage.getItem("itens")|| [];
console.log(itens);
itens.forEach( (elemento)=> {
    console.log(elemento);
})

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
itens.push(itemAtual);
localStorage.setItem("itens", JSON.stringify(itens));
}

