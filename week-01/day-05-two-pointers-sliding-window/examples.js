/*
Day 05 — Two Pointers and Sliding Window
*/

// ============================================================
// 1. Reverse Array — Opposite Direction Two Pointers
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

// ============================================================
// 2. Palindrome — Opposite Direction Two Pointers
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

// ============================================================
// 3. Pair Sum in Sorted Array — Two Pointers
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

// ============================================================
// 4. Maximum Sum of K Consecutive Elements
// ============================================================

function maxSum(numbers, k) {
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  let max = windowSum;

  // Slide the window
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

// ============================================================
// 5. Average of Every Window
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

// ============================================================
// 6. Maximum Vowels in a Window
// ============================================================

function isVowel(char) {
  return (
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
  );
}

function maxVowels(word, k) {
  let vowelCount = 0;

  // First window
  for (let i = 0; i < k; i++) {
    if (isVowel(word[i])) {
      vowelCount++;
    }
  }

  let max = vowelCount;

  // Slide the window
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

// ============================================================
// 7. Minimum Sum of K Consecutive Elements
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
