/*function countLetters(str){
  str = str.replace(/\s/g,'');
  var alpha = str.split("");
  var frequency = {}
  for(let c of alpha) {
      if(!isNaN(parseFloat(frequency[c]))){
          frequency[c] += 1;
      } else {
          frequency[c] = 1;
      }
  }
  return frequency;
}
console.log(countLetters("lighthouse in the house"));
*/
function countLetters (str){
  str = str.replace(/\s/g,'');
  var alpha = str.split("");
  var frequency = {};
  for (var i = 0; i < alpha.length; i++) {
      var repeat = [alpha[i]];
    if (frequency[alpha[i]]) {
      frequency[alpha[i]].push(i);
    } else {
      frequency[alpha[i]] = [i];
    }
  }
  return frequency;
}
console.log(countLetters("lighthouse in the house"));
