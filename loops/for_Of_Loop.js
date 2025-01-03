const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)    
}

const greeting = "hlo world"
for (const element of greeting) {
    if(element == " "){
        continue
    }
    console.log(`each char is ${element}`);
}

