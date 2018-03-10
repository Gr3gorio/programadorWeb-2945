//-------Crea una función que permita buscar un nombre en un array de alumnos-----
var objectList = [
    { firstName: 'Adrián', lastName: 'Ferré' },
    { firstName: 'Mateo', lastName: 'Molina' },
    { firstName: 'Maria', lastName: 'Fernandez' }
  ]
  var nombre = prompt ( ' ingrese el nombre')
  var apellido = prompt ( 'ingrese el apellido')
   
  if (typeof nombre==='string'&& typeof apellido==='string'){
        var nombre = nombre.toLowerCase()
        var apellido = apellido.toLowerCase()      
            }if( nombre.substring(-1)=='adrian'&&apellido.substring(-1)=='ferre'){ 
                console.log(objectList [0])
            } if(nombre.substring(-1)=='mateo'&&apellido.substring(-1)=='molina'){
                console.log(objectList [1])
            }  if(nombre.substring(-1)=='maria'&& apellido.substring(-1)=='fernandez'){
                console.log(objectList [2])
  }else {
      console.log('no ingreso datos validos')
  }

  //--------Crear una función que permita agregar un alumno a un array--------------

  var objectList = [
    { firstName: 'Adrián', lastName: 'Ferré' },
    { firstName: 'Mateo', lastName: 'Molina' },
    { firstName: 'Maria', lastName: 'Fernandez' },
  ]
  var addFirstName = prompt('ingrese el nombre del alumno')
 var addLastName = prompt('ingrese el apellido del alumno')

  objectList.push =({firstName:addFirstName})
  objectList.push = ({lastName:addLastName})

  console.log(objectList.firstName)

