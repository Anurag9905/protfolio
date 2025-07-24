const button=document.querySelector(`button`);

button.addEventListener(`click`,()=>{

const input1=document.getElementById(`first`)
const number1=Number(input1.value)

const input2=document.getElementById(`second`)
const number2=parseFloat(input2.value)

const result=number1/(number2*number2);
const num= document.getElementById(`Result`);
num.textContent="BMI :"+result;

})

document.addEventListener(`keydown`,(event)=>{

    if(event.key===`Enter`){
const input1=document.getElementById(`first`)
const number1=Number(input1.value)

const input2=document.getElementById(`second`)
const number2=parseFloat(input2.value)

const result=number1/(number2*number2);
const num= document.getElementById(`Result`);
num.textContent="BMI :"+result;
    }
})




