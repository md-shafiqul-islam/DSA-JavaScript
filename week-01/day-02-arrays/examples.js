// ============================================
// DAY 02 — ARRAYS
// ============================================

// --------------------------------------------
// ARRAY ACCESS — O(1)
// --------------------------------------------

const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);
console.log(numbers[3]);

// --------------------------------------------
// ARRAY TRAVERSAL — O(n)
// --------------------------------------------

function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// --------------------------------------------
// FIND MAXIMUM
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// FIND MINIMUM
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// COUNT EVEN NUMBERS
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// SUM POSITIVE NUMBERS
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// FIND INDEX
// Best Case: O(1)
// Worst Case: O(n)
// Space: O(1)
// --------------------------------------------

function findIndex(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}

// --------------------------------------------
// CREATE NEW ARRAY
// Time: O(n)
// Space: O(n)
// --------------------------------------------

function doubleNumbers(numbers) {
  const doubledNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
  }

  return doubledNumbers;
}

// --------------------------------------------
// REVERSE ARRAY
// Time: O(n)
// Space: O(n)
// --------------------------------------------

function reverseArray(numbers) {
  const reversedNumbers = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }

  return reversedNumbers;
}

// --------------------------------------------
// MOVE ZEROS — IN PLACE
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// REMOVE DUPLICATES FROM SORTED ARRAY
// Time: O(n)
// Space: O(1)
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

// --------------------------------------------
// REMOVE TARGET ELEMENTS — IN PLACE
// Time: O(n)
// Space: O(1)
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
