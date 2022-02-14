'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
   
if((str.toString().lastIndexOf(" "))==0){return str;}
else{
   return str.toString().slice(str.toString().lastIndexOf(" ")+1, str.length);
}}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    if((str.toString().lastIndexOf(" "))==0){return str;}
else{
  // return str.toString().slice(str.toString().lastIndexOf(" ")+1, str.length);
  const myArray = str.toString().split(" ");
  return myArray[myArray.length-1];
}
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    const myArray = str.toString().split(" ");
if(myArray[0]=="I"&&myArray[1]=="am"){
    myArray.splice(0,2,"We","are");
}else{if(myArray[0]=="I"&&myArray[1]=="was"){
    myArray.splice(0,2,"We","were");
}if(myArray[0]=="I"){
    myArray.splice(0,1,"We");
}}
   return myArray.join(" ");
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
  let stringSlice1=[];
  let count=0;
   while(arr.length>=5){
        stringSlice1[count]=(arr.slice(0,5).join(" "));
        arr.splice(0,5);
        count++;
        }
        if(arr.length>0){
        stringSlice1[count]=" "+(arr.slice(0,arr.length).join("  "));
        }else{
            stringSlice1[count]="";
        }

        return  stringSlice1.join();
    

    
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    //let arr1=str.toString().substring(, end)
    let arr1=str.split(" ");
 
   return arr1;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };