//spread operator

let a=[1,2,3]
let b=[4,5,6]

const all=[...a,...b]
console.log(all)


console.log(Array.isArray("tanya"))//gives true or false
console.log(Array.from("tanya"))//convert into array
console.log(Array.from({name:"tanya"}))//return [],empty array..we have to define from key or value what we have to make array

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
