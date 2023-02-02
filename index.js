const userNumber = +prompt("Введіть число , яке кратні 5");

for (let i = 0; i <= userNumber; i++) {
  if (userNumber < 5) {
    alert("Sorry, no numbers");
    break;
  }
  if (i % 5 === 0) {
    console.log(i);
  }
}
