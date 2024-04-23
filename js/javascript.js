let userNumber = []
let outputDisplay = document.getElementById('output')

let results
let firstNbr
let secondNbr
let operator



//push les chiffres dams userNumber est affiche sur le display
function usrInpNbr(val){
    userNumber.push(val)
    outputDisplay.innerText = userNumber.join('')
    console.log(userNumber)
}


//reset tous les input ainsi que le display
function setAllZero(){
    userNumber = []
    firstNbr = []
    secondNbr = []
    operator = []
    results = []
    outputDisplay.innerText = ''
}

//appelle la fonction setAllZero
function reset(){
    setAllZero()
}

//Push les opérateurs dans userNumber est puis sur le display
function usrInpOp(val){
    firstNbr = userNumber.join('')
    userNumber.push(val)
    outputDisplay.innerText = userNumber.join('')
}

// utilisation de la fonction for pour prendre la longeur de usernumber
// est utilisation de la fonction switch qui permet d'évaluer la string est d'effectuer le calcul selon les opérateur trouver
// -=, +=, *=, /=, sont les opérateur utiliser sur les chiffres
function equal(){
    let calculation = userNumber
    let result
    for (let a = 0; a < calculation.length; a++) {
        if (a === 0) {
          result = parseFloat(calculation[a]);
        } else {
          if (!isNaN(calculation[a])) {
            switch (calculation[a - 1]) {
              case "-":
                result -= parseFloat(calculation[a]);
                break;
              case "+":
                result += parseFloat(calculation[a]);
                break;
              case "x":
                result *= parseFloat(calculation[a]);
                break;
              case "/":
                result /= parseFloat(calculation[a]);
                break;
            }
          }
        }
      }
    outputDisplay.innerText = ''
    outputDisplay.innerText = result
}