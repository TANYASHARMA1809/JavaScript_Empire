function setName(username){
    this.username=username
}

function create(username,email,password){
   // setName(this.username) //email or password he access honge..username nhi hoga
    
   setName.call(this,username)
 
   //call hmare current execution context kisi or function ko pass krdeta hai

    this.email=email
    this.password=password
}

const call=new create("tanya","tanya.com","123")
console.log(call)