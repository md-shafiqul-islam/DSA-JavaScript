# Notes — Strings & Two Pointers

## 1. String Traversal

A string is a sequence of characters. Characters can be accessed using indexes.

```js
const word = "hello";

word[0]; // h
word[word.length - 1]; // o
```

Traversing a string:

```js
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

If every character may be checked, the time complexity is `O(n)`.

## 2. Character Checking

Characters can be compared directly.

```js
word[i] === "a";
```

Digit check:

```js
word[i] >= "0" && word[i] <= "9";
```

Uppercase check:

```js
word[i] >= "A" && word[i] <= "Z";
```

Lowercase check:

```js
word[i] >= "a" && word[i] <= "z";
```

These checks are useful for counting, searching, and filtering characters.

## 3. Counting Pattern

Use a counter when counting characters that match a condition.

```js
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (condition) {
    count++;
  }
}
```

This pattern can be used for counting vowels, digits, uppercase letters, or matching characters.

## 4. Searching and Early Return

When searching for the first matching character, return immediately after finding it.

```js
for (let i = 0; i < word.length; i++) {
  if (condition) {
    return word[i];
  }
}
```

- Best case: `O(1)`
- Worst case: `O(n)`

If a problem asks for the **first matching value**, stop when the first match is found.

## 5. Building a New String

Sometimes a problem requires creating a new string.

```js
let result = "";

for (let i = 0; i < word.length; i++) {
  result += word[i];
}
```

Examples include reversing a string, removing characters, and replacing characters.

Typical complexity:

- Time: `O(n)`
- Space: `O(n)`

## 6. Opposite-Direction Two Pointers

Two pointers can start from opposite ends of a string.

```js
let left = 0;
let right = word.length - 1;
```

The pointers move toward the middle.

```js
left++;
right--;
```

This pattern is useful when comparing characters from both ends.

## 7. Palindrome Pattern

A palindrome reads the same forward and backward.

Examples:

- `madam`
- `level`
- `racecar`

Basic pattern:

```js
while (left < right) {
  if (word[left] !== word[right]) {
    return false;
  }

  left++;
  right--;
}

return true;
```

Typical complexity:

- Time: `O(n)`
- Space: `O(1)`

## 8. Case-Insensitive Comparison

When uppercase and lowercase should be treated as equal, normalize characters before comparing.

```js
word1[i].toLowerCase() === word2[i].toLowerCase();
```

## 9. Direct Access vs Traversal

Directly accessing a character:

```js
word[0];
word[word.length - 1];
```

Time: `O(1)`

Traversing the string:

```js
for (let i = 0; i < word.length; i++) {
  // operation
}
```

Time: `O(n)`

Do not traverse the entire string if the problem only requires checking specific positions.

## 10. Mental Model

Before solving a string problem, ask:

1. Do I need to check every character?
2. Do I need to count something?
3. Am I searching for the first match?
4. Can I return early?
5. Do I need to create a new string?
6. Do I need one pointer or two pointers?
7. Should the pointers move in the same direction or opposite directions?

**Main Day 3 pattern: Compare from both ends → Move toward the middle**
