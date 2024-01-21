
// Ao passar o mouse sobre o cabeçalho, a cor de fundo mude.

let header = document.getElementById("header");
header.addEventListener("mouseover", changeColor);
header.addEventListener("mouseout", changeBack);

function changeColor(){
  header.style.backgroundColor = "#ADB5BD"
};

function changeBack(){
  header.style.backgroundColor = "#dee2e6"
};


// Ao clicar em um artigo, uma mensagem de alerta exibindo o título do projeto seja mostrada.

let article1 = document.getElementById("mother");
article1.addEventListener("click", function(){ alert("Mother of Waters."); });

let article2 = document.getElementById("brasa");
article2.addEventListener("click", function(){ alert("Brasa Game Assets."); });

