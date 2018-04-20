var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address: {
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
    address: {
      street: 'Zapiol',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
    address: {
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

/* function showStudents (studentsList) {
    var student
    var rootContainer = document.getElementById('root')
    rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
    var listContainer = document.getElementById('list')
    for (var i = 0; i < studentsList.length; i++) {
      student = students[i]
  
      var liStudent = createStudentLi(
        student.firstName,
        student.lastName,
        student.dni,
        student.examResults
      )
  
      listContainer.appendChild(liStudent)
    }
  }
  
  function createStudentLi (firstName, lastName, dni, examResults) {
    var li = document.createElement('li')
  
    li.className = 'list-group-item '
  
    li.innerHTML =
      '<h1>' + firstName + '</h1><p>' + lastName + '</p><p>' + examResults + '</p><p>' + dni+ '</p>'  
    return li
  }

  function eliminar (students.firstName){
      var eliminarNombre = document.getElementById('li')
      eliminarNombre.parentNode.removeChild()
  }
  
  showStudents(students)

  eliminar('Daniela')*/

var rootContainer = document.getElementById('root')
rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'

var listContainer = document.getElementById('list')

for (var i = 0; i < students.length; i++) {
  student = students[i]

  var liStudent = createStudentLi(
    student.firstName,
    student.lastName,
    student.dni,
    student.examResults
  )

  listContainer.appendChild(liStudent)
}

function createStudentLi (firstName, lastName, dni, examResults) {
  var li = document.createElement('li')

  li.className = 'list-group-item '

  li.id = dni

  li.innerHTML =
    '<h1>' +
    firstName +
    '</h1><p>' +
    lastName +
    '</p><p>' +
    dni +
    '</p><p>' +
    examResults +
    '</p>'

  return li
}
//FUNCION QUE BUSCA EN EL ARRAY

function searchIndexByText (text, studentsList) {
  var index = -1

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      text &&
      typeof text === 'string' &&
      (student.firstName.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
        student.lastName.toUpperCase().indexOf(text.toUpperCase()) !== -1)
    ) {
      index = i
      break
    }
  }

  return index
}

//FUNCION ELIMINAR

function deleteStudentNode (text, studentsList) {
  var index = searchIndexByText(text, studentsList)
  var listContainer = document.getElementById('list')
  if (index !== -1 && listContainer) {
    var studentNode = document.getElementById(studentsList[index].dni)
    listContainer.removeChild(studentNode)
  }
}

deleteStudentNode('matias', students)
