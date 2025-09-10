// Referencias a elementos
const nombreGastoInput = document.getElementById('nombre-gasto');
const fechaInput = document.getElementById('fecha');
const valorGastoInput = document.getElementById('valor-gasto');
const categoriaInput = document.getElementById('categoria-gasto');
const agregarButton = document.getElementById('agregar-gasto');
const listaGasto = document.getElementById('lista-gasto');
const totalElemento = document.getElementById('total');

let gastos = [];

// ---- Funciones auxiliares ----
function formatearMoneda(valor) {
  return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}

function guardarGastos() {
  localStorage.setItem('gastos', JSON.stringify(gastos));
}

function cargarGastos() {
  const data = localStorage.getItem('gastos');
  if (data) {
    gastos = JSON.parse(data);
  }
}

function renderizarGastos() {
  listaGasto.innerHTML = '';
  let total = 0;

  gastos.forEach((gasto, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${gasto.fecha}</td>
      <td>${gasto.nombre}</td>
      <td>${gasto.categoria || '-'}</td>
      <td>${formatearMoneda(gasto.valor)}</td>
      <td><button class="eliminar" data-index="${index}">❌</button></td>
    `;
    listaGasto.appendChild(fila);
    total += gasto.valor;
  });

  totalElemento.textContent = formatearMoneda(total);
  guardarGastos();
}

// ---- Eventos ----
agregarButton.addEventListener('click', () => {
  const nombre = nombreGastoInput.value.trim();
  const fecha = fechaInput.value;
  const valor = parseFloat(valorGastoInput.value);
  const categoria = categoriaInput.value;

  if (!nombre || !fecha || isNaN(valor)) {
    alert('Por favor completa todos los campos correctamente');
    return;
  }

  gastos.push({ nombre, fecha, valor, categoria });
  renderizarGastos();

  // Limpiar inputs
  nombreGastoInput.value = '';
  fechaInput.value = '';
  valorGastoInput.value = '';
  categoriaInput.value = '';
});

listaGasto.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const index = e.target.getAttribute('data-index');
    gastos.splice(index, 1);
    renderizarGastos();
  }
});

// ---- Inicializar ----
cargarGastos();
renderizarGastos();

