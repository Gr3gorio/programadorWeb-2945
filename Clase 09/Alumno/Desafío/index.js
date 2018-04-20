var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = showErrorOnEmptyInput

var lastNameInput = document.getElementById('lastName')

lastNameInput.onblur = function (event) {
  showErrorOnEmptyInput(event)
}

function showErrorOnEmptyInput (event) {
  var inputNode = event && event.target

  var value = inputNode && inputNode.value
  if (value) {
    showValidInput(inputNode)
  } else {
    showInvalidInput(inputNode)
  }
  validateAllFields()
}

function showValidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

function showInvalidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}

/*var emailInput = document.getElementById('email')

emailInput.onblur = function (event) {
  var emailInputNode = event && event.target

  var value = emailInputNode && emailInputNode.value

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    showValidInput(emailInputNode)
  } else {
    showInvalidInput(emailInputNode)
  }

  validateAllFields()
}*/

/*var passWordInput = document.getElementById('password')

passWordInput.onblur = function (event) {
  var passwordInputNode = event.target

  var valuePassword = passwordInputNode.value

  if (valuePassword && valuePassword.length >= 6) {
    console.log('Contraseña correcta', valuePassword)
  } else {
    console.log('Contraseña incorrecta', valuePassword)
  }
  validateAllFields()

  var confirmationInput = document.getElementById('confirmation')

  confirmationInput.onblur = function (event) {
    var confirmationInputNode = event.target

    var valueConfirmation = confirmationInputNode.value

    if (valueConfirmation && valueConfirmation === valuePassword) {
      console.log('Confirmacion correcta', valueConfirmation)
    } else {
      console.log('Confirmacion incorrecta', valueConfirmation)
    }
    validateAllFields()
  }
}*/

/*var edadInput = document.getElementById('edad')

edadInput.onblur = function (event) {
  var edadInputNode = event && event.target

  var value = edadInputNode && edadInputNode.value

  if (value && value > 18) {
    console.log('edad valida', value)
  } else {
    console.log('edad invalida')
  }

  validateAllFields()
}
*/
function validateAllFields () {
  var submitButton = document.getElementById('submitButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 6) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

var passwordInput = document.getElementById('password')

passwordInput.onblur = function (event) {
  var passwordInputNode = event.target

  var valuePassword = passwordInputNode.value

  var parentPasswordInputNode = passwordInputNode.parentElement

  var passwordErrorNode = document.getElementById('passwordError')

  if (passwordErrorNode) {
    parentPasswordInputNode.removeChild(passwordErrorNode)
  }

  if (valuePassword && valuePassword.length >= 6) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
  } else {
    passwordInputNode.classList.remove('is-valid')
    passwordInputNode.classList.add('is-invalid')

    passwordErrorNode = document.createElement('span')

    passwordErrorNode.id = 'passwordError'
    passwordErrorNode.innerHTML = 'Contraseña con error'

    parentPasswordInputNode.appendChild(passwordErrorNode)
  }

  validateAllFields()

  var confirmationInput = document.getElementById('confirmation')

  confirmationInput.onblur = function (event) {
    var confirmationInputNode = event.target

    var valueConfirmation = confirmationInputNode.value

    var parentConfirmationInputNode = confirmationInputNode.parentElement

    var confirmationErrorNode = document.getElementById('confirmationError')

    if (confirmationErrorNode) {
      parentConfirmationInputNode.removeChild(confirmationErrorNode)
    }

    if (valueConfirmation && valueConfirmation === valuePassword) {
      confirmationInputNode.classList.remove('is-invalid')
      confirmationInputNode.classList.add('is-valid')
    } else {
      confirmationInputNode.classList.remove('is-valid')
      confirmationInputNode.classList.add('is-invalid')

      confirmationErrorNode = document.createElement('span')

      confirmationErrorNode.id = 'confirmationError'
      confirmationErrorNode.innerHTML = 'Verificacion incorrecta'

      parentConfirmationInputNode.appendChild(confirmationErrorNode)
    }

    validateAllFields()
  }
}
//email
var emailInput = document.getElementById('email')

emailInput.onblur = function (event) {
  var emailInputNode = event.target

  var value = emailInputNode.value

  var parentEmailInputNode = emailInputNode.parentElement

  var emailErrorNode = document.getElementById('emailError')

  if (emailErrorNode) {
    parentEmailInputNode.removeChild(emailErrorNode)
  }

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    emailInputNode.classList.remove('is-invalid')
    emailInputNode.classList.add('is-valid')
  } else {
    emailInputNode.classList.remove('is-valid')
    emailInputNode.classList.add('is-invalid')

    emailErrorNode = document.createElement('span')

    emailErrorNode.id = 'emailError'
    emailErrorNode.innerHTML = 'Email incorrecto'

    parentEmailInputNode.appendChild(emailErrorNode)
  }

  validateAllFields()
}

//edad

var edadInput = document.getElementById('edad')

edadInput.onblur = function (event) {
  var edadInputNode = event.target

  var value = edadInputNode.value

  var parentEdadInputNode = edadInputNode.parentElement

  var edadErrorNode = document.getElementById('edadError')

  if (edadErrorNode) {
    parentEdadInputNode.removeChild(edadErrorNode)
  }

  if (value && value > 18) {
    edadInputNode.classList.remove('is-invalid')
    edadInputNode.classList.add('is-valid')
  } else {
    edadInputNode.classList.remove('is-valid')
    edadInputNode.classList.add('is-invalid')

    edadErrorNode = document.createElement('span')

    edadErrorNode.id = 'emailError'
    edadErrorNode.innerHTML = 'Edad Invalida'

    parentEdadInputNode.appendChild(edadErrorNode)
  }

  validateAllFields()
}
