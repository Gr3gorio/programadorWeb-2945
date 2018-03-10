//Crear una función constructora de objetos películas

var peliculaDB = [
    {title : 'el lobo de wall street',
    year: 2013,
    director : 'Martin Scorsese',
    actorPrincipal :'leonardo di caprio',
    actorSecundario:'jhona hill'
    },
    andrea={title : 'el padrino',
    year: 1972,
    director : 'Francis Ford Coppola',
    actorPrincipal :'Marlon Brandon',
    actorSecundario:'Al pacino'
    }
]
function pelicula(title,year,director,actores=[],){
    var id = Math.random()
    this.getId = function(){
        return id
    }
    this.director=director
    this.year=year
    this.title=title
    this.actorPrincipal=actorPrincipal
    this.actorSecundario=actorSecundario

    this.setTitle = function(title){
        this.title=title
    }
    this.getTitle=function(){
        return title
    }
    this.setYear = function(year){
        this.year=year
    }
    this.getYear=function(){
        return year
    }
    this.setDirector = function(director){
        this.director=director
    }
    this.getDirector=function(){
        return director
    }
    this.setActorPrincipal = function(actorPrincipal){
        this.actorPrincipal=actorPrincipal
    }
    this.getActorPrincipal=function(){
        return actorPrincipal
    }
    this.setActorSecundario = function(actorSecundario){
        this.actorSecundario=actorSecundario
    }
    this.getActorSecundario=function(){
        return actorSecundario
    }
    }
    
var newPelicula = new pelicula(peliculaDB.title,peliculaDB.year,peliculaDB.actorPrincipal,peliculaDB.actorSecundario)

console.log(newPelicula)