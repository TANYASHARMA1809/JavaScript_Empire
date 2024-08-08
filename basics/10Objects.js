//object 2 tariko se bnate/declare hota hai
//object literals = no singleton
//constructor declare = singleton mtlb ek he object bnega...Object.create()

//object literals

const sym=Symbol("key1")//Symbol ko constructor ki trh new keywork ka use kiye bina initialise krnge


const a={
    name:"tanya",//name already(key) string ki trh mani jati hai JS mai,vo likhte nhi h hm bs
    age:21,
    email:"tannu@gmail.com",
    lastLofin:["monday","tuesday"],
    "full name":"tanya sharma",//isko ab (.) se call nhi krskte
    [sym]: "mykey1"
}

console.log(a.name)
console.log(a["name"])
console.log(a["full name"])
console.log(a[sym])//Symbol ko ese he access krte hai

a.email="tanya.com"//update values 
//Object.freeze(a) //freeze krne k bd koi bhi update nhi hoga
a.email="gooogle.com" //will not work but gives no error

a.greeting=function(){
    console.log("Hello Most eligible fresher ")
}
console.log(a.greeting())

a.greeting1=function(){
    console.log(`Hello Most eligible fresher ${this.name} `)
}
console.log(a.greeting1())

