function formatarNumero(numero) {
    if (isNaN(numero)) {
        return ''
    }
    numero = parseFloat(numero)
    return numero.toLocaleString('pt-BR',{
        maximumFractionDigits: 6
    })
}
const validarEntrada = entrada => {
    let teclasPermitidas = ["+", "-", "*", "X", "C", "+/-", "%", "÷", ".", "0"]
    return (+entrada > 0 || teclasPermitidas.includes(entrada))
}
let buttons = document.querySelectorAll('button')
let display = document.querySelector('.resultado')

const removePontuacao = valorString => {
    return valorString.replaceAll(",", "").replace(",", ".")
}
const atualizarDisplay = valor => display.innerHTML = valor
const obtemValorDisplay = () => display.innerHTML
const validarDisplay = tecla => {
    if(tecla === "C") {
        atualizarDisplay('')
        return
    }
    let valorSemPontuacao = removerPontuacao(obtemValorDisplay())
    if(tecla === "+/-" && obtemValorDisplay() !== "0") {
        atualizarDisplay(formatarNumero(valorSemPontuacao * -1))
        return
    }
    if(tecla === ',' && obtemValorDisplay().indexOf(",") >= 0){
        return
    }
    if(tecla === ",") {
        atualizarDisplay(obtemValorDisplay() +''+ tecla)
        return
    }
    if(+tecla > 0 || tecla === "0" || tecla === ",") {
        atualizarDisplay(formatarNumero(valorSemPontuacao +''+ tecla))
    }
}
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let tecla = e.target.textContent
        if(validarDisplay(tecla)) {
            validarDisplay(tecla)
        }
    })
})
document.addEventListener('keypress', function(event){
    let tecla = event.key
    if(validarEntrada(tecla)) {
        validarDisplay(tecla)
    }
})
