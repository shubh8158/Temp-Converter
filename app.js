let c=document.querySelector("#Celsius");
let f=document.querySelector("#Farenhit");
let k=document.querySelector("#Kelvin");
let btn=document.querySelector(".btn")


c.addEventListener("input",()=>{
    let cTemp= parseFloat(c.value);
    let fTemp=(cTemp*(9/5))+32;
    let kTemp=cTemp+273.15

    f.value= Math.floor(fTemp);
    k.value=Math.floor(kTemp);
})

f.addEventListener("input",()=>{
    let fTemp= parseFloat(f.value);
    let cTemp=(fTemp-32) *(5/9);
    let kTemp=(fTemp-32)*(5/9)+273.15

    c.value= Math.floor(cTemp);
    k.value=Math.floor(kTemp);
})
k.addEventListener("input",()=>{
    let kTemp= parseFloat(k.value);
    let cTemp=kTemp - 273.15;
    let fTemp=(kTemp-273.15) *(9/5) +32;

    c.value= Math.floor(cTemp);
    f.value=Math.floor(kTemp);
})

btn.addEventListener("click",()=>{
    c.value="";
    f.value="";
    k.value="";
    btn.style.color=red;
})