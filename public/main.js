// ===== CONFIGURAÇÃO =====
var WHATSAPP = "5531984959503";   // 55 + DDD + número, só dígitos
var ANO_FUNDACAO = 2023;           // ex.: 2015 (preenche "Fundada em")
// ========================

document.querySelectorAll(".wa-link").forEach(function(a){
  var msg = a.getAttribute("data-msg") || "Olá! Vim pelo site da Setor 78.";
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  a.target = "_blank"; a.rel = "noopener";
});

var anoAtual = new Date().getFullYear();
document.getElementById("ano").textContent = anoAtual;
if (ANO_FUNDACAO) {
  document.getElementById("ano-fundacao").textContent = ANO_FUNDACAO;
}

var header = document.getElementById("topo");
function onScroll(){ header.classList.toggle("scrolled", window.scrollY > 40); }
window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
}
