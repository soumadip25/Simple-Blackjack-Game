let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let message=""
let messageel=document.getElementById("message-el")
let sumel=document.querySelector("#Sum-el")
let cardel=document.getElementById("card-el")
let player ={
 name:"Dip", bet:222
}
let playerel=document.getElementById("player-el")
playerel.textContent=player.name + ": $" + player.bet

function getRandomCard(){
    isalive=true
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum>10){
        return 10
    } 
    else if(randomNum===1){
        return 11
    }
    else{
        return randomNum
    }
}

console.log(messageel)
function startGame(){
    isalive=true
     let firstcard= getRandomCard()
    let secondcard= getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
    
}
function renderGame(){

   
if(sum<=20){
    message="Do you want to draw a new card?"   
} 
else if(sum===21){
   message="Wohoo! You've got Blackjack!"
     hasblackjack=true
}
else{
    message="You're out of the game!"
     isalive=false

}
messageel.textContent=message 
sumel.textContent="Sum: " + sum
cardel.textContent="Cards: "
for(let i=0;i<cards.length;i++){
cardel.textContent += cards[i] + " "}
} 

if(isalive===true && hasblackjack===false){
    newCard()
}
function newCard(){
if(isalive===true && hasblackjack===false){

    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}}
