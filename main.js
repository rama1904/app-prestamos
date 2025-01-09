
document.getElementById('simularButton').addEventListener('click', function () {
  // Obtener valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const monto = parseFloat(document.getElementById('monto').value);
  const cuotas = parseInt(document.getElementById('cuotas').value);

  // Validar datos del formulario
  if (!nombre || !email || isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
    alert('Por favor, complete todos los campos correctamente.');
    return;
  }

  // Lógica de cálculo
  const tasaInteresAnual = 0.2; // 20% anual
  const tasaInteresMensual = tasaInteresAnual / 12;
  const totalIntereses = monto * tasaInteresMensual * cuotas;
  const totalDevolver = monto + totalIntereses;
  const cuotaMensual = totalDevolver / cuotas;

  // Mostrar resultados
  document.getElementById('totalDevolver').textContent = `$${totalDevolver.toFixed(2)}`;
  document.getElementById('intereses').textContent = `$${totalIntereses.toFixed(2)}`;
  document.getElementById('cuotaMensual').textContent = `$${cuotaMensual.toFixed(2)}`;
  document.getElementById('result').style.display = 'block';
});
const simulacion = {
  nombre,
  email,
  monto,
  cuotas,
  totalDevolver: totalDevolver.toFixed(2),
  totalIntereses: totalIntereses.toFixed(2),
  cuotaMensual: cuotaMensual.toFixed(2)
};

localStorage.setItem('simulacion', JSON.stringify(simulacion));

// Recuperar datos al cargar la página
window.addEventListener('load', () => {
const simulacion = JSON.parse(localStorage.getItem('simulacion'));
if (simulacion) {
  document.getElementById('nombre').value = simulacion.nombre;
  document.getElementById('email').value = simulacion.email;
  document.getElementById('monto').value = simulacion.monto;
  document.getElementById('cuotas').value = simulacion.cuotas;

  document.getElementById('totalDevolver').textContent = `$${simulacion.totalDevolver}`;
  document.getElementById('intereses').textContent = `$${simulacion.totalIntereses}`;
  document.getElementById('cuotaMensual').textContent = `$${simulacion.cuotaMensual}`;
  document.getElementById('result').style.display = 'block';
}
console.log('Datos guardados en localStorage:', simulacion);
});




/* const form = document.getElementById("simulate");
const monto = document.getElementById("Prestamo-simple");
const cuotas = document.getElementById("Cuotas-br");

const montoPrestamo = document.getElementById("Monto-final");
const cuotasPrestamo = document.getElementById("Cuotas-final");
const interesesPrestamo = document.getElementById("interes");
const totalPrestamo = document.getElementById("Total-devolver");

const tasa = 0.01; // 1%

// Calcular total a pagar incluyendo intereses
const calcularCuotaPrestamo = (tasa, monto, cuotas) => {
  const intereses = monto * tasa * cuotas;
  const total = parseInt(monto) + intereses;
  
  const prestamo = {
    montoPrestamo: parseInt(monto),
    cuotasPrestamo: parseInt(cuotas),
    interesesPrestamo: intereses,
    totalPrestamo: total
  };

  pintarPrestamo(prestamo);
  guardarPrestamoStorage(prestamo);
};

// Mostrar los resultados en la interfaz
const pintarPrestamo = ({montoPrestamo, cuotasPrestamo, interesesPrestamo, totalPrestamo}) => {
  montoPrestamo.innerText = `$ ${montoPrestamo.toLocaleString()}`;
  cuotasPrestamo.innerText = `${cuotasPrestamo}`;
  interesesPrestamo.innerText = `$ ${interesesPrestamo.toLocaleString()}`;
  totalPrestamo.innerText = `$ ${totalPrestamo.toLocaleString()}`;
};

// Storage
const guardarPrestamoStorage = (prestamo) => {
  localStorage.setItem("prestamo", JSON.stringify(prestamo));
};

const obtenerPrestamoStorage = () => {
  return JSON.parse(localStorage.getItem("prestamo"));
};

const obtenerPrestamo = () => {
  if (localStorage.getItem("prestamo")) {
    const prestamo = obtenerPrestamoStorage();
    pintarPrestamo(prestamo);
  }
};

// Listeners
document.addEventListener("DOMContentLoaded", obtenerPrestamo);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calcularCuotaPrestamo(tasa, monto.value, cuotas.value);
});


 */
