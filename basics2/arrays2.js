const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// const all = marvel.concat(dc)
// console.log(all)

// const all2 = [...marvel,...dc]
// console.log(all2)

const newarr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_newArray = newarr2.flat(Infinity)
// console.log(real_newArray)

// console.log(Array.isArray("Piyush"))
// console.log(Array.from("Piyush"))
// console.log(Array.from({name: "Piyush"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))