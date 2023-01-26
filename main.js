const enviarItem = document.getElementById("novoitem");
enviarItem.addEventListener("submit",(evento)=>{
    evento.preventDefault()
nomeItem = evento.target.elements["nome"].value;
quantidadeItem= evento.target.elements["quantidade"].value;
console.log(quantidadeItem);
    adicionaItens(nomeItem,quantidadeItem)
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


}