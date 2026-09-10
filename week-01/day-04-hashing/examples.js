// ============================================
// Day 04 — Hashing
// Examples of Object, Map, Set, and Hashing
// ============================================

// --------------------------------------------
// 1. Object — Key-Value Storage
// --------------------------------------------

const ages = {
  Rahim: 25,
  Karim: 30,
  Hasan: 28,
};

console.log(ages["Rahim"]); // 25

ages["Shafiqul"] = 30;

console.log(ages["Shafiqul"]); // 30

// --------------------------------------------
// 2. Map — Key-Value Storage
// --------------------------------------------

const map = new Map();

map.set("apple", 3);
map.set("banana", 5);

console.log(map.get("apple")); // 3
console.log(map.has("banana")); // true
console.log(map.size); // 2

map.delete("banana");

console.log(map.has("banana")); // false

// --------------------------------------------
// 3. Set — Unique Values
// --------------------------------------------

const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers); // Set(2) { 10, 20 }

console.log(numbers.has(20)); // true
console.log(numbers.has(30)); // false

// --------------------------------------------
// 4. Frequency Counter with Object
// --------------------------------------------

function countFrequency(numbers) {
  const frequency = {};

  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];

    if (frequency[value] === undefined) {
      frequency[value] = 1;
    } else {
      frequency[value]++;
    }
  }

  return frequency;
}

console.log(countFrequency([2, 3, 2, 5, 3, 2]));

// --------------------------------------------
// 5. Frequency Counter with Map
// --------------------------------------------

function countCharacters(word) {
  const frequency = new Map();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!frequency.has(char)) {
      frequency.set(char, 1);
    } else {
      frequency.set(char, frequency.get(char) + 1);
    }
  }

  return frequency;
}

console.log(countCharacters("banana"));

// --------------------------------------------
// 6. Seen Pattern
// --------------------------------------------

function containsDuplicate(numbers) {
  const seen = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return true;
    }

    seen.add(numbers[i]);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));

// --------------------------------------------
// 7. Two Sum with Map
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

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
