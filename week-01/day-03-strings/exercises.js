// ============================================
// DAY 03 — STRING EXERCISES
// ============================================

// --------------------------------------------
// PROBLEM 1 — COUNT CHARACTER
// --------------------------------------------

function countCharacter(word, target) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter("banana", "a")); // 3

/*
Time: O(n)
Space: O(1)

Reason:
The function traverses each character in the string once and compares
it with the target character. It uses only a fixed number of variables,
so the additional space complexity is O(1).
*/

// --------------------------------------------
// PROBLEM 2 — COUNT VOWELS
// --------------------------------------------

function countVowels(word) {
  let vowels = 0;

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vowels++;
    }
  }

  return vowels;
}

console.log(countVowels("javascript")); // 3

/*
Time: O(n)
Space: O(1)

Reason:
The function traverses each character once and performs a constant number
of vowel comparisons for each character. It uses only a fixed number of
variables.
*/

// --------------------------------------------
// PROBLEM 3 — FIND CHARACTER
// --------------------------------------------

function findCharacter(word, target) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(findCharacter("javascript", "s")); // 4

/*
Best Case: O(1)
Worst Case: O(n)
Space: O(1)

Reason:
The function returns immediately if the target is found at the first
position. In the worst case, it checks every character.
*/

// --------------------------------------------
// PROBLEM 4 — COUNT DIGITS
// --------------------------------------------

function countDigits(word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "0" && word[i] <= "9") {
      count++;
    }
  }

  return count;
}

console.log(countDigits("abc123xyz45")); // 5

/*
Time: O(n)
Space: O(1)

Reason:
The function traverses each character once and checks whether it is a digit.
It uses only a fixed number of variables.
*/

// --------------------------------------------
// PROBLEM 5 — REVERSE STRING
// --------------------------------------------

function reverseString(word) {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // olleh

/*
Time: O(n)
Space: O(n)

Reason:
The function traverses every character once from the end to the beginning.
A new string grows with the input size.
*/

// --------------------------------------------
// PROBLEM 6 — MANUAL UPPERCASE
// --------------------------------------------

function toUpperCaseManual(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    result += word[i].toUpperCase();
  }

  return result;
}

console.log(toUpperCaseManual("hello")); // HELLO

/*
Time: O(n)
Space: O(n)
*/

// --------------------------------------------
// PROBLEM 7 — REMOVE SPACES
// --------------------------------------------

function removeSpaces(word) {
  let withoutSpace = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      withoutSpace += word[i];
    }
  }

  return withoutSpace;
}

console.log(removeSpaces("hello world")); // helloworld

/*
Time: O(n)
Space: O(n)
*/

// --------------------------------------------
// PROBLEM 8 — REPLACE VOWELS
// --------------------------------------------

function replaceVowels(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      newWord += "*";
    } else {
      newWord += word[i];
    }
  }

  return newWord;
}

console.log(replaceVowels("javascript")); // j*v*scr*pt

/*
Time: O(n)
Space: O(n)
*/

// --------------------------------------------
// PROBLEM 9 — CHECK ONLY DIGITS
// --------------------------------------------

function isOnlyDigits(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] < "0" || word[i] > "9") {
      return false;
    }
  }

  return true;
}

console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("12a45")); // false

/*
Best Case: O(1)
Worst Case: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 10 — COUNT UPPERCASE
// --------------------------------------------

function countUppercase(word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
      count++;
    }
  }

  return count;
}

console.log(countUppercase("HelloWORLD")); // 6

/*
Time: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 11 — PALINDROME
// --------------------------------------------

function isPalindrome(word) {
  let first = 0;
  let last = word.length - 1;

  while (first < last) {
    if (word[first] !== word[last]) {
      return false;
    }

    first++;
    last--;
  }

  return true;
}

console.log(isPalindrome("madam")); // true

/*
Time: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 12 — CASE-INSENSITIVE PALINDROME
// --------------------------------------------

function isPalindromeIgnoreCase(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left].toLowerCase() !== word[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeIgnoreCase("Madam")); // true

/*
Time: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 13 — REVERSE STRING WITH TWO POINTERS
// --------------------------------------------

function reverseStringTwoPointers(word) {
  let left = 0;
  let right = word.length - 1;

  const newWord = new Array(word.length);

  while (left <= right) {
    newWord[left] = word[right];
    newWord[right] = word[left];

    left++;
    right--;
  }

  return newWord.join("");
}

console.log(reverseStringTwoPointers("hello")); // olleh

/*
Time: O(n)
Space: O(n)
*/

// --------------------------------------------
// PROBLEM 14 — EQUAL IGNORING CASE
// --------------------------------------------

function areEqualIgnoreCase(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let i = 0;

  while (i < word1.length) {
    if (word1[i].toLowerCase() !== word2[i].toLowerCase()) {
      return false;
    }

    i++;
  }

  return true;
}

console.log(areEqualIgnoreCase("Hello", "hello")); // true

/*
Best Case: O(1)
Worst Case: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 15 — COUNT MATCHING CHARACTERS
// --------------------------------------------

function countMatchingCharacters(word1, word2) {
  if (word1.length !== word2.length) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      count++;
    }
  }

  return count;
}

console.log(countMatchingCharacters("hello", "hallo")); // 4

/*
Time: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 16 — FIND FIRST UPPERCASE
// --------------------------------------------

function findFirstUppercase(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
      return word[i];
    }
  }

  return null;
}

console.log(findFirstUppercase("helloWorld")); // W

/*
Best Case: O(1)
Worst Case: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 17 — REMOVE DIGITS
// --------------------------------------------

function removeDigits(word) {
  let withoutDigits = "";

  for (let i = 0; i < word.length; i++) {
    if (!(word[i] >= "0" && word[i] <= "9")) {
      withoutDigits += word[i];
    }
  }

  return withoutDigits;
}

console.log(removeDigits("abc123xyz45")); // abcxyz

/*
Time: O(n)
Space: O(n)
*/

// --------------------------------------------
// PROBLEM 18 — COUNT SAME END CHARACTERS
// --------------------------------------------

function countSameEndCharacters(word) {
  let left = 0;
  let right = word.length - 1;
  let count = 0;

  while (left < right) {
    if (word[left] === word[right]) {
      count++;
    }

    left++;
    right--;
  }

  return count;
}

console.log(countSameEndCharacters("abccba")); // 3

/*
Time: O(n)
Space: O(1)
*/

// --------------------------------------------
// PROBLEM 19 — FIRST AND LAST EQUAL
// --------------------------------------------

function firstLastEqual(word) {
  if (word.length === 0) {
    return false;
  }

  return word[0] === word[word.length - 1];
}

console.log(firstLastEqual("hello")); // false
console.log(firstLastEqual("level")); // true
console.log(firstLastEqual("a")); // true

/*
Time: O(1)
Space: O(1)
*/
