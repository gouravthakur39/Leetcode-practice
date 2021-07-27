// remove vowels from a given string

function disemvowel(str) {
    var strArr = str.split('');
    for (var x = 0; x < str.length; x++) {
      var char = str[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        strArr[x] = '';
      }
    }
    var finalString =  strArr.join('');
    console.log(finalString);
    return finalString;
  }
  
  disemvowel("This website is for losers@ LOL!");