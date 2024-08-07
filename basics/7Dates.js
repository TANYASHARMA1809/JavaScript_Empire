let date=new Date()//date is object in JS
console.log(date)
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toJSON())
console.log(date.toISOString())
console.log(date.toLocaleString())

let myDate=new Date(2023,0,23)
console.log(myDate.toDateString())

let TimeStamp=Date.now()
console.log(TimeStamp)//mili second mai time hai
console.log(myDate.getTime())//mili second mai time hai

console.log(Math.floor(Date.now()/1000))//time in second

let newDate=new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})