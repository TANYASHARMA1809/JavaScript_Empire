// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)
// console.log("02" >1)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)//true

//console.log(undefined==0)//undefined always gives false in all the cases

//=== checks values and datatype also
// console.log("2"===2)

//==========================================

//2 types of data types

//PRIMITIVE DATATYPE,these are call by value..inme jo bhi changes hote h inko copy krke kiye jate hai,exact refernce nhi dia jata

// string number boolean null undefined bigInt symbol(used to make some value unique)

//javacript is dynamically typed language, as datatype is not defined 

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')

//NON PRIMITIVE TYPE(Reference type), jinka memory mai allocation directly kia jata hai

//array object functions

const arr=[1,2,3];

const obj={
    name:"tanya",
    age:21
}

const fun=function(){ 
    console.log("Hii")
}

console.log(typeof fun)// function object

//-------------------------------memory-----

//Stack Memory(Primitive)..variable ka copy milta hai
//Heap(Non-Primitive)..refernce milta hai(actually changes original value mai he hoti hai)

let name="Placed Tanya"
let name2=name
name2="Tanya"
console.log(name2)
console.log(name)


let user={
    email:"tanya.com",
    upi:123
}

let user2=user
 user2.email="tannu.com"
 console.log(user.email)
 console.log(user2.email)
