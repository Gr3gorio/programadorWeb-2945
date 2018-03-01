

function askAndParse () {
    var number1 = prompt('Ingerese un número')
    var parsedNumber1 = parseInt(number1, 10)
    if (isNaN(parsedNumber1)) {
      return false
    } else {
      return parsedNumber1
    }
  }
 
 var number1 = askAndParse()
 
 var number2 = askAndParse()


    
function suma(){
    var resultadoSuma = number1 + number2
    console.log('el resultado de la suma es : '+resultadoSuma)
}
   


function resta(){
    var resultadoResta = number1 - number2
    console.log('el resultado de la resta es : '+resultadoResta)
}

function multiplicacion(){
    var resultadoMultiplicacion = number1 * number2
    console.log('el resultado de la multiplicacion es : '+resultadoMultiplicacion)
}

function division(){
     if (number2 === 0) {
    console.log('No se puede dividir por cero')
  } else {
    var resultadoDivision = number1 / number2
    console.log('el resultado de la division es : '+resultadoDivision)
  }   
}

suma()
resta()
multiplicacion()
division()







