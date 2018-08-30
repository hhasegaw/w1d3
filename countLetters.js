function countLetters (str){ 
    var alpha = str.split("");  
    var frequency = {};
   // forEach 
    alpha.forEach(function(single){   
    var count = 0;
    for (var i = 0; i <alpha.length; i++){     //for (let letter of str){
    if (single === alpha[i]){
        count += 1; 
        frequency [alpha[i]] = count;
    }
    else if (single === " ") {
    delete frequency[" "];
    }   
    }  
})
return frequency;
}
console.log(countLetters("lighthouse in the house"))
// array shoppingList = ["apple", banana""] array : shoppingList[0] to access
// objects item = {name: "apple", price:1.00} 
// objects example:
// 
                            