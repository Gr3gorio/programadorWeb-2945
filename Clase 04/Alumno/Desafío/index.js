var alumnos =[
    {firstName = 'juan', lastName = 'perez',nota = '8'},
    {firstName = 'maria', lastName = 'rodriguez',nota = '5'},
    {firstName = 'daniela', lastName = 'medina',nota = '10'},
]

var notaSolicitada = prompt ('ingrese la nota')

function promedio (){
for(i=0 ; i<alumnos.length; i++){
    var alumnos = alumnos[i]
    if (nota >= notaSolicitada){
        console.log('los alumnos con notas mayor o igual a la solicitada son : '+alumnos[i])
    }
}
}

promedio()