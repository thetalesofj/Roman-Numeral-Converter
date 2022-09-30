const droplist = document.querySelectorAll(".drop-list select");
const fromRoman = document.querySelector(".from select");
const toRoman = document.querySelector(".to select");
const getButton = document.querySelector("form button");


let result = ''
for (const keys in numbers) {
  while (num >= numbers[keys]) {
    result += keys;
    num -= numbers[keys];
  }
}
 
 return result;
}
