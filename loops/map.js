const num = [1,2,3,4,5,6,7,8,9,10]

const newnum = num.map((n) =>n+10)
// console.log(newnum)



const mynewnum = num
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num>40)
                .filter( (num) => num>70)
console.log(mynewnum)
