let value = document.querySelector("#value");
let start = document.querySelector("#start");
let stoped = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let decrement = document.querySelector("#decrement");
let counter = null;
let x = 0
const updatedValue = () =>{
value.innerHTML = `<h2 id="value">${x}</h2>`
}
const add = () =>{
    x++
    updatedValue();
}
const sub = () =>{
    if(x==0){
        clearInterval(counter);
    counter= null;
    updatedValue();
    }else{
    x--
    updatedValue();
    }
}
start.addEventListener("click",function(){
    if(counter!==null){
        clearInterval(counter)
    }else
    counter=setInterval(add,10)
    
})
stoped.addEventListener("click",function(){
    clearInterval(counter);
    counter=null;
})
reset.addEventListener("click",function(){
    clearInterval(counter);
    counter= null;
     x=0;
updatedValue();
    

})
decrement.addEventListener("click",function(){
    if(counter!==null){
        clearInterval(counter);
        counter=null;
    }else
    counter = setInterval(sub,10)
})