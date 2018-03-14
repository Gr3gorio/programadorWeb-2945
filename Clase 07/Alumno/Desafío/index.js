var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO']

var stringyStudentsList = JSON.stringify(studentsList)
localStorage.setItem('studentsList',stringyStudentsList)


function removeName(name){
var savedStudentsList = localStorage.getItem('studentsList')
var studentsListParsed = JSON.parse(savedStudentsList)

for (var i=0; i< studentsListParsed.length;i++){
    var students = studentsListParsed[i]
    if (students === name){
        var pos = studentsListParsed.indexOf(name)
        var elementoElimando = studentsListParsed.splice(pos,1)
        console.log(studentsListParsed)
    }else {
        console.log('no esta registrado este nombre ')
    }
}
}

removeName('CARLOS')

//corre el else aunque este registrado el nombre en el array