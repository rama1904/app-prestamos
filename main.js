const form = document.getElementById("form");
const nombre = document.getElementById("Nombre");
const apellido = document.getElementById("Apellido");
const email = document.getElementById("Email");
const monto = document.getElementById("impoerte");
const cuotas = document.getElementById("Honorario");

const montoPrestamo = document.getElementById("importefinal");
const cuotasPrestamo = document.getElementById("Honorariofinal");
const interesesPrestamo = document.getElementById("intereses");
const totalPrestamo = document.getElementById("imrpotetotal");

const tasa = 0.01; // 1%

// Calcular cuota: tasa * monto / (1 - (1+tasa)**-cuotas)

const calcularCuotaPrestamo = (tasa, monto, cuotas) => {
  const cuotaPrestamo = tasa * monto / (1 - (1+tasa)**-cuotas);
  calcularTotalPrestamo(cuotaPrestamo, cuotas);
};

const calcularTotalPrestamo = (cuotaPrestamo, cuotas) => {
  const total = Math.ceil(cuotaPrestamo) * cuotas;

  const prestamo = {
    montoPrestamo: monto.value,
    cuotasPrestamo: cuotas,
    interesesPrestamo: total - monto.value,
    totalPrestamo: total
  };

  pintarPrestamo(prestamo);

  guardarPrestamoStorage(prestamo);
};

// Optimizar con desestructuración de objetos en parámetros
const pintarPrestamo = (prestamo) => {
  montoPrestamo.innerText = `$ ${prestamo.montoPrestamo}`;
  cuotasPrestamo.innerText = `${prestamo.cuotasPrestamo}`;
  interesesPrestamo.innerText = `$ ${prestamo.interesesPrestamo}`;
  totalPrestamo.innerText = `$ ${prestamo.totalPrestamo}`;
};

// Storage
const guardarPrestamoStorage = (prestamo) => {
  localStorage.setItem("prestamo", JSON.stringify(prestamo));
};

const obtenerPrestamoStorage = () => {
  const prestamoStorage = JSON.parse(localStorage.getItem("prestamo"));

  return prestamoStorage;
};

const obtenerPrestamo = () => {
  if (localStorage.getItem("prestamo")) {
    const prestamo = obtenerPrestamoStorage();
    pintarPrestamo(prestamo);
  };
};

// Listeners
document.addEventListener("DOMContentLoaded", obtenerPrestamo);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  calcularCuotaPrestamo(tasa, monto.value, cuotas.value);
});