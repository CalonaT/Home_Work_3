const userNumber = +prompt("Введіть число , яке кратні 5");

for (let i = 0; i <= userNumber; i++) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (userNumber != 5) {
    alert("Sorry, no numbers");
  }
}
