var studentsList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS' ]

var stringStudents = JSON.stringify(studentsList)

localStorage.setItem('studentsList', stringStudents)

function addStudent (studentName) {
  var saveStudents = localStorage.getItem('studentsList')

  var parsedStudentsList

  if (JSON.parse(saveStudents)) {
    parsedStudentsList = JSON.parse(saveStudents)
  } else {
    parsedStudentsList = []
  }

  var upperCaseName = studentName.toUpperCase()

  parsedStudentsList.push(upperCaseName)

  var NewList = JSON.stringify(parsedStudentsList)

  localStorage.setItem('studentsList', NewList)
}

addStudent('Gregorio')
