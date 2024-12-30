(function one(){

    //named iife
    console.log("db connected")
})(); // we have to end this with semicolon


( (name) =>{
    console.log(name)
} )("piyush"); 