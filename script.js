let x = Number(prompt("Pick a number"));
if (Number.isNaN(x)) {
x = "Your number is the square root of " + x * x;
document.querySelector('#header').innerHTML = x
  console.log("Your number is the square root of " + x * x);
} else {
  let y = "Hey! Why didn't you pick a number";
  document.querySelector('#header').innerHTML = y;
console.log("Hey! Why didn't you pick a number")
}
