const mynums = [1,2,3]

const mytotal = mynums.reduce((acc , cureeval) =>{
    console.log(`acc : ${acc} and cureeval : ${cureeval}`)
    return acc + cureeval
},0)
console.log(mytotal)