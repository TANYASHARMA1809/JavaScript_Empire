// JavaScript ek sequenciallly run language hai
// events in js are also sequenciall except some asynchronous programming
// some activity or events of browsers are handled by enents in JS


//onclick event

document.getElementById('owl').onclick=function(){
    alert("you")
}

//use addEventListener which have 3 parameter, event name,function,default parameter false

document.getElementById('owl').addEventListener('click',function(){
    alert('owlll')
})

//attachEvent()
//jQuery - on 
document.getElementById('images').addEventListener('click',function(e){
    console.log(e) // gives browser and environment event
    console.log("upper element")
},false)

document.getElementById('owl').addEventListener('click',function(e){
    console.log(e) // gives browser and environment event
    console.log("inner element")
    e.stopPropagation()
},false)

//type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode


//event propagation has 2 things
//event bubbling and event capturing
//default parameter false is event bubbling
//bubbling niche se upr jata hai(inside to upper element)
//capturing is top to bottom when default parameter is true
// false case = we have e.stopPropagation(), by this event inside ka chlne k bd top elemnt pr nhi jayega  


//e.preventDefault()...by this defaut event nhi chlega

//hide the image after clicking

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode); // e.target, hme image tag dega jispr click krnge hm...e.target.parentNode hmko vo value dega jo images k uor hai, mtln <li></li> tag
    console.log(e.target.tagName);//gives tag IMG or Li
   
    if(e.target.tagName ==='IMG'){
        console.log(e.target.id)
        let remove=e.target.parentNode;
        remove.remove();
    }

    // let remove=e.target.parentNode;
    // remove.remove(); //case 1
    //remove.parentNode.removeChild(remove)// case 2
})


