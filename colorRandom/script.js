// Seleccionar la caja y el botón
const colorBox = document.getElementById("colorBox")
const botonCambioColor = document.getElementById("changeColorButton")

// Función para generar un color aleatorio
// Color: RGB
function cambioColorRandom(){
  const r = Math.floor(Math.random() * 256)
  console.log("Valor r == " + r)
  const g = Math.floor(Math.random() * 256)
  console.log("Valor g == " + g)
  const b = Math.floor(Math.random() * 256)
  console.log("Valor b == " + b)

  return `rgb(${r}, ${g}, ${b})`
}

// Agregar evento al botón
botonCambioColor.addEventListener('click', () => {
  const nuevoColor = cambioColorRandom()
  console.log("El RGB es: " + nuevoColor)
  colorBox.style.backgroundColor = nuevoColor
})
