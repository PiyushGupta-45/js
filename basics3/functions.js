function one (){
    console.log("P");
    console.log("i");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");    
}

// one()

// function add2number(num1,num2){
//     console.log(num1 + num2);
// }

function add2number(num1,num2){

    // let r = num1 + num2
    // return r;
    return num1+num2
}

// add2number(3,4)

const result = add2number(3,4)

// console.log(result);

// function loginUSER(username){
//     return `${username} just loggedin`
// }

// console.log(loginUSER("piyush"))
// console.log(loginUSER(""))
// console.log(loginUSER())



function loginUSER(username){
    if(username === undefined){
        // console.log("pls enter the value")
        return
    }
    return `${username} just loggedin`
}
// console.log(loginUSER())



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,300,400))

const user = {
    username:"Piyush",
    price :100
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username:"wfwf",
    price :100
})

const mynewArray=[200,100,400,600]

function returnSecondValue(getarray){

    return getarray[1]

}
// console.log(returnSecondValue(mynewArray))
// console.log(returnSecondValue([20,300,562,41]))