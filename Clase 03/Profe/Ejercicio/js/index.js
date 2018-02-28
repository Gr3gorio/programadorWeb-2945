var dia = prompt ('ingrese un dia')

switch (dia){
    case ('lunes'):
    case ('martes'):
    case ('miercoles'):
    case ('jueves'):
    case ('viernes'):
    console.log('dia de la semana')
    break

    case('sabado'):
    case('domingo'):
    console.log('fin de semana')
    break
    
    default :
    console.log('no es un dia valido')
}