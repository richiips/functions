const key = document.querySelector('#key')
const container = document.querySelector('#container')

document.addEventListener('keydown', function (event){
    if (event.key === "a" || event.key === "A"){
        key.style.backgroundColor = 'pink'
    } else if (event.key === "s" || event.key === "S"){
        key.style.backgroundColor = 'orange'
    } else if (event.key === "d" || event.key === "D"){
        key.style.backgroundColor = 'skyBlue'
    } else if (event.key === "q" || event.key === "Q"){
        newDiv = crearDiv('purple')
        let addDiv = document.querySelector('#container')
        addDiv.appendChild(newDiv)
    } else if (event.key === "w" || event.key === "W"){
        newDiv = crearDiv('gray')
        let addDiv = document.querySelector('#container')
        addDiv.appendChild(newDiv)
    } else if (event.key === "e" || event.key === "E"){
        newDiv = crearDiv('brown')
        let addDiv = document.querySelector('#container')
        addDiv.appendChild(newDiv)
    }
})

crearDiv = function(color){
    const newDiv = document.createElement('div')
    newDiv.className = 'block'
    newDiv.style.backgroundColor = color
    return newDiv
}