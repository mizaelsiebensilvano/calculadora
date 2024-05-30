let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){

    
    button.addEventListener('click', function(e) {
        console.log(e.target.textContent)
    })
})

// while {
// button.addEventListener('keypress', function(event) {

//     if(event.key) {
//         console.log(e.target.textContent)
//     }
// })
// }


// document.addEventListener("keypress", function(event) {

//     if(event.key === "1") {
//         console.log("Pressionou a tecla 1")
//     }

// })

    
