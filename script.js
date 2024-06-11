let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){

    
    button.addEventListener('click', function(e) {
        console.log(e.target.textContent)
    })
})

document.addEventListener("keypress", function(event) {

        console.log(event.key)
})

let teclas = [ "Number", "/", "*", "-", "+", "ENTER", "." ]

console.log( teclas.includes( "event.key" ) )

    if (true.event.key) {
        console.log('É uma tecla da calculadora')
    } else {
        console.log('Não é uma tecla da calculadora')
    }
