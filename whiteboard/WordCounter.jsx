// Word Counter
// Prompt:

// Write a function that takes in two arguments, an array of strings and a string. The function should return the number of times the string is found in the array.

// Example clarifying questions:

// Will they always be array of strings and a string? Yes.
// May I use built in methods like .toLowercase()? Yes
// Will the array always have strings? It may be empty, if it is, return 0.
// Does capitalization matter? No. You may assume all characters are lowercase.
// Example test cases:

// ["apple", "pizza", "orange", "apple", "sour apple"], "apple" -> 2
// ["apple", "pizza", "orange", "apple", "sour apple"], "pizza" -> 1
// ["apple", "pizza", "orange", "apple", "sour apple"], "sour" -> 0
// ["sour", "soiree", "Sour", "sour", "sour"], "sour" -> 3
// [], "banana" -> 0

function checkWord(stringArray, string) {
  // variable to count the number of times string occurs in array
  let counter = 0;

  // Loop through the array
  for (let item of stringArray) {
    if (item.toLowerCase() === string.toLowerCase()) {
      counter++;
    }
  }
  return counter;
}
