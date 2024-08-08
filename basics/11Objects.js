// constructor object create

//const a=new Object();//singleton

//console.log(a)

const b={
    email:"tanya@gmail.com",
    fullname:{
        user:{
            first:"tanya",
            last:"sharma"
        }
    }
}

const obj1={1:"a"}
const obj2={2:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2) //merge the object

const obj3={...obj1,...obj2} //works same...spread operator
console.log(obj3)

console.log(Object.keys(obj3))  //datatype is array

const n={
    name:"JS",
    price:"997"
}
//console.log(n.name)

const {name }=n //destructuring
console.log(name)





