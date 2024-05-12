const Display = document.getElementById("display")


function appendToDisplay(value) {
    display.value += value

}

function clearDisplay() {
    display.value = ""
}
function calculate() {
      
    const result = eval(display.value)
    display.value = result
}
 
