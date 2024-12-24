let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log()

let myCreated_Date1 = new Date(2023,0,1)
let myCreated_Date2 = new Date(2023,0,1,12,30)
let myCreated_Date3 = new Date("2023-01-01")
let myCreated_Date4 = new Date("1-02-2023")

// console.log(myCreated_Date1.toLocaleString())
// console.log(myCreated_Date2.toLocaleString())
// console.log(myCreated_Date3.toLocaleString())
// console.log(myCreated_Date4.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreated_Date1.getTime())
console.log(Math.floor(Date.now()/1000))


let NewDate = new Date()
console.log()