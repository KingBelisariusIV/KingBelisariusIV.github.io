const z = async () => {
  await delay(5000);
  console.log("Waited 5s");

  await delay(5000);
  console.log("Waited an additional 5s");
};
let x = Number(prompt("Pick a number"));
if (!Number.isNaN(x)) {
x = "Your number is the square root of " + x * x;
document.querySelector('#header').innerHTML = x
  console.log("Your number is the square root of " + x * x);
} else {
console.log("Hey! Why didn't you pick a number")
}
