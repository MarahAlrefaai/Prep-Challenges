'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
let arr=str.split(" ");

if((arr.length/2)%2==0){
let mid=Math.ceil((arr.length/2));
  let len=arr[mid];
  return len.length;
}
else{
  let mid=Math.floor((arr.length/2));
  let len=arr[mid];
  return len.length;
  
}
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let ok=false;
    for(let i=0;i<str1.length;i++){
      if((str2.length==str1.length) && (str2.includes(str1[i]))) {ok=true;}
      else{ok=false;}
      return ok;
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    if(int>arr[arr.length-1]){return arr.length;}
    else{
    let ok =true;
    for(let i=0;i<arr.length;i++){
      if(arr[i]==int){ok=true;return i;}
      else ok=false;
    }
    if(ok ==false){
      for(let i=0;i<arr.length;i++){
        if(arr[i]>int){return i ;}
      }
    }

  }
    
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };