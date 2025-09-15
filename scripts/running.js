function calcularRitmo() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const horas = parseInt(document.getElementById("horas").value) || 0;
  const minutos = parseInt(document.getElementById("minutos").value) || 0;
  const segundos = parseInt(document.getElementById("segundos").value) || 0;

  const tiempoTotalSegundos = (horas * 3600) + (minutos * 60) + segundos;

  if (distancia > 0 && tiempoTotalSegundos > 0) {
    const pace = tiempoTotalSegundos / distancia; // seg/km
    const min = Math.floor(pace / 60);
    const seg = Math.round(pace % 60);

    const velocidad = (distancia / tiempoTotalSegundos) * 3600; // km/h

    document.getElementById("resultado").innerText =
      `📍 Ritmo: ${min}:${seg.toString().padStart(2, "0")} min/km\n` +
      `⚡ Velocidad media: ${velocidad.toFixed(2)} km/h`;
  } else {
    document.getElementById("resultado").innerText =
      "⚠️ Por favor, ingresa valores válidos.";
  }

  document.getElementById("calc-form").addEventListener("reset", () => {
  document.getElementById("resultado").innerText = "";
  });
}
