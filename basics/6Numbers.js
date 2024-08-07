let n=100
console.log(n)

const num=new Number(500)
console.log(num)

console.log(num.toString())
console.log(num.toFixed(2))//decimal k bd ke points

console.log(num.toPrecision(3))
console.log(num.toLocaleString('en-IN'))//gives commas acc. to india currency


//--------------------------maths---------------------


console.log(Math)//it is object

console.log(Math.abs(-4))

console.log(Math.random())//gives value btwn 0 to 1

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)

