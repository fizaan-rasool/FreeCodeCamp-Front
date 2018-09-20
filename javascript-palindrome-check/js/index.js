function palindrome(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
  
  document.write("<div>"+ myString + " is a Palindrome <div>");
}else{
  
  document.write("<div>" + myString + " is not a Palindrome </div>");
}
}
palindrome('"Are we not drawn onward to new era?"')
palindrome('"Fizaan"')
palindrome('"A Toyota"')
palindrome('"1,19,9,1,1"')
palindrome('"4,11,3,7,9"')