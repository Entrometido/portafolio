const toggleBtn = document.getElementById("theme-toggle");

// Detectar modo guardado en localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙"; // mostrar icono de luna para volver a oscuro
} else {
  toggleBtn.textContent = "☀️"; // icono de sol para pasar a claro
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Cambiar icono según el modo
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
// Back to top
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  // Mostrar cuando se baja X px
  const SHOW_AFTER = 200;

  const onScroll = () => {
    const sc = window.scrollY || document.documentElement.scrollTop;
    if (sc > SHOW_AFTER) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };

  // Inicial (por si la página carga ya scrolleada)
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

