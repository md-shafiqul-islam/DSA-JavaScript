// ============================================
// Day 04 — Hashing
// Exercises
// ============================================

// --------------------------------------------
// Exercise 1 — Count Frequency
// --------------------------------------------

function countFrequency(numbers) {
  const frequency = {};

  for (let i = 0; i < numbers.length; i++) {
    const key = numbers[i];

    if (frequency[key] === undefined) {
      frequency[key] = 1;
    } else {
      frequency[key]++;
    }
  }

  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 1, 2]));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 2 — Count Characters
// --------------------------------------------

function countCharacters(word) {
  const frequency = new Map();

  for (let i = 0; i < word.length; i++) {
    const key = word[i];

    if (!frequency.has(key)) {
      frequency.set(key, 1);
    } else {
      frequency.set(key, frequency.get(key) + 1);
    }
  }

  return frequency;
}

console.log(countCharacters("hello"));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 3 — Contains Duplicate
// --------------------------------------------

function containsDuplicate(numbers) {
  const duplicate = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (duplicate.has(numbers[i])) {
      return true;
    }

    duplicate.add(numbers[i]);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 2]));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 4 — First Repeated Character
// --------------------------------------------

function firstRepeatedCharacter(word) {
  const repeat = new Set();

  for (let i = 0; i < word.length; i++) {
    if (repeat.has(word[i])) {
      return word[i];
    }

    repeat.add(word[i]);
  }

  return null;
}

console.log(firstRepeatedCharacter("programming"));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 5 — First Unique Character
// --------------------------------------------

function firstUniqueCharacter(word) {
  const frequency = {};

  for (let i = 0; i < word.length; i++) {
    const key = word[i];

    if (frequency[key] === undefined) {
      frequency[key] = 1;
    } else {
      frequency[key]++;
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (frequency[word[i]] === 1) {
      return word[i];
    }
  }

  return "";
}

console.log(firstUniqueCharacter("aabbcdde"));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 6 — Has Common Element
// --------------------------------------------

function hasCommonElement(numbers1, numbers2) {
  const numSet = new Set(numbers1);

  for (let i = 0; i < numbers2.length; i++) {
    if (numSet.has(numbers2[i])) {
      return true;
    }
  }

  return false;
}

console.log(hasCommonElement([1, 2, 3], [5, 4, 3]));

/*
 * Time: O(n + m)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 7 — Count Unique Values
// --------------------------------------------

function countUnique(numbers) {
  const unique = new Set();

  for (let i = 0; i < numbers.length; i++) {
    unique.add(numbers[i]);
  }

  return unique.size;
}

console.log(countUnique([1, 2, 2, 3, 3, 3, 4]));

/*
 * Time: O(n)
 * Space: O(n)
 */

// --------------------------------------------
// Exercise 8 — Two Sum
// --------------------------------------------

function twoSum(numbers, target) {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i];

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }

    seen.set(numbers[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
 * Time: O(n)
 * Space: O(n)
 */
