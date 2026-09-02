// ============================================
// DAY 01 — BIG-O EXERCISES
// ============================================

// Before checking the answer, analyze:
//
// 1. Time Complexity
// 2. Space Complexity
// 3. Best Case (if applicable)
// 4. Worst Case (if applicable)

// --------------------------------------------
// EXERCISE 1
// --------------------------------------------

function getLast(numbers) {
  return numbers[numbers.length - 1];
}

// Time: O(1)
// Space: O(1)

// Reason:
// Accessing an array element by index takes constant time.
// The function performs the same number of operations regardless
// of how many elements are in the array.
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 2
// --------------------------------------------

function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Time: O(n)
// Space: O(1)

// Reason:
// The loop iterates once for every element in the array.
// As the input size (n) increases, the number of iterations
// increases proportionally.
// Only the `total` and `i` variables are used, so no additional
// space grows with the input size.

// --------------------------------------------
// EXERCISE 3
// --------------------------------------------

function printPairs(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}

// Time: O(n^2)
// Space: O(1)

// Reason:
// The outer loop runs n times.
// For each iteration of the outer loop, the inner loop also runs n times.
// Therefore, the total number of operations is n × n = n².
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 4
// --------------------------------------------

function findNumber(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}

// Best Case: O(1)
// Worst Case: O(n)
// Space: O(1)

// Reason:
// In the best case, the target is the first element, so the function
// returns immediately after one comparison.
// In the worst case, the target is the last element or does not exist,
// so the function checks every element in the array.
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 5
// --------------------------------------------

function createCopy(numbers) {
  const copy = [];

  for (const number of numbers) {
    copy.push(number);
  }

  return copy;
}

// Time: O(n)
// Space: O(n)

// Reason:
// The loop iterates once for every element in the input array,
// resulting in n operations.
// A new array is created and stores n elements, so the additional
// space used grows linearly with the input size.

// --------------------------------------------
// EXERCISE 6
// --------------------------------------------

function twoLoops(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// Time: O(n)
// Space: O(1)

// Reason:
// The first loop runs n times, and the second loop also runs n times.
// The total number of iterations is n + n = 2n.
// Big-O ignores constant factors, so O(2n) simplifies to O(n).
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 7
// --------------------------------------------

function constantLoop(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(numbers[i], j);
    }
  }
}

// Time: O(n)
// Space: O(1)

// Reason:
// The outer loop runs n times.
// For each iteration, the inner loop runs exactly 5 times.
// The total number of operations is 5n.
// Since 5 is a constant, O(5n) simplifies to O(n).
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 8
// --------------------------------------------

function doubleNumbers(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }

  return result;
}

// Time: O(n)
// Space: O(n)

// Reason:
// The loop iterates once for every element in the input array,
// resulting in n iterations.
// The `result` array stores one new element for each input element.
// Therefore, the additional space grows linearly with n.

// --------------------------------------------
// EXERCISE 9
// --------------------------------------------

function printRemainingPairs(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}

// Time: O(n^2)
// Space: O(1)

// Reason:
// The outer loop runs n times.
// The inner loop starts from `i` and runs through the remaining elements.
// Although the inner loop does not always run n times, the total number
// of iterations grows proportionally to n².
// No additional data structure is created.

// --------------------------------------------
// EXERCISE 10
// --------------------------------------------

function containsZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      return true;
    }
  }

  return false;
}

// Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)
// Space: O(1)

// Reason:
// In the best case, the first element is 0, so the function
// returns immediately after one comparison.
// In the average case, the function may need to check multiple elements
// before finding 0.
// In the worst case, 0 is the last element or does not exist,
// so every element is checked.
// No additional data structure is created.

// --------------------------------------------
// FINAL CHALLENGE
// --------------------------------------------

function findDuplicate(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    }
  }

  return false;
}

// Best Case: O(1)
// Worst Case: O(n^2)
// Space: O(1)

// Reason:
// In the best case, the first two elements are duplicates.
// The function finds the duplicate immediately and returns true,
// resulting in constant time.
//
// In the worst case, there are no duplicates, so the outer loop
// compares each element with all remaining elements.
// The total number of comparisons is approximately:
//
// (n - 1) + (n - 2) + ... + 1
//
// This grows proportionally to n², so the worst-case time
// complexity is O(n²).
//
// No additional data structure is created, so the space complexity
// is O(1).
