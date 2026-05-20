// ====================
// MENU MOBILE
// ====================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ====================
// ANIMAÇÃO SCROLL
// ====================

const animacoes = document.querySelectorAll(".animacao");

function mostrarAnimacoes() {
  const alturaTela = window.innerHeight;

  animacoes.forEach((item) => {
    const distanciaTop = item.getBoundingClientRect().top;

    if (distanciaTop < alturaTela - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", mostrarAnimacoes);

mostrarAnimacoes();

const darkBtn = document.getElementById("dark-mode-toggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
