
import { deactivateBtn1, activateBtn1 } from './utils.js';



let randomNumber = getRandomNumber(1, 10)
let lives = 3

function getRandomNumber(x,y) {
    return Math.floor(Math.random() *y) + x   
}
const btn1 = document.querySelector("#btn1")
btn1.addEventListener('click',guess)
const btn2 = document.querySelector("#btn2")
btn2.addEventListener('click',clear)
const success = document.querySelector(".success")
const failed = document.querySelector(".failed")
const life = document.querySelector("#lives")
life.innerHTML=`<h1>${lives}`


export function guess() {
    // if (lives!=0){
    if (lives >=1){
        const userInput = Number(document.querySelector("#userInput").value)
        // console.log(`Type: ${typeof userInput}, User guessed: ${userInput}`)
        if (userInput != randomNumber){
            success.innerHTML=''

            if (lives==1){
                lives--
                life.innerHTML=`<h1>${lives}`
                failed.innerHTML = 'SORRY!, YOU HAVE EXHAUSTED YOUR CHANCES! haha!'
                failed.innerHTML+=`<br/><br/> The answer is ${randomNumber}`
                deactivateBtn1()
            
            
            document.querySelector("#userInput").value =''}
            
            else if (userInput < randomNumber && userInput!=0){
                lives--
                life.innerHTML=`<h1>${lives}`
                failed.innerHTML = 'Wrong!, too <span id="low-high">low</span>'
            }else if(userInput === 0){
                failed.innerHTML = 'Please!, enter a valid number!'
            }
            // else if(lives =1){

            // }
            else{
                lives--
                life.innerHTML=`<h1>${lives}`
                
                failed.innerHTML = 'Wrong!, too <span id="low-high">high</span>'
            }
            
        }else{
            failed.innerHTML =''
            lives--
            life.innerHTML=`<h1>${lives}`
            success.innerHTML = `Congratulations, you guessed ${randomNumber} correctly.!`
            deactivateBtn1()
        }
    }
    // else{

    //     failed.innerHTML = 'SORRY!, YOU HAVE EXHAUSTED YOUR CHANCES! haha!'
    //     failed.innerHTML+=`<br/><br/> The answer is ${randomNumber}`
    //     deactivateBtn1()
    
    // }
    document.querySelector("#userInput").value =''
    // document.querySelector("#userInput").ariaDisabled=false
    
}

function clear(){
    randomNumber = getRandomNumber(1, 10)
    success.innerHTML =''
    failed.innerHTML =''

    lives = 3
    life.innerHTML=`<h1>${lives}`
    document.querySelector("#userInput").value =''
    // btn1.addEventListener('click', guess)
    // btn1.style.removeProperty('background')
    // btn1.style.removeProperty('color')
    // btn1.style.removeProperty('borderStyle')
    activateBtn1()

    // btn2.classList.add('spread')
}

// const Game =()=>{

function exhausted() {
    failed.innerHTML = 'SORRY!, YOU HAVE EXHAUSTED YOUR CHANCES! haha!'
    failed.innerHTML+=`<br/><br/> The answer is ${randomNumber}`
    deactivateBtn1()    
}