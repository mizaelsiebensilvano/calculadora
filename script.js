let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){

    
    button.addEventListener('click', function(e) {
        console.log(e.target.textContent)
    })
})

document.addEventListener("keypress", function(event) {

        console.log(event.key)
})

// const calc = [ 'Number', '/', '*', '-', '+' ]

// const res = calc.includes( 'Number', '/', '*', '-', '+' )

//     if (res) {
//         console.log("É uma tecla da calculadora" )
//     } else {
//         console.log("Não é uma tecla da calculadora!")
//     }





let teclas = [ "Number", "/", "*", "-", "+", "ENTER", "." ]

console.log( teclas.includes( "event.key" ) )

    if (true.event.key) {
        console.log('É uma tecla da calculadora')
    } else {
        console.log('Não é uma tecla da calculadora')
    }

// const fruits = ['Maçã', 'Manga']
// const res = fruits.includes('Banana')
// if (res) {
//     console.log('Ebaaa!')
// } else {
//     console.log(`Vamos comprar uma laranja`)
// }