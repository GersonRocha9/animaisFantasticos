// Navegação por Tab
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // if else pra executar o código apenas se retornar valor nas variáveis tabMenu e tabContent
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // função para adicionar classe ativo no elemento
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // Loop para cada item da li com os argumentos itemMenu e index (index de cada imagem ao ser clicada). Evento de clique para executar a função anônima e dentro dela executar a função activeTab passando o index da imagem clicada e adicionando a classe ativo sobre o tabContent referente ao mesmo index

    // Resumindo: clicou na imagem com o index 0 (Raposa), adiciona a classe ativo sobre o content que tem o index 0 (Raposa)
    // Clicou em outra imagem com index 3, por exemplo, remove a classe de Raposa e adiciona no index 3
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  } else {
    console.log("Error 404");
  }
}

// Accordion List:
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

// Scroll Suave Link Interno
function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    // Pegando apenas o # href
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    // Scroll Suave para o Link Interno
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

// Animação ao Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
initScrollSuave();
initTabNav();
initAccordion();
