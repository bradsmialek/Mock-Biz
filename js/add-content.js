'use strict'
// console.log(computer);
var computer = prompt("Would you like to purchase a mac or pc");
console.log(computer);
var answer;

if(computer === "mac") { 
  // alert("Awesome");
  answer = 'Youre the best';
}else if(computer === "pc") { 
  // alert("Ewwwwwwww");
  answer= 'PCs are sooo  EWEEEEE!!';
}else{ 
  // alert("Can't decide?");
  answer = 'Well, figure it out!';
}
document.write(answer);