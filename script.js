function formatarNumero(numero){
    if(isNaN(numero)){
        return ''
    }
    numero = parseFloat(numero)
    return numero.toLocaleString('pt-BR', {maximumFractionDigits: 6})
}

const validarEntrada = entrada => {
    let teclasPermitidas = ['+', '-', '*', 'X', '+/-', '%', '÷', ',', '0']
    return(+entrada > 0 || teclasPermitidas.includes(entrada))
}

const buttons = document.querySelectorAll('button')

const display = document.querySelector('.resultado')

const operadores = document.querySelectorAll('operador')

const removerPontuacao = valorString => {
    return valorString.replaceAll('.', '').replace(',', '.')
}

const atualizarDisplay = valor => display.innerHTML = valor

const obtemValorDisplay = () => display.innerHTML

const validarDisplay = tecla => {if(tecla === "C"){atualizarDisplay(" ")
        return  
    }

    let valorSemPontuacao = removerPontuacao(obtemValorDisplay())

    if(tecla === '+/-' && obtemValorDisplay() !== '0'){
        atualizarDisplay(formatarNumero(valorSemPontuacao * -1))
        return
    }

    if(tecla === ',' && obtemValorDisplay().indexOf(',') >= 0)

    if(tecla === ',' && obtemValorDisplay() ===''){
        atualizarDisplay('0' + tecla)
        return
    }

    if(+tecla > 0 || tecla === '0' || tecla === ','){
        atualizarDisplay(formatarNumero(valorSemPontuacao +''+ tecla))
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