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
        console.log("pls enter the value")
        return
    }
    return `${username} just loggedin`
}
console.log(loginUSER())