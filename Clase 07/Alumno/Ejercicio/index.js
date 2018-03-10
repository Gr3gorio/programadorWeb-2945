var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

var stringStudents = JSON.stringify(studentsList)

localStorage.setItem('students', stringStudents)

var localStudents = localStorage.getItem('students')

var parsedStudnets = JSON.parse(localStudents)



function addStudent (studentName) {
var localStudents = localStorage.getItem('studentsList')

var parsedStudentsList

if (localStudents){
    parsedStudentsList = JSON.parse(localStudents)
}else{
    parsedStudentsList=[]
}
  var upperCaseName = studentName.toUpperCase()

  parsedStudentsList.push(upperCaseName)
  var NewList = JSON.stringify(parsedStudnets)
  localStorage.setItem('students', NewList)
}

addStudent('gregorio')










