
// con operador for 
var diasDeLaSemana = ['lunes', 'martes','miercoles','jueves','viernes','sabado','domingo']
var dia = prompt('ingrese un dia')


for (i=0 ; i <= diasDeLaSemana.length ; i++){
    
    

    if(dia ==='sabado' || dia === 'domingo'){
        console.log('es dia de semana')
    }else{
        console.log('no es dia de semana')
    }
}

//con operador switch

var diasDeLaSemana = prompt ('ingrese un dia de la semana')

switch(diasDeLaSemana){

    case('lunes'):
    case('martes'):
    case('miercoles'):
    case('jueves'):
    case('viernes'):
    console.log('no es fin de semana')
    break

    case('sabado'):
    console.log('es fin de semana')
    break

    case('domingo'):
    console.log('es fin de semana')
    break
}