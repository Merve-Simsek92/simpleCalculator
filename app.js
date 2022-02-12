let input1=document.querySelector("#first");
let input2=document.querySelector("#second");

let check=document.querySelector("#check")
let option=document.querySelector("#option")
result=0

check.addEventListener("click",()=>{
    if(option.value =="+"){
        result+=input1.value + input2.value
        alert(result)
    }
})