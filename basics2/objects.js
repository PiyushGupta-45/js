//singleton
//  object.create is the way to create a singleton object


//object literals

const object = {
    name:"Piyush",
    "full name":"Piyush Gupta",
    age:19,
    location:"Delhi",
    email:"piyush@gmail.com",
    isLoggedIn:true,
    lastLoggedin:["monday","saturday"]
}

// console.log(object.name)
// console.log(object["age"])

// console.log(object.full name)  cant print this it will give error
// console.log(object["full name"])


object.email = "piyush@yahoo.com"
// Object.freeze(object)

object.email = "piyush@yahoo00000000000.com"
// console.log(object)

object.greeting = function(){
    console.log("hlo")
}

object.greeting2 = function(){
    console.log(`hlo ${this.age}`)
}

console.log(object.greeting2())
// console.log(object)