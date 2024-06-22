let validarEntrada = entrada => {
    let teclasPermitidas = ['+', '-', '*', 'X', '+/-', '%', '÷', ',', '0']
    return(+entrada > 0 || teclasPermitidas.includes(entrada))
}

let buttons = document.querySelectorAll('button')

let display = document.querySelector('.visor')

let removerPontuacao = valorString => {
    return valorString.replaceAll('.', '').replace(',', '.')
}

let atualizarDisplay = valor => display.innerHTML = valor

let obtemValorDisplay = () => display.innerHTML

let validarDisplay = tecla => { 
    if(tecla === 'C'){
        atualizarDisplay('')
        return
    }
}

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let tecla = e.target.textContent
        if(validarEntrada(tecla)){
            validarDisplay(tecla)
        }
    })
})

document.addEventListener('keypress', function(event){
    let tecla = event.key
        if(validarEntrada(tecla)){
            validarDisplay(tecla)
        }
})