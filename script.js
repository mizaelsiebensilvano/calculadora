function formatarNumero(numero) {
    if (isNaN(numero)) {
        return ''
    }
    numero = parseFloat(numero)
    return numero.toLocaleString('pt-BR',{
        maximumFractionDigits: 2
    })
}
const validarEntrada = entrada => {
    let teclasPermitidas = ["+", "-", "*", "X", "C", "+/-", "%", "÷", ".", "0"]
    return (+entrada > 0 || teclasPermitidas.includes(entrada))
}
let buttons = document.querySelectorAll('button')
let display = document.querySelector('.resultado')

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