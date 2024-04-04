let userNumber = []
let outputDisplay = document.getElementById('output')

let plusOp
let minusOp
let multiplyOp
let divideOp
let dotOp = document.getElementById('dot').value
let results
let resetOp
let firstNbr
let secondNbr
let operator

let number0 = document.getElementById('0').value
let number1 = document.getElementById('1').value
let number2 = document.getElementById('2').value
let number3 = document.getElementById('3').value
let number4 = document.getElementById('4').value
let number5 = document.getElementById('5').value
let number6 = document.getElementById('6').value
let number7 = document.getElementById('7').value
let number8 = document.getElementById('8').value
let number9 = document.getElementById('9').value

let operatorPlus = '+'
let operatorMinus = '-'
let operatorMult = 'x'
let operatorDiv = '/'



function nbr0(){
    userNumber.push(number0)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr1(){
    userNumber.push(number1)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr2(){
    userNumber.push(number2)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr3(){
    userNumber.push(number3)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr4(){
    userNumber.push(number4)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr5(){
    userNumber.push(number5)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr6(){
    userNumber.push(number6)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr7(){
    userNumber.push(number7)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr8(){
    userNumber.push(number8)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function nbr9(){
    userNumber.push(number9)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}
function dot(){
    userNumber.push(dotOp)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}


function setAllZero(){
    userNumber = []
    firstNbr = []
    secondNbr = []
    operator = []
    results = []
    outputDisplay.innerText = ''
}

function reset(){
    setAllZero()
}

function plus(){
    firstNbr = userNumber.join('')
    userNumber.push(operatorPlus)
    outputDisplay.innerText = userNumber.join('')
    operator = '+'
}
function minus(){
    firstNbr = userNumber.join('')
    userNumber.push(operatorMinus)
    outputDisplay.innerText = userNumber.join('')
    operator = '-'
}
function multiply(){
    firstNbr = userNumber.join()
    userNumber.push(operatorMult)
    outputDisplay.innerText = userNumber.join('')
    operator = 'x'
}
function divide(){
    firstNbr = userNumber.join()
    userNumber.push(operatorDiv)
    outputDisplay.innerText = userNumber.join('')
    operator = '/'
}
// utilisation de la fonction for pour prendre la longeur de usernumber
// est utilisation de la fonction switch qui permet d'évaluer la string est d'effectuer le calcul selon les opérateur trouver
function equal(){
    var calculation = userNumber
    var result;
    for (var a = 0; a < calculation.length; a++) {
        if (a == 0) {
          result = parseInt(calculation[a]);
        } else {
          if (!isNaN(calculation[a])) {
            switch (calculation[a - 1]) {
              case "-":
                result -= parseInt(calculation[a]);
                break;
              case "+":
                result += parseInt(calculation[a]);
                break;
              case "*":
                result *= parseInt(calculation[a]);
                break;
              case "/":
                result /= parseInt(calculation[a]);
                break;
            }
          }
        }
      }
    outputDisplay.innerText = ''
    outputDisplay.innerText = result  
}