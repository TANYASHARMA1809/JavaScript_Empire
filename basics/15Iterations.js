//loops of arrays

//for of 

const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i)
}

const greet="Helloo"
for(const g of greet){
    console.log(`${g}`)
}

//maps..they have unique value and value is entered in same order
//we use maps bcoz we cannot itrrate in objects in for-of loops
const map=new Map()
map.set('IN',"India")
map.set('USA',"United")
console.log(map)

for(const [key,value] of map){
    console.log(key,value)
}

// for objects we use for-in loop
const obj={
    js:"Javascript",
    cpp:"c++",
    rb:"ruby"
}
for(const key in obj){
    console.log(`${key}-> ${obj[key]}`)
}

//forEach loops

const coding=[1,2,3,4,5,6]

//forEach ko chahiye callback function..callback function ka koi name nhi hota
coding.forEach( function (item){
    console.log(item)
})

coding.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)//function ka refernce dnge..usko call nhi krnge

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const my=[
    {
        name:"JS",
        file:"js"
    },
    {
        name:"Java",
        file:"java"
    },
    {
        name:"Python",
        file:"py"
    },
]

const value=my.forEach((item)=>{ //each item hold that index value in array
    console.log(item)
    return item
})//forEach alwanya return undefined
//console.log(value) //undefined

//filter
//filter ke andr call back function hota hai,or ek condition hoti hai
//jo bhi condition satisfy hogi usko return kia jayega
const nums=[1,2,3,4,5,6,7,8]

const ans=nums.filter( (n) => n>4)

const ans2=nums.filter((n)=>{
    return n>4
})

console.log(ans)

const a=[]
nums.forEach((num)=>{
    if(num>4){
        a.push(num)
    }
})
console.log(a)

//map

const mapArr=[1,2,3,4,5,6,7,8,9,10]

const b=mapArr.map((num)=> num+10)//it automatically return value
console.log(b)


const c=mapArr.map((num)=> num*10 )
              .map((num)=> num+1)
              .filter((num)=>num>=40)

console.log(c)

//reduce

const reduceArr=[1,2,3,4,5]
// const sum=reduceArr.reduce(function(acc,curr){
//     return acc+curr
// },0)

const sum=reduceArr.reduce((acc,curr)=> acc+curr,0)
console.log(sum)