//---------------variables
//buttons
const percentageButtons = document.querySelectorAll('[data-percentage]')
const resetButton = document.getElementById('reset-button')

//percentage buttons
percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // define the inputs
        let billAmount = document.getElementById('bill').value
        let numPeople = document.getElementById('num-people').value
        

        let tip = button.innerText
        let tipResult
        let totalResult
        if (isNaN(billAmount) || isNaN(numPeople)) return
        switch (tip) {
            case "5%":
                tipResult = (billAmount*0.05)/numPeople
                break
            case "10%":
                tipResult = (billAmount*0.05)/numPeople
                break
            case "15%":
                tipResult = (billAmount*0.05)/numPeople
                break
            case "25%":
                tipResult = (billAmount*0.05)/numPeople
                    break
            case "50%":
                tipResult = (billAmount*0.05)/numPeople
                break
            default:
                return
        }
        totalResult = (billAmount/numPeople)+tipResult
        
        displayResults(tipResult, totalResult) 
    })
})

//reset button
function reset() {
    let billAmount = document.getElementById('bill')
    let numPeople = document.getElementById('num-people')
    let custom = document.getElementById('custom')
    document.getElementById("tip-result-operand").innerHTML = ''
    document.getElementById("total-result-operand").innerHTML = ''
    billAmount.value = ''
    numPeople.value = ''
    custom.value = ''
    console.log("hello")
}

function displayResults(x, y){
    document.getElementById("tip-result-operand").innerHTML = `$${(Math.round(x*100)/100).toFixed(2)}`
    document.getElementById("total-result-operand").innerHTML = `$${(Math.round(y*100)/100).toFixed(2)}`
}


//custom tip input
let custom = document.getElementById('custom')
custom.addEventListener("keyup", () => {
    console.log(custom.value)
    let billAmount = document.getElementById('bill').value
    let numPeople = document.getElementById('num-people').value
    let customPercent = custom.value/100
    let tipResult = (billAmount*customPercent)/numPeople
    let totalResult = (billAmount/numPeople)+tipResult
    displayResults(tipResult, totalResult) 
})