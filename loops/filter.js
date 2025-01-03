const mynums =[1,2,3,4,5,6,7,8,9,10]

// const newv = mynums.filter( (num) => num > 4)
const newv = mynums.filter( (num) => {
    return num > 4
})

const newnum = []

mynums.forEach((num)=>{
    if(num > 4){
        newnum.push(num)
    }
})


console.log(newnum)