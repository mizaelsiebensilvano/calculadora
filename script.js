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

const removePontuacao = valorString => display.innerHTML = valorString
const obtemValorDisplay = () => display.innerHTML
const validarDisplay = tecla => {
    if(tecla === "C") {
        atualizaDisplay('')
        return
    }
    let valorSemPontuacao = removerPontuacao(obtenhaValorDisplay())
    if(tecla === "+/-" && obtemValorDisplay() !== "0") {
        atualizarDisplay(formatarNumero(valorSemPontuacao * -1))
        return
    }
    if(tecla === ',' && obtemValorDisplay().indexOf(",") >= 0){
        atualizarDisplay('0'+ tecla)
        return
    }
    if(tecla === ",") {
        atualizaDisplay(obtemValorDisplay() +''+ tecla)
        return
    }
    if(+tecla > 0 || tecla === "0" || tecla === ",") {
        atualizaDisplay(formatarNumero(valorSemPontuacao +''+ tecla))
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
    if(validarEntrada(tecla) {
        validarDisplay(tecla)
    })
})

const atualizaDisplay = tecla => {
    if (tecla === "C") { display.innerHTML = ''
        return
    }
    if (tecla === '.' && display.innerHTML.indexOf(".") >= 0) {
        return
    }
    if (tecla === '.' && display.innerHTML === "") {
        display.innerHTML = '0'+ tecla
        return
    }
    if (+tecla > 0 || tecla === "0" || tecla === ".")
        display.innerHTML = +''+ tecla
}
buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        let tecla = e.target.textContent
        if (validarEntrada(tecla)) {
            atualizaDisplay(tecla)
        }
    })
})
document.addEventListener('keypress', function(e){
    let tecla = e.key;
    if (validarEntrada(tecla)) {
        atualizaDisplay(tecla);
    }
})