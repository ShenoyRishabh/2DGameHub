function guessingame() {
var num = Math.round(
  Math.random() * 100 + 1
)
var guess = "";
while (guess != num){
  guess = prompt("Guess a number between 1 to 100")
 if (guess > num)
 alert("Your Guess is too high")
 else if(guess < num)
 alert("Your Guess is too low")
 else if(guess == num)
 alert("You Win!")
 }
document.write("You win!")
console.log("Game ends")
}
