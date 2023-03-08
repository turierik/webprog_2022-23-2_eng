// EVENT HANDLING

// 1. references to the elements that are involved in ANY way
const output = document.querySelector('span')
const button = document.querySelector('button')

// 2. what happens?
function increaseByOne(){
    let value = parseInt(output.innerText)
    value = value + 1
    output.innerText = value
}

// 3. eventlistener
button.addEventListener("click", increaseByOne)
