const p1=new Promise(function(resolve,reject){
    //do any async task
    //db calls, cryptography, network

    setTimeout(function(){
        console.log('async completed')
        resolve()//connected to .then()
    },1000)
})

p1.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async to resolved")
})

const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"tanya", gender:"female"})
    },1000)
})
p3.then(function(user){
    console.log(user)
})

const p4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name:"tanu", pass:"1234"})
        }else{
            reject('error detected')
        }
    },1000)
})

p4.then((user)=>{
    console.log(user)
    return user.username       
})
.then((username)=>{
    console.log(username)
})
.catch(function(e){
    console.log(e)
})
.finally(()=>{
    console.log("always run")
})


const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name:"JS", pass:"1234"})
        }else{
            reject('error JS went wrong')
        }
    },1000)
});

async function consume(){
    try{
        const response=await p5
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consume()

//async await

// async function getAllUsers(){
//     try{
//         const response=fetch('https://jsonplaceholder.typicode.com/users'); //data is coming in String
//         //console.log(response);
//         const data=await response.json() //response convert to json formet(object format)
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})


