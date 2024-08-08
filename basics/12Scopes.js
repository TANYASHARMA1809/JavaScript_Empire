//{} is block scope
//outside of block scope is global scope

if(true){
    let a=10
    var b=30
    const c=40
}

//DOM is document object model..it means that how html page is manipulated on javascript browser


//this is closure is which child dunction parent fuction k variable ko access krpate hai
function one(){
    const user="tanya"
    function two(){
        const email="tanya.com"
        console.log(user)
    }
   // console.log(email)..this gives error bcoz two k variables ka scope upr he khtm hogya

    two()
}
one()


