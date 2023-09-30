const cont1=document.getElementById("one-card")
const cont2=document.getElementById("two-card")


cont1.addEventListener("click",()=>{
    cont2.style.display='block'
    cont1.style.display='none'
})

cont2.addEventListener("click",()=>{
    cont1.style.display='block'
    cont2.style.display='none'
})