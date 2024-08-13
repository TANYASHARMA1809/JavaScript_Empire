
console.log(Object.getOwnPropertyDescriptor(Math,"PI"))


const data={
    name:"chocolate",
    price:200,
    isAvailable:true,

    orderData:function(){
        console.log("data not available")
    }

}

console.log(Object.getOwnPropertyDescriptor(data,"name"))

// Object.defineProperty(data,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(data,"name"))


for(let [key,value] of Object.entries(data)){
    if(typeof value !=='function'){
        console.log(`${key} = ${value}`)
    }
    
}