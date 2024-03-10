console.log("question answer");
let age = prompt("real age");
age = Number.parseInt(age);

if (age < 0) {
  console.error("please enter valid age");
}
if (age >= 18) {
  alert("you can drive");
} else {
  alert("you can't drive");
}
i = 1;
while (i<10) {
    let color = prompt("change the color");
    document.body.style.background = color
  
    i++;  
}