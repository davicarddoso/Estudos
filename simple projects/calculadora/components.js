
const botoes = document.querySelectorAll(".botoes")
const display = document.getElementById("display")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        display.value += botao.dataset.value
    })
})

function limpar(){
    display.value = ""
}
function calcular(){
  display.value = eval(display.value)
}

document.addEventListener("keydown", (e) => {
  const permitido = "0123456789+-*/."

  if (permitido.includes(e.key)) {
    display.value += e.key
  }

  if (e.key === "Enter") {
    calcular()
  }

  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1)
  }

  if (e.key === "Escape") {
    limpar()
  }
})
