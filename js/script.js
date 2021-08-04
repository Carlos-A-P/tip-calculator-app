//---------------variables
//buttons
const percentageButtons = document.querySelectorAll('[data-percentage]')
const resetButton = document.getElementById('reset-button')
let billAmount = document.getElementById('bill')
let numPeople = document.getElementById('num-people')
//percentage buttons
percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // define the inputs
        
        let billAmountValue = document.getElementById('bill').value
        let numPeopleValue = document.getElementById('num-people').value
        let tip = button.innerText
        let tipResult
        let totalResult

        checkInputs(billAmountValue, billAmount, numPeopleValue, numPeople)
         
        switch (tip) {
            case "5%":
                tipResult = (billAmountValue*0.05)/numPeopleValue
                break
            case "10%":
                tipResult = (billAmountValue*0.1)/numPeopleValue
                break
            case "15%":
                tipResult = (billAmountValue*0.15)/numPeopleValue
                break
            case "25%":
                tipResult = (billAmountValue*0.25)/numPeopleValue
                    break
            case "50%":
                tipResult = (billAmountValue*0.50)/numPeopleValue
                break
            default:
                return
        }
        totalResult = (billAmountValue/numPeopleValue)+tipResult
        displayResults(tipResult, totalResult) 
        custom.value = ''
    })
})

//check inputs
function checkInputs(inputValue, input1, inputValue2, input2){
    if (inputValue === '' || isNaN(parseInt(inputValue))) {
            
        setErrorFor(input1, 'Please enter a valid number')
    } else if (inputValue === '0') {
        setErrorFor(input1, 'Can\'t be zero')
    } else if(Number(inputValue) < 0){
        setErrorFor(input1, 'Can\'t be negative')
        return input1 = infinity
    } else {
        setCorrectFor(input1)
    }
    
    if (inputValue2 === '' || isNaN(parseInt(inputValue2))){
        setErrorFor(input2, 'Please enter a valid number')
    } else if(inputValue2 === '0') {
        setErrorFor(input2, 'Can\'t be zero')
    } else if(Number(inputValue2) < 0){
        setErrorFor(input2, 'Can\'t be negative')
        return input2 = infinity
    } else {
        setCorrectFor(input2)
    }
    return
}

//error
function setErrorFor(input, message){
    const inputParent = input.parentElement
        // .input
    const small = inputParent.querySelector("small")

    if (message !== undefined) {
       small.innerText = message; 
    }
    

    inputParent.classList.add("error")
}

//correct
function setCorrectFor(input){
    const inputParent = input.parentElement
    inputParent.classList.remove("error")
}

//display results
function displayResults(x, y){
    let tipAmount = document.getElementById("tip-result-operand")
    let total = document.getElementById("total-result-operand")
    if (isNaN(x) || x === Infinity || x === undefined){
        tipAmount.innerHTML = `$0.00`
        
    } else {
        tipAmount.innerHTML = `$${(Math.round(x*100)/100).toFixed(2)}`
    }
    if (isNaN(y) || y === Infinity || y === undefined){
        total.innerHTML = `$0.00`
    } else {
        total.innerHTML = `$${(Math.round(y*100)/100).toFixed(2)}`
    }
}


//custom tip input
let custom = document.getElementById('custom')
custom.addEventListener("keyup", () => {
    let billAmountValue = document.getElementById('bill').value
    let numPeopleValue = document.getElementById('num-people').value
    let customPercent = custom.value/100
    let tipResult = (billAmountValue*customPercent)/numPeopleValue
    let totalResult = (billAmountValue/numPeopleValue)+tipResult
    checkInputs(billAmountValue, billAmount, numPeopleValue, numPeople)
    displayResults(tipResult, totalResult) 
    resetActive()
    if (isNaN(parseInt(customPercent))){
        setErrorFor(custom)
    } else {
        setCorrectFor(custom)
    }
})

//activate once there is text in inputs
billAmount.addEventListener("keyup", () => {
    resetActive()
})

numPeople.addEventListener("keyup", () => {
    resetActive()
})

//reset button
function reset() {
    let billAmount = document.getElementById('bill')
    let numPeople = document.getElementById('num-people')
    let custom = document.getElementById('custom')
    document.getElementById("tip-result-operand").innerHTML = '$0.00'
    document.getElementById("total-result-operand").innerHTML = '$0.00'
    billAmount.value = ''
    numPeople.value = ''
    custom.value = ''
    
}

//reset everything
resetButton.addEventListener("click", () => {
    resetDisabled()
    setCorrectFor(billAmount)
    setCorrectFor(numPeople)
    setCorrectFor(custom)
})

//activate reset button
function resetActive() {
    //remove disabled attribute
    resetButton.removeAttribute("disabled")
    resetButton.classList.remove("disabled")
}

//disable reset button again
function resetDisabled(){
    //add disabled attribute after clicking reset
    resetButton.setAttribute("disabled", "")
    resetButton.classList.add("disabled")
}
