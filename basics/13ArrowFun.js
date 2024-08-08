const user={
    username:"tanya",
    msg:function(){
        console.log(`${this.username} welcome`)
    }
}

user.msg()
user.username="tanu"
user.msg()

console.log(this)// it will give empty object {}
//but is we console in browser,this..then we will get window global object


function a(){
    let name="tanu"
    console.log(this.name) //gives undefined bcoz this ko hm function k andr access nhi krkste sief object k andr he
    console.log(this) //this will return soo many methods
}
a()

//arrow function

// const chai=()=>{
//     let user="tanya"
//     console.log(this.user)//undefined
// }
// chai()


