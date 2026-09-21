/*
Day 06 — Searching
*/

// ============================================================
// 1. Linear Search
// ============================================================

function linearSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 25, 7, 40, 15], 40));
// 3

// ============================================================
// 2. Find First Occurrence
// ============================================================

function findFirst(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(findFirst([4, 7, 2, 7, 9, 7], 7));
// 1

// ============================================================
// 3. Binary Search
// Input array must be sorted.
// ============================================================

function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    ```
if (numbers[mid] === target) {
  return mid;
}

if (numbers[mid] < target) {
  left = mid + 1;
} else {
  right = mid - 1;
}
```;
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 60));
// 5

// ============================================================
// 4. Search Insert Position
// ============================================================

function searchInsert(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    ```
if (numbers[mid] === target) {
  return mid;
}

if (numbers[mid] < target) {
  left = mid + 1;
} else {
  right = mid - 1;
}
```;
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
// 2

console.log(searchInsert([1, 3, 5, 6], 2));
// 1

console.log(searchInsert([1, 3, 5, 6], 7));
// 4

// ============================================================
// 5. Count Occurrences
// ============================================================

function countOccurrences(numbers, target) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 2, 2, 3, 4], 2));
// 3

// ============================================================
// 6. Find Maximum
// ============================================================

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMax([4, 8, 2, 10, 6]));
// 10

console.log(findMax([-5, -2, -10]));
// -2

// ============================================================
// 7. Binary Search Dry Run
// ============================================================

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 70;

// Step 1:
// left = 0
// right = 7
// mid = 3
// numbers[mid] = 40
// 40 < 70 → search right
//
// Step 2:
// left = 4
// right = 7
// mid = 5
// numbers[mid] = 60
// 60 < 70 → search right
//
// Step 3:
// left = 6
// right = 7
// mid = 6
// numbers[mid] = 70
// 70 === 70 → found
