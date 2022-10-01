const integarInput = document.getElementById("integarInput");
const romanInput = document.getElementById("romanInput");


integarInput.addEventListener("input", (e) => {
    romanInput.value = convertToRoman(e.target.value);
});

romanInput.addEventListener("input", (e) => {
    integarInput.value = convertToIntegar(e.target.value);
});


// Integar to Roman

function convertToRoman(num) {
 
const numbers = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
    }

   let result = ''
   for (const keys in numbers) {
     while (num >= numbers[keys]) {
       result += keys;
       num -= numbers[keys];
     }
   }
    
    return result;

   }

   // Roman to Integar

function convertToIntegar(s) {

let accum = 0
let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
   };

   for (let a of s) {
    let current = roman[s[a]];
    let next = roman[s[a + 1]];

    if (current < next) {
        accum += (next - current);
        s[a]++;
    } else {
        accum += current;
    }
   }
   return accum;
}