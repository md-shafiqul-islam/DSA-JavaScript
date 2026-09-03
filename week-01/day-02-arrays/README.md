# Day 02 — Arrays

## Topics Covered

- What is an array?
- Array indexing
- Array access
- Array traversal
- Searching an array
- Array operation complexity
- Creating new arrays
- In-place array modification
- Two-pointer technique
- Read/write pointer pattern
- Edge cases

---

## Array Basics

An array is an ordered collection of elements.

```js
const numbers = [10, 20, 30, 40, 50];
```

Each element has an index:

```text
Index:   0    1    2    3    4
Value:  10   20   30   40   50
```

---

## Array Access

Accessing an element using its index:

```js
numbers[3];
```

Time Complexity:

```text
O(1)
```

The element can be accessed directly when its index is known.

---

## Array Search

Searching for a value requires checking elements until the target is found.

```js
function findIndex(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}
```

### Complexity

| Case       | Complexity |
| ---------- | ---------- |
| Best Case  | O(1)       |
| Worst Case | O(n)       |
| Space      | O(1)       |

---

## Array Traversal

Traversal means visiting each element of an array.

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### Complexity

```text
Time: O(n)
Space: O(1)
```

---

# Common Array Operations

| Operation       | Typical Complexity |
| --------------- | ------------------ |
| Access by index | O(1)               |
| Search          | O(n)               |
| Traversal       | O(n)               |
| `push()`        | O(1) amortized     |
| `pop()`         | O(1)               |
| `unshift()`     | O(n)               |
| `shift()`       | O(n)               |

---

# Array Traversal Patterns

## 1. Tracking a Value

Used for finding maximum or minimum values.

```js
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
```

Examples:

- Find Maximum
- Find Minimum

---

## 2. Counting

Used to count elements that match a condition.

```js
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
```

Examples:

- Count Even Numbers
- Count Negative Numbers

---

## 3. Accumulating

Used to calculate a total.

```js
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
}
```

Example:

- Sum Positive Numbers

---

## 4. Searching

Used to find an element or its position.

```js
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    return i;
  }
}
```

Examples:

- Find Index
- Find First Negative Number

---

# Creating a New Array

Some problems require creating a new array.

Example:

```js
function doubleNumbers(numbers) {
  const doubledNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
  }

  return doubledNumbers;
}
```

### Complexity

```text
Time: O(n)
Space: O(n)
```

The additional space is O(n) because the new array can grow based on the input size.

Examples:

- Double Numbers
- Reverse Array
- Remove Negative Numbers

---

# In-Place Modification

In-place modification means changing the original array without creating another array.

Example:

```text
Original:
[0, 1, 0, 3, 12]

Modified:
[1, 3, 12, 0, 0]
```

The goal is often:

```text
Time: O(n)
Space: O(1)
```

---

# Two-Pointer Technique

Two pointers are used to track different positions in an array.

The pattern learned today:

```text
READ  → examines every element
WRITE → tracks where the next valid element belongs
```

---

## Read/Write Pointer Pattern

Example:

```js
let write = 0;

for (let read = 0; read < numbers.length; read++) {
  if (numbers[read] !== target) {
    numbers[write] = numbers[read];
    write++;
  }
}
```

This pattern allows valid elements to be moved to the beginning of the array.

---

# Move Zeros

Move all zeros to the end of an array while keeping the non-zero elements at the beginning.

```js
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
```

### Complexity

```text
Time: O(n)
Space: O(1)
```

---

# Remove Duplicates from Sorted Array

Because the array is sorted, duplicate elements appear next to each other.

```js
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
```

The first `write + 1` elements contain the unique values.

### Complexity

```text
Time: O(n)
Space: O(1)
```

---

# Remove Elements In Place

Remove all occurrences of a target value.

```js
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
```

The first `write` elements contain the remaining values.

### Complexity

```text
Time: O(n)
Space: O(1)
```

---

# Important Comparison

## Creating a New Array

```text
Time:  O(n)
Space: O(n)
```

## Modifying the Original Array

```text
Time:  O(n)
Space: O(1)
```

Sometimes two solutions can have the same time complexity but different space complexity.

---

# Edge Cases Learned

Always consider:

- Empty array
- Target not found
- Target found at the first position
- Target found at the last position
- All elements are duplicates
- No duplicates
- All elements match the target

Example:

```js
if (numbers.length === 0) {
  return 0;
}
```

---

# Practice Completed

## Basic Traversal

- [x] Find Maximum
- [x] Find Minimum
- [x] Count Even Numbers
- [x] Sum Positive Numbers
- [x] Count Negative Numbers

## Searching

- [x] Find Index
- [x] Find First Negative Number

## Creating New Arrays

- [x] Double Numbers
- [x] Reverse Array
- [x] Remove Negative Numbers

## Two Pointers / In-Place Modification

- [x] Move Zeros
- [x] Remove Duplicates from Sorted Array
- [x] Remove Elements

---

# Key Takeaways

- Accessing an array by index is O(1).
- Searching an unsorted array is O(n).
- Traversing an array is O(n).
- Creating a new array that grows with the input requires O(n) additional space.
- Modifying an array in place can reduce additional space to O(1).
- The read/write pointer pattern is useful for filtering and rearranging arrays.
- The `write` pointer often represents the number of valid elements after processing.
- Always consider edge cases.
- Always analyze both time and space complexity.

---

# Files

- `examples.js` — Array concepts and examples.
- `exercises.js` — Array problems solved during Day 2.

---

## Day 02 Status

✅ Completed
