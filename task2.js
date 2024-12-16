const sumNumbersInString = (string) => {
 let sum = 0;
 for (let i = 0; i < string.length; i++) {
  let number = Number(string[i]);
  if (!isNaN(number)) sum += number;
 }
 return sum; 
}

console.log(sumNumbersInString("a1b2c3"));  // 6
