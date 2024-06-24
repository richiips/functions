function changeToBlack(blockId){
    const block = document.querySelector('#' + blockId)
    block.style.backgroundColor = 'black'
}

let blueBlock = document.querySelector('#blueBlock')
blueBlock.addEventListener('click', function(){
    changeToBlack("blueBlock")
})

let redBlock = document.querySelector('#redBlock')
redBlock.addEventListener('click', function(){
    changeToBlack("redBlock")
})

let greenBlock = document.querySelector('#greenBlock')
greenBlock.addEventListener('click', function(){
    changeToBlack("greenBlock")
})

let yellowBlock = document.querySelector('#yellowBlock')
yellowBlock.addEventListener('click', function(){
    changeToBlack("yellowBlock")
})