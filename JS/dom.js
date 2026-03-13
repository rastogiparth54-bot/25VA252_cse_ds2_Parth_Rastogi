function result(){
    let inputValue=document.getElementById('inputData').Value;


let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="red"

document.getElementsByTagName('body')[0].style.backgroundColor="green";


}

let paraBkg=document.getElementById('para');

function colorChange(){
    paraBkg.style.backgroundColor="blue";
}
paraBkg.addEventListener('mouseout',colorChange);
