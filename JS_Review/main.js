/*
   1. Define a function called sum that takes
      two numbers as arguments and returns their sum.
*/

function sum (num1, num2) {
  return num1 + num2;
}

var total = sum(2, 4);
console.log(total);

/* 2. Define a function called isEqual that takes two
      arguments and returns a boolean. Return true if the
      two arguments are equal and return false if they are not.
*/

function isEqual(arg1, arg2){
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
 }
}

var answer = isEqual(2,4);
console.log(answer);


/* 3. Define a function called discountPercentage that returns the total
      discount ($), given the original amount and discount percentage (as arguments).
      Return a warning if the discount amount is greater than
      100 or less that 0 percent.
*/

function discountPercentage(dollarAmount, percent) {
  if (percent > 1 || percent < 0){
    return "warning";
  }
  return dollarAmount * percent;
}

console.log(discountPercentage(200, 1.3));


/* 4. Define a function called
      stringCapitalize that takes a string as an argument
      and returns the same string with the first letter of each word capitalized.
      Assume that each individual word is separated by only one space.
*/

// function stringCapitalize (str){
//   return str.replace(/\w\S*/g, function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

function stringCapitalize(str) {
  var stringArray = str.split(' ');
  var newWordArr = [];
  for (var i = 0; i < stringArray.length; i++) {
    var capitalizedWord = capitalizeString(stringArray[i]);
    newWordArr.push(capitalizedWord);
  }
  return newWordArr.join(' ');
}

function capitalizeString(word) {
  newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}

console.log(stringCapitalize("this is the start of the second term"));


/* 5. Define a function called evenNumbers that takes an arbitrary
      integer as an argument, from 0 to 100, and outputs all the even integers
      from 0 to that arbitrary number.
*/

// // you need to return something from a function
// function evenNumbers(num){
//   for (var i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

function evenNumbers(num) {
  var even = [];
  for (var i = 0; i <= num; i++) {
    if ( i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
}

console.log(evenNumbers(6));



/*  6. Define a function called isDivisible that takes two
       arguments and returns a boolean. Return true if the first argument
       is divisible by the second; otherwise, return false.
*/


function inDivisable (num1, num2) {
  var leftOver = num1 % num2;
    if (leftOver === 0){
      return true;
      } else {
     return false;
    }
}

var answer = inDivisable (11, 2);
console.log(answer);


/* 7. Bonus: Write a function called oddNumbers that
      takes an arbitrary integer as an argument, from 0 to 100.
      If the number is greater than 40 then output all the odd integers
      from 40 to the arbitrary number. If the number is less than 40,
      output all the odd integers from 0 to 40. */

// // you need to return something from a function
// function oddNumbers(num){
//   for (var i = 40; i < num; i++){
//     if(i % 2 === 0) {
//     continue;
//    }
//    console.log(i);
//   }
//    {
//     for (var i=40; i>num; i--){
//     if(i % 2 ==0){
//     continue;
//    }
//    console.log(i);

//   }
// }
// }
// var odds = oddNumbers(2);

function oddNumbers(num) {
  var odd = [];
  if (num <= 40) {
    for (var i = 0; i <= num; i++) {
      if (i%2 == 1) {
        odd.push(i);
      }
    }
  } else {
    for (var j = 40; j <= num; j++) {
      if (j%2 == 1) {
        odd.push(j);
      }
    }
  }
  return odd;
}
console.log(oddNumbers(18));
console.log(oddNumbers(45));












