let count=0;
document.getElementById("decreaseBtn").onclick=function(){
    count-=1;
    document.getElementById("countLabel").innerHTML= count;

}
document.getElementById("increaseBtn").onclick=function(){
    count+=1;
    document.getElementById("countLabel").innerHTML= count;
    
}
document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("countLabel").innerHTML= count;
    
}


// random number generator 🎲
let x;
let y;
let z;

document.getElementById("rollButton").onclick=function(){

x = Math.floor(Math.random() * 6)+1;
y = Math.floor(Math.random() * 6)+1;
z = Math.floor(Math.random() * 6)+1;


document.getElementById("xlabel").innerHTML= x;
document.getElementById("ylabel").innerHTML= y;
document.getElementById("zlabel").innerHTML= z;
}
document.getElementById("myButton").onclick = function(){
    const CheckBox =document.getElementById("myCheckBox");
    if(CheckBox.checked){
        console.log("You are subscribed !");
    }
    else{
        console.log("You are not subscribed !");
    }
}

document.getElementById("myButton2").onclick = function(){
    const visaBtn=document.getElementById("visaBtn");
    const mastercardBtn=document.getElementById("mastercardBtn");
    const paypalBtn=document.getElementById("paypalBtn");
    
    if(visaBtn.checked){
        console.log("You are paying with visa !");

    }
    else if(mastercardBtn.checked){
        console.log("You are paying with master card !");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with paypal !");

    }
    else{
        console.log("You must select a payment type !");

    }

    
}


 

// Template literals = delimited with (``)
//                         instead of double or single quotes
//                         allows embedded variables and expressions

/*
let userName="imad";
let items = 3;
let total= 75;

console.log("Hello", userName) ;
//console.log("You have", items, “items in your cart");
//console.log("Your total is ", total);


//console.log(`Hello ${userName}`);
//console.log(`You have${items} items  in your cart`);
//console.log(`Your total is ${total}`);
let text=
`Hello ${userName} 
You have ${items} items  in your cart
Your total is ${total}`;
console.log(text);
*/


//Number guessing game
const answer=Math.floor(Math.random()*10 +1);
let guesses=0;
document.getElementById("submitbutton").onclick=function(){
    let guess =document.getElementById("guessField").value
    guesses+=1;
    if(guess==answer){
        alert(`${answer} is the # . It took you ${guesses} guessess `);
    }
    else if (guess<answer){
        alert("Too small !");

    }
    else if(guess>answer){
        alert("Too large !");
    }

}
