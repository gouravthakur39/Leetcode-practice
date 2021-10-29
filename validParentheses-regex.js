var isValid = function(s) {
	//This regex will search if the string contains "{}" OR "()" OR "{}"
    const regex = /(\{\})|(\[\])|(\(\))/g;
	
	//Check if the string contains one of possible pairs
    while(s.match(regex)) {
		// Replace all the pairs with an empty string
        s = s.replace(regex, '');
    };
	
	//The if string is empty, then were only valid pairs, so it is true.
	//if the string contains data (like "{]") then there was an invalid pair, so it is false
    return s === ''; 
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
