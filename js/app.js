
//Adicionar elemento
let message = document.createElement("p");
message.innerHTML = `"Paragrafo criado via JavaScrip"!`;
document.body.appendChild(message);

//Modificar um elemento
let paragrafo = document.getElementById('paragrafo');
paragrafo.innerHTML = `Oi tudo bem? <br/><br/>"Messangem emitida via JavaScrip"!`;

//Remover um elemento
let lista = document.querySelector("ul");

function remove(index) {
    lista.removeChild(lista.childNodes[index]);
}

//definir eventos
let btn = document.querySelector("#clicar");
btn.addEventListener("click", function() {
  alert("Botão clicado");
});

//Acessar informações do usuário
let input = document.querySelector("input");
let textEntered = document.getElementById('textEntered');
input.addEventListener("change", function() {
    textEntered.innerHTML = input.value;
});