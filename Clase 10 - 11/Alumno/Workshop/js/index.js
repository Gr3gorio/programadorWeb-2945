//crear la lista
/*function createStudentLi (firstName, dni) {
  var li = document.createElement('li')

  li.className = 'list-group '

  li.id = 'mainList'

  li.innerHTML = '<h1>' + firstName + '</h1><p>' + dni + '</p>'

  return li
}

//mostrar los estudiantes

function showStudents (studentsList) {
  var student
  var rootContainer = document.getElementById('mainList')
  rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
  var listContainer = document.getElementById('list')
  for (var i = 0; i < studentsList.length; i++) {
    student = students[i]

    var liStudent = createStudentLi(student.firstName, student.dni)

    listContainer.appendChild(liStudent)
  }
}*/

/*function addItem () {
  var ul = document.getElementById('mainList')

  var nombre = document.getElementById('firstName')
  var dni = document.getElementById('dni')

  var li = document.createElement('li')

  li.innerHTML = '<h1>' + nombre.value + '</h1><p>' + dni.value + '</p>'

  ul.appendChild(li)

  var student = {
    firstName: nombre.value,
    dni: dni.value
  }

  addList(student)
}

function removeItem () {
  var ul = document.getElementById('mainList')

  var dni = document.getElementById('deleteDni')

  var item = document.getElementById(dni.value)

  ul.removeChild(item)
}

function addList (student) {
  var temporalList = localStorage.getItem('mainList')

  temporalList = temporalList ? JSON.parse(temporalList) : []

  temporalList.push(student)

  var parsedList = JSON.stringify(temporalList)

  localStorage.setItem('savedList', parsedList)
}

function deleteStudent (student) {
  var studentsList = localStorage.getItem('savedList')

  var parsedList = studentsList ? JSON.parse(studentsList) : []

  var index = searchIndexByText(text, parsedList)

  if (index !== -1) {
    parsedList.splice(index, 1)

    var stringList = JSON.stringify(parsedList)

    localStorage.setItem('studentsList', stringList)
  }
}
*/

function createStudent (student) {
  var li = document.createElement('li')

  li.className = 'list-group-item'

  li.id = student.dni

  li.innerHTML =
    '<h1>' + student.firstName + '<h1><h3>DNI: ' + student.dni + '<h3>'

  return li
}

//nombre
document.getElementById('firstName').onblur = function (event) {
  var firstNameNode = event.target

  if (firstNameNode.value) {
    firstNameNode.classList.remove('is-invalid')
    firstNameNode.classList.add('is-valid')
  } else {
    firstNameNode.classList.remove('is-valid')
    firstNameNode.classList.add('is-invalid')
  }

  validateButtonSimple()
}

//dni
document.getElementById('dni').onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  var parsedDni = parseInt(value, 10)

  if (
    parsedDni &&
    !isNaN(parsedDni) &&
    parsedDni >= 0 &&
    searchIndexByDni(parsedDni) === -1
  ) {
    dniNode.classList.remove('is-invalid')
    dniNode.classList.add('is-valid')
  } else {
    dniNode.classList.remove('is-valid')
    dniNode.classList.add('is-invalid')
  }

  validateButtonSimple()
}

addStudentButton.onclick = function (event) {
  var firstNameNode = document.getElementById('firstName')
  var dniNode = document.getElementById('dni')
  var parsedDni = parseInt(dniNode.value, 10)

  addStudentSimple(firstNameNode.value, parsedDni)

  firstNameNode.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')

  firstNameNode.value = ''
  dniNode.value = ''
}

function validateButtonSimple () {
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields.length === 2) {
    addStudentButton.disabled = false
  } else {
    addStudentButton.disabled = true
  }
}
