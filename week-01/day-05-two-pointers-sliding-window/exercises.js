/*
Day 05 — Two Pointers and Sliding Window
Exercises
*/

// ============================================================
// Exercise 1 — Reverse Array
// ============================================================

function reverseArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const temp = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = temp;

    left++;
    right--;
  }

  return numbers;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Time: O(n)
// Space: O(1)

// ============================================================
// Exercise 2 — Palindrome
// ============================================================

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("level")); // true

console.log(isPalindrome("hello")); // false

// Time: O(n)
// Space: O(1)

// ============================================================
// Exercise 3 — Pair With Target Sum
// Input array must be sorted.
// ============================================================

function hasPairWithSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 6], 6)); // true

// Time: O(n)
// Space: O(1)

// ============================================================
// Exercise 4 — Maximum Sum of K Consecutive Elements
// ============================================================

function maxSum(numbers, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  let max = windowSum;

  for (let right = k; right < numbers.length; right++) {
    const left = right - k;

    windowSum = windowSum - numbers[left] + numbers[right];

    if (windowSum > max) {
      max = windowSum;
    }
  }

  return max;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3)); // 9

// Time: O(n)
// Space: O(1)

// ============================================================
// Exercise 5 — Average of Every Window
// ============================================================

function averageOfWindows(numbers, k) {
  let windowSum = 0;
  const output = [];

  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  output.push(windowSum / k);

  for (let right = k; right < numbers.length; right++) {
    const left = right - k;

    windowSum = windowSum - numbers[left] + numbers[right];

    output.push(windowSum / k);
  }

  return output;
}

console.log(averageOfWindows([1, 2, 3, 4, 5], 3)); // [2, 3, 4]

// Time: O(n)
// Space: O(n) for output

// ============================================================
// Exercise 6 — Maximum Vowels in a Window
// ============================================================

function isVowel(char) {
  return (
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
  );
}

function maxVowels(word, k) {
  let vowelCount = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(word[i])) {
      vowelCount++;
    }
  }

  let max = vowelCount;

  for (let right = k; right < word.length; right++) {
    const left = right - k;

    if (isVowel(word[left])) {
      vowelCount--;
    }

    if (isVowel(word[right])) {
      vowelCount++;
    }

    if (vowelCount > max) {
      max = vowelCount;
    }
  }

  return max;
}

console.log(maxVowels("abciiidef", 3)); // 3

// Time: O(n)
// Space: O(1)

// ============================================================
// Exercise 7 — Minimum Sum of K Consecutive Elements
// ============================================================

function minSum(numbers, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  let min = windowSum;

  for (let right = k; right < numbers.length; right++) {
    const left = right - k;

    windowSum = windowSum - numbers[left] + numbers[right];

    if (windowSum < min) {
      min = windowSum;
    }
  }

  return min;
}

console.log(minSum([2, 1, 5, 1, 3, 2], 3)); // 6

// Time: O(n)
// Space: O(1)
