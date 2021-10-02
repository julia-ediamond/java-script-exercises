function add(step) {
    //console.log("add function")
    let numberElement = document.getElementById("number")
    let number = numberElement.innerText
    console.log(number)
    number = parseInt(number) + step
    numberElement.innerText = number

}

function subtract(step) {
    let numberElement = document.getElementById("number")
    let number = numberElement.innerText
    console.log(number)
    number = parseInt(number) - step
    numberElement.innerText = number
}

function multiply(step) {
    let numberElement = document.getElementById("number")
    let number = numberElement.innerText
    console.log(number)
    number = parseInt(number) * step
    numberElement.innerText = number
}

function divide(step) {
    let numberElement = document.getElementById("number")
    let number = numberElement.innerText
    console.log(number)
    number = parseInt(number) / step
    numberElement.innerText = number
}