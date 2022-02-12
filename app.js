let input1=document.querySelector("#first");
let input2=document.querySelector("#second");

let check=document.querySelector("#check")
let option=document.querySelector("#option")
let result=0;

check.addEventListener("click",()=>{
    if(option.value =="+"){
        result+=Number(input1.value) + Number(input2.value)
        alert(result);
    }else if(option.value =="-"){
        result+=Number(input1.value) - Number(input2.value)
        alert(result);
}else if(option.value =="*"){
    result+=Number(input1.value) * Number(input2.value)
    alert(result);}
    else if(option.value =="/"){
        result+=Number(input1.value) / Number(input2.value)
        alert(result);}
});