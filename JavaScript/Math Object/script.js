const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max ) + 1;
 
let guess = prompt("Guess the number");

while(true){
if(guess == "quit"){
    console.log("The answer is", random);
         break;
}
if(guess == random){
    console.log("You're right. The number is ", random);
    break;
} else if(guess < random){
    guess = prompt("Your guess was too small. Try again.");
} else{
    guess = prompt("Your guess was too large. Try again.");
}
}
