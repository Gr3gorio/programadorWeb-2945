function User(firstName,lastName,age,address){
    var id = Math.random()
    this.getid = function(){
        return id 
    }
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address= address
    this.fullName = function(){
        console.log(firstName+' '+lastName) 
        }
    this.legalAge=function(age){
        if (age=>18){
            return true
        }else{
            return false
        }
    }
}

var user1 = new User('juan','perez',26,'CABA')

user1.fullName()
console.log(user1.getid(),user1.firstName,user1.lastName,user1.age,user1.address,
user1.legalAge())