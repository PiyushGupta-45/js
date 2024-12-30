const user = {
    username : "Piyush",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website` )
        // console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username="gupta"
// user.welcomeMsg()
// console.log(this);




// const add2 = (num1,num2) => num1+ num2
// const add2 = (num1,num2) => (num1+ num2)
const add2 = (num1,num2) => (num1+ num2)

console.log(add2(3,4))

