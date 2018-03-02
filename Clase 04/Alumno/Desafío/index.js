
// primera funcion buscar por nota

var students =[
    {firstName : 'juan', lastName : 'perez',note : 8},
    {firstName : 'maria', lastName : 'rodriguez',note : 5},
    {firstName : 'daniela', lastName : 'medina',note : 10}
]
var note = prompt ('ingrese la nota')

function promedio (note){
for(var i=0 ; i<students.length; i++){
    var student = students[i]
    if ( student.note >=note ){
        console.log('estudiante con nota mayor o igual al indicado',students[i])
    }
}
}
promedio(note)

//segunda funcion buscar por nombre o apellido

var students =[
    {firstName : 'juan', lastName : 'perez',note : 8},
    {firstName : 'maria', lastName : 'rodriguez',note : 5},
    {firstName : 'daniela', lastName : 'medina',note : 10}
]
var nombreApellido = prompt ('ingrese el nombre o apellido ')

function buscarAlumno(nombreApellido){
    for(var i=0;i<students.length;i++)
    var student=students[i]
    if(student.firstName===nombreApellido || student.lastName===nombreApellido){
        console.log('los datos del estudiante son : ',students[i])
    }
}

buscarAlumno(nombreApellido)

