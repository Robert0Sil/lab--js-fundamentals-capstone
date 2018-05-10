/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/
function censorBadWords(arr, str){
  var nstr = "";
  var ej = "";
  var narr = str.split(" ");
  //console.log(arr);
  //console.log(str);
  for(var i = 0; i < narr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[j] === narr[i]){
        narr[i] = "****"
        //nstr = nstr + "****" + " ";
      }
      //console.log(nstr);
    }
    nstr = nstr + narr[i] + " ";
  }
  var fin = nstr.length - 1;
  ej = nstr.substring(0, fin);
  //console.log(ej);
  //console.log(typeof(nstr));
  return ej;
}

var badWords = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']               //Le cambié la variable ya que tenía "badWords"
var badWords2 = ['idiot',  'crap', 'freaking']

var censored1 = censorBadWords(badWords, "mom get the heck in here and bring me a darn sandwich") // Le agregue el cierre del parentesis (faltaba)
var censored2 = censorBadWords(badWords, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.log("[1] Expected: 'mom get the **** in here and bring me a **** sandwich'");
console.assert( censored1 === 'mom get the **** in here and bring me a **** sandwich')
console.log("=====================================================================");
console.log();

console.log("[2] Expected: 'here son, your **** sandwich is on the **** plate'");
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.log("=====================================================================");
console.log();

console.log("[3] Expected: 'your **** **** dog left **** on my floor'");
console.assert( censored3 === "your **** **** dog left **** on my floor")
console.log("=====================================================================");
