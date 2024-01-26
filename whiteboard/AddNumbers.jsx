// Add Up the Numbers
// Prompt:

// Write a function that takes in a number. Return the sum of all the numbers from the first number passed in to the second number you passed in. For example, if we pass in 1 and 4, we'd return 1 + 2 + 3 + 4 = 10.

// Example clarifying questions:

// Can the number passed in be negative? No.
// Can the number be zero? No.
// Will it always be a number? Yes.
// Example test cases:

// addItUp(1, 4) -> 10
// addItUp(2, 6) -> 20
// addItUp(10,11) -> 21

function addItUp(first, last) {
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

//solution verified online via AI technology
