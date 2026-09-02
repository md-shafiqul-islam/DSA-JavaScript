// ============================================
// DAY 01 — BIG-O AND COMPLEXITY
// ============================================

// --------------------------------------------
// O(1) — CONSTANT TIME
// --------------------------------------------

function getFirst(numbers) {
  return numbers[0];
}

function getLast(numbers) {
  return numbers[numbers.length - 1];
}

// --------------------------------------------
// O(n) — LINEAR TIME
// --------------------------------------------

function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

function sumNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// --------------------------------------------
// TWO CONSECUTIVE LOOPS
// O(n) + O(n) = O(2n) → O(n)
// --------------------------------------------

function printTwice(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// --------------------------------------------
// CONSTANT INNER LOOP
// O(n × 5) → O(n)
// --------------------------------------------

function constantInnerLoop(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

    for (let j = 0; j < 5; j++) {
      console.log(j);
    }
  }
}

// --------------------------------------------
// O(n²) — QUADRATIC TIME
// --------------------------------------------

function printPairs(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}

// --------------------------------------------
// O(n) SPACE
// --------------------------------------------

function createCopy(numbers) {
  const copy = [];

  for (const number of numbers) {
    copy.push(number);
  }

  return copy;
}

// --------------------------------------------
// BEST CASE: O(1)
// WORST CASE: O(n)
// --------------------------------------------

function containsZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      return true;
    }
  }

  return false;
}

// --------------------------------------------
// BEST CASE: O(1)
// WORST CASE: O(n²)
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
