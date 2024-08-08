
const arr=[0,1,2,3,4]

const arr2=new Array(1,2,3,4,5,6,7)

//methods

arr.push(7)
arr.push(8)
arr.pop()
arr.unshift(10)//starting mai add hojega
arr.shift()//starting se nikal jayega pop hojega

console.log(arr.includes(3))

const newArr=arr.join()//converts array into string

console.log(newArr)
console.log(arr)

//slice splice

console.log(arr)
const n=arr.slice(1,3)// slice do not include last range,it do not change actual array
console.log(n)
console.log(arr)

const m=arr.splice(1,3)//splice includes the last range, it destruct the original array..return original array after removing splice array elements
console.log(m)
console.log(arr)


