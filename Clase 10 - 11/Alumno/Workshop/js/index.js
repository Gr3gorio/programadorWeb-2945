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

function addItem () {
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
