// ============================================
// DAY 02 — ARRAY EXERCISES
// ============================================

// --------------------------------------------
// EXERCISE 1 — FIND MAXIMUM
// --------------------------------------------

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 2 — FIND MINIMUM
// --------------------------------------------

function findMin(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 3 — COUNT EVEN NUMBERS
// --------------------------------------------

function countEven(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 4 — SUM POSITIVE NUMBERS
// --------------------------------------------

function sumPositive(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 5 — FIND INDEX
// --------------------------------------------

function findIndex(numbers, target) {
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

// --------------------------------------------
// EXERCISE 6 — DOUBLE NUMBERS
// --------------------------------------------

function doubleNumbers(numbers) {
  const doubledNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
  }

  return doubledNumbers;
}

// Time: O(n)
// Space: O(n)

// --------------------------------------------
// EXERCISE 7 — REVERSE ARRAY
// --------------------------------------------

function reverseArray(numbers) {
  const reversedNumbers = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }

  return reversedNumbers;
}

// Time: O(n)
// Space: O(n)

// --------------------------------------------
// EXERCISE 8 — COUNT NEGATIVE NUMBERS
// --------------------------------------------

function countNegative(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      count++;
    }
  }

  return count;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 9 — FIND FIRST NEGATIVE
// --------------------------------------------

function findFirstNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return numbers[i];
    }
  }

  return null;
}

// Best Case: O(1)
// Worst Case: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 10 — REMOVE NEGATIVE NUMBERS
// --------------------------------------------

function removeNegative(numbers) {
  const positiveOnly = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveOnly.push(numbers[i]);
    }
  }

  return positiveOnly;
}

// Time: O(n)
// Space: O(n)

// --------------------------------------------
// EXERCISE 11 — MOVE ZEROS
// --------------------------------------------

function moveZeros(numbers) {
  let write = 0;

  for (let read = 0; read < numbers.length; read++) {
    if (numbers[read] !== 0) {
      const temp = numbers[write];
      numbers[write] = numbers[read];
      numbers[read] = temp;

      write++;
    }
  }

  return numbers;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 12 — REMOVE DUPLICATES
// --------------------------------------------

function removeDuplicates(numbers) {
  if (numbers.length === 0) return 0;

  let write = 0;

  for (let read = 1; read < numbers.length; read++) {
    if (numbers[read] !== numbers[write]) {
      write++;
      numbers[write] = numbers[read];
    }
  }

  return write + 1;
}

// Time: O(n)
// Space: O(1)

// --------------------------------------------
// EXERCISE 13 — REMOVE ELEMENT
// --------------------------------------------

function removeElement(numbers, target) {
  let write = 0;

  for (let read = 0; read < numbers.length; read++) {
    if (numbers[read] !== target) {
      numbers[write] = numbers[read];
      write++;
    }
  }

  return write;
}

// Time: O(n)
// Space: O(1)
