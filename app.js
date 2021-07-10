//valores do input
const vpa = document.querySelector(".vpa");
const lpa = document.querySelector(".lpa");
const cota = document.querySelector(".cota");

const mPositiva = document.querySelector(".m-positiva");
const mNegativa = document.querySelector(".m-negativa");
const precoJusto = document.querySelector(".precoJusto");

const idMPositiva = document.getElementById("m-positiva");
const idMNegativa = document.getElementById("m-negativa");

let valorIntrincico = 0;
let margemSeg = 0;
//botão toggle
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

//botões calcular e apagar

const calcular = document.querySelector(".calcular");
const apagar = document.querySelector(".apagar");

calcular.addEventListener("click", function (e) {
  e.preventDefault();
  idMPositiva.classList.add("hidden");
  idMNegativa.classList.add("hidden");
  mPositiva.textContent = 0;
  mNegativa.textContent = 0;
  precoJusto.textContent = 0;

  valorIntrincico = Math.sqrt(22.5 * vpa.value * lpa.value);

  precoJusto.textContent = valorIntrincico.toFixed(2);

  if (cota.value > 0) {
    const margemSeg = (valorIntrincico / cota.value - 1) * 100;

    if (margemSeg > 0) {
      idMPositiva.classList.remove("hidden");
      mPositiva.textContent = margemSeg.toFixed(2);
    } else if (margemSeg < 1) {
      idMNegativa.classList.remove("hidden");
      mNegativa.textContent = margemSeg.toFixed(2);
    }
  }
});

apagar.addEventListener("click", function (e) {
  e.preventDefault;

  idMPositiva.classList.add("hidden");
  idMNegativa.classList.add("hidden");
  mPositiva.textContent = 0;
  mNegativa.textContent = 0;
  precoJusto.textContent = 0;
  vpa.value = "";
  lpa.value = "";
  cota.value = "";
});
