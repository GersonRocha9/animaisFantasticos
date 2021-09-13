// // const imagens = document.querySelectorAll("img");
// // console.log(imagens);

// // const palavraImagem = document.querySelectorAll('img[src ^= "img/imagem"]');
// // console.log(palavraImagem);

// // const linksInternos = document.querySelectorAll('[href^="#"]');
// // console.log(linksInternos);

// // const subtitulo = document.querySelector("h2");
// // console.log(subtitulo);

// // const ultimoParagrafo = document.querySelectorAll("p");
// // console.log(ultimoParagrafo[ultimoParagrafo.length - 1]);

// // const imagens = document.querySelectorAll("img");
// // imagens.forEach((item) => console.log(item));

// const paragrafos = document.querySelectorAll("p");

// console.log(paragrafos);

// paragrafos.forEach((item) => console.log(item.innerText));

// // -------------------------

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// const menu = document.querySelector(".menu");

// Lista todas as classes em formato de String
// console.log(menu.className);

// menu.classList.add("ativo");
// add = adicionar
// remove = remove
// toggle = adiciona (se não tiver) ou remove (se tiver)

// const menuAtivo = document.querySelectorAll(".menu a");
// menuAtivo.forEach((item) => item.classList.add("ativo"));

// menuAtivo.forEach((item) => item.classList.remove("ativo"));

// menuAtivo[0].classList.add("ativo");

// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// imgs.forEach((img) => {
//   const possuiAlt = img.hasAttribute("alt");
//   console.log(possuiAlt);
// });

// const hrefExterno = document.querySelectorAll('.menu [href^="https"]');

// hrefExterno.forEach((item) => {
//   item.setAttribute("href", "https://www.linkedin.com/gersonrocha");
// });

// const medidaDoElemento = document.querySelector(".animais-lista");
// console.log(medidaDoElemento.clientHeight); // Pega a dimensão do elemento selecionado (serve pra height e width também)

// console.log(medidaDoElemento.scrollHeight); // Pega a dimensão do Scroll inteiro (serve pra height e width também)

// const primeiraImagem = document.querySelector("img");
// console.log(primeiraImagem.offsetTop + " pixels");

// function somaImagens() {
//   const imgs = document.querySelectorAll("img");
//   let larguraTotal = 0;
//   imgs.forEach((item) => {
//     larguraTotal += item.offsetWidth;
//   });
//   console.log(larguraTotal);
// }

// window.onload = function () {
//   somaImagens();
// };

// const todosLinks = document.querySelectorAll("a");
// todosLinks.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;

//   if (linkWidth >= 48 && linkHeight >= 48) {
//     console.log(link, "Possui acessibilidade");
//   } else {
//     console.log(link, "Não possui boa acessibilidade");
//   }
// });

// var browserWidth = window.matchMedia("(max-width: 720px)").matches;

// if (browserWidth) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// }

// const img = document.querySelector("img");

// // Isolar a função é uma boa prática
// function eventoClique() {
//   console.log("Clicou");
// }

// // Ai pode chamar a função
// img.addEventListener("click", eventoClique);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   console.log(event);
// }

// linkExterno.addEventListener("click", handleLinkExterno);

// // Mapeando imagens ao clicar sobre elas.
// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//   console.log(event.currentTarger.getAttribute("src"));
// }

// imgs.forEach((img) => {
//   img.addEventListener("click", handleImg);
// });

// Adicionado uma classe apenas a um link interno ao ser clicado e tirando essa classe dos demais itens
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function adicionarAtivo(event) {
//   event.preventDefault();
//   linksInternos.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   event.currentTarget.classList.toggle("ativo");
// }

// linksInternos.forEach((item) => {
//   item.addEventListener("click", adicionarAtivo);
// });

// const todosElementos = document.querySelectorAll("body *");

// function handleElemento(event) {
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// const menu = document.querySelector(".menu");

// menu.innerHTML = "<p>Olá</p>";
