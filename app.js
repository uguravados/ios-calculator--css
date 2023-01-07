let num0 = document.getElementsByClassName("num0")
let num1 = document.getElementsByClassName("num1")[0]
let num2 = document.getElementsByClassName("num2")
let num3 = document.getElementsByClassName("num3")
let num4 = document.getElementsByClassName("num4")
let num5 = document.getElementsByClassName("num5")
let num6 = document.getElementsByClassName("num6")
let num7 = document.getElementsByClassName("num7")
let num8 = document.getElementsByClassName("num8")
let num9 = document.getElementsByClassName("num9")
let display = document.getElementsByClassName("display")[0]
let gridContainers = document.getElementsByClassName("gridContainer")
let gridContainer = document.getElementsByTagName(`div`)
let visible = document.getElementsByClassName("visible")
let process = document.getElementsByClassName("process")
let result = document.getElementsByClassName("result")[0]
let equal = document.getElementsByClassName("equal")[0]


let num = 0
let islem =''

Array.from(process).forEach((e)=>{
    e.addEventListener('click',(e)=>{
        islem =e.target.innerHTML
        console.log(e.target.innerHTML)
       
            console.log(display.innerHTML)
            num=Number(display.innerHTML)
            result.innerHTML=display.innerHTML
            display.innerHTML=''
            
        
})})

equal.addEventListener('click',(e)=>{
    if(islem=='x'){
        result.innerHTML=num*display.innerHTML
        display.innerHTML=''
        num=''
    }else if(islem=='-'){
        console.log(islem)
        result.innerHTML=num-display.innerHTML
        display.innerHTML=''
        num=''
    }else if(islem=='+'){
        result.innerHTML=num+Number(display.innerHTML)
        display.innerHTML=''
        num=''
    }else if(islem=='/'){
        result.innerHTML=num/display.innerHTML
        display.innerHTML=''
        num=''
    }
   
})
// console.log(visible)

// for(i=0;i<visible.length;i++){
//     visible[i].addEventListener('click',(e)=>{
//         display.innerHTML+=e.target.innerHTML
//     })
// }
Array.from(visible).forEach((e)=>{
    e.addEventListener('click',(e)=>{
        display.innerHTML+=e.target.innerHTML
})})
   
        



// buttons[0].addEventListener('click',(a)=>{
//     console.log(a.target.parentElement.parentElement)
// })
// console.log(buttons2)
// console.log(buttons)
// console.log(fives)
one.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    display.innerHTML=e.target.innerHTML
})