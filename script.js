/* ANIMAÇÃO GLOBAL DO SITE */

const elementos = document.querySelectorAll(
  "section, h1, h2, h3, p, img, button",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

elementos.forEach((el) => {
  el.classList.add("animacao-scroll");
  observer.observe(el);
});

/* ANIMAÇÃO DOS CARDS SCROLL */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

/* MENU MOBILE */

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");

  /* trava scroll no Android */
  document.body.classList.toggle("menu-open");
}

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");

    /* remove trava */
    document.body.classList.remove("menu-open");
  });
});

/* AGENDAMENTO STEP BY STEP */

let servicoSelecionado = "";

/* STEP 1 → STEP 2 */

function selecionarServico(servico) {
  servicoSelecionado = servico;

  const step1 = document.getElementById("step1-card");
  const step2 = document.getElementById("formulario");

  if (step1) step1.style.display = "none";

  if (step2) step2.style.display = "block";

  atualizarStep(2);
}

/* STEP 2 → STEP 3 */

function proximoStep3() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if (!nome || !telefone) {
    alert("Preencha nome e telefone antes de continuar.");

    return;
  }

  document.getElementById("formulario").style.display = "none";

  document.getElementById("step3").style.display = "block";

  atualizarStep(3);
}

/* VOLTAR (STEP 2 → STEP 1) */

function voltarStep1() {
  document.getElementById("step1-card").style.display = "block";

  document.getElementById("formulario").style.display = "none";

  document.getElementById("step3").style.display = "none";

  atualizarStep(1);
}

/* VOLTAR (STEP 3 → STEP 2) */

function voltarStep2() {
  document.getElementById("formulario").style.display = "block";

  document.getElementById("step3").style.display = "none";

  atualizarStep(2);
}

/* CONTROLE VISUAL DOS STEPS */

function atualizarStep(stepAtual) {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    step.classList.remove("active");

    if (index === stepAtual - 1) {
      step.classList.add("active");
    }
  });
}

/* ENVIO PARA WHATSAPP */

function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const condominio = document.getElementById("condominio").value;
  const mensagemExtra = document.getElementById("mensagem").value;

  if (!nome || !telefone) {
    alert("Preencha os campos obrigatórios!");

    return;
  }

  const mensagem = `Olá! Me chamo ${nome}.
Gostaria de agendar uma consulta.

📌 Serviço: ${servicoSelecionado}
📞 Telefone: ${telefone}
📧 Email: ${email || "Não informado"}
🏢 Condomínio: ${condominio || "Não informado"}

📝 Detalhes:
${mensagemExtra || "Não informado"}`;

  const numero = "5579998163248";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
