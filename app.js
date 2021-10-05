function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + ''
    if(pinString.length === 4){
        return pinString 
    }else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin() 
    document.getElementById('displayPin').value = pin
}

document.getElementById('key-pad').addEventListener('click', 
function(event){
    const number = event.target.innerText
    const calcInput = document.getElementById('type-numbers')
    if(isNaN(number)){
        if(number === 'C'){
           calcInput.value = ''
        }
    }else{
        
        calcInput.value += number
    }
    
})


function verifyPin(){
    const pin = document.getElementById('displayPin').value
    const calcInput = document.getElementById('type-numbers').value
    const successMs = document.getElementById('notify-success')
    const failError = document.getElementById('notify-fail')

    if(pin === calcInput){
        successMs.style.display = 'block'
        failError.style.display = 'none'

    }else{
        failError.style.display = 'block'
        successMs.style.display = 'none'

    }
}

let count = 0;
console.log(parseInt('count'+ 1));
const p =  Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9)
console.log(p)
