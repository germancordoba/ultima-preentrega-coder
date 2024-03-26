let input_btn = document.querySelector("#btn");
let aprobados = document.querySelector("#aprobados");
let aprobados_p = aprobados.querySelector("p");

let base_de_datos = JSON.parse(localStorage.getItem("datos"));
console.log(base_de_datos);
if (base_de_datos != null) {
  aprobados_p.innerText = base_de_datos.nombre + base_de_datos.nota;
}

input_btn.addEventListener("click", () => {
  let input_text = document.querySelector("#texto");
  let input_nota = document.querySelector("#nota");

  let datos = {
    nombre: input_text.value,
    nota: input_nota.value,
  };

  localStorage.setItem("datos", JSON.stringify(datos));
  let nuevo_p = document.createElement("p");
  nuevo_p.innerText = input_text.value + input_nota.value;
  aprobados.appendChild(nuevo_p);
});
