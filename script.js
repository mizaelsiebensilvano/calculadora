let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){

    
    button.addEventListener('click', function(e) {
        console.log(e.target.textContent)
    })
})

document.addEventListener("keypress", function(event) {

        console.log(event.key)
})
