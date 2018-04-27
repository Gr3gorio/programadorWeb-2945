var REQUIRED_FIELD = 'Campo obligatorio'
var REQUIRED_CARACTER = 'Tiene que contener al menos un '
var ERROR_TYPE = 'Tiene que ser tipo '

$('#firstName').one('blur', function () {
  var inputNode = $(this)

  $('#firstName').on('input', function () {
    var inputNode = $(this)
  })
  var value = inputNode.val()

  inputNode.next().remove()

  if (value) {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  } else {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    var parentNode = inputNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
  }
  validateAllFields()
})

$('#email').one('blur', function () {
  var inputNode = $(this)

  $('#email').on('input', function () {
    var inputNode = $(this)
  })

  var value = inputNode.val()

  inputNode.next().remove()

  var errorText = ''

  if (!value) {
    errorText = REQUIRED_FIELD
  } else if (typeof value !== 'string') {
    errorText = ERROR_TYPE + 'String'
  }

  if (value.indexOf('@') === -1) {
    errorText = errorText + ', ' + REQUIRED_CARACTER + 'arroba @'
  }

  if (value.indexOf('.') === -1) {
    errorText = errorText + ', ' + REQUIRED_CARACTER + 'punto .'
  }

  if (!errorText) {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  } else {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    var parentNode = inputNode.parent()
    parentNode.append('<span class="text-danger">' + errorText + '</span>')
  }
  validateAllFields()
})

$('#comments').one('blur', function () {
  var inputNode = $(this)

  $('#comments').on('input', function () {
    var inputNode = $(this)
  })
  var value = inputNode.val()

  inputNode.next().remove()

  if (value) {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  } else {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    var parentNode = inputNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
  }
  validateAllFields()
})

function validateAllFields () {
  var validFields = $('.is-valid')

  if (validFields.length === 3) {
    $('#submitButton').prop('disabled', false)
  } else {
    $('#submitButton').prop('disabled', true)
  }
}
