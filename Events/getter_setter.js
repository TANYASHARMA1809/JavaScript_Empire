class User{
    constructor(email,password){
        this.email=email
        this.password=password

    }
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}tannu` 
    }
    set password(value){
        //this.password=value //Maximum call stack size exceeded
        this._password=value
    }
}
const tanya=new User("tanya.com","abc")
console.log(tanya.password)