/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/
function isEven(num){
  //console.log(num);
  var bool = true;
    if((num%2) > 0){
      bool = false;
    }
    //console.log(bool);
  return bool;
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.log("[1] Should return false for 1");
console.assert(isEven(1) === false )
console.log("==================================");
console.log();

console.log("[2] Should return true for 4");
console.assert(isEven(4) === true )
console.log("==================================");
console.log();

console.log("[3] Should return true for 10");
console.assert(isEven(10) === true )
console.log("==================================");
console.log();

console.log("[4] Should return false for 17");
console.assert(isEven(17) === false )
console.log("==================================");
