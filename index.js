console.log("Hello World");

const h1 = document.querySelector("h1");
const parrf = document.querySelector("p");
const pclase = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
const divi = document.getElementById("contenedorImagen");
console.log(input.value);

console.log({
  h1,
  parrf,
  pclase,
  pid,
  input,
});

// {h1: h1, parrf: p, pclase: p.parrafito, pid: p#pid, input: input}

h1.innerText = "Esto es una computadora <br> <small> Laptop</small>";

parrf.innerHTML = "Esto es una computadora <br> <small> Laptop</small>";

console.log(h1.getAttribute("pantalla"));
console.log(pclase.getAttribute("class"));

pclase.setAttribute("class", "rojo");
//<p class="rojo ">Esto es un parrafo con clase</p>
console.log(pclase.getAttribute("class"));
pclase.classList.add("parrafito");
//<p class="rojo parrafito">Esto es un parrafo con clase</p>

pclase.classList.remove("rojo");
//<p class="parrafito">Esto es un parrafo con clase</p>

//pclase.classList.toggle("rojo");
//pclase.classList.contains("rojo");

//Cambia el valor de input
input.value = "456";

// Nos crea un elemento html
const image = document.createElement("img");
image.classList.add("imagensita");
image.setAttribute(
  "src",
  "https://woocommerce.com/wp-content/uploads/2019/12/pos-hero-2021.png?resize=620,434"
);
console.log(image);

divi.append(image);
