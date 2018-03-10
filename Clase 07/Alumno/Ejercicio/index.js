var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

var stringStudents = JSON.stringify(studentsList)

localStorage.setItem('students', stringStudents)

var localStudents = localStorage.getItem('students')

var parsedStudnets = JSON.parse(localStudents)

//var studentName = 'Gregorio'

function addStudent (studentName) {
var studentUpperCase = studentNameToUpperCase(studentName)

var NewStudenList= studentsList.push(studentUpperCase)
  
}

var NewStringStudents = JSON.stringify(NewstudentsList)

localStorage.setItem('NewStudents', NewStringStudents)








