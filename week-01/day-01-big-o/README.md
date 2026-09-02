# Day 01 — Big-O and Complexity

## Topics Covered

- What is an algorithm?
- Big-O notation
- Time complexity
- Space complexity
- Constant time — O(1)
- Linear time — O(n)
- Quadratic time — O(n²)
- Logarithmic time — O(log n)
- Best-case complexity
- Average-case complexity
- Worst-case complexity

---

## What I Learned

### O(1) — Constant Time

The number of operations does not grow as the input size increases.

Example:

```js
const firstElement = numbers[0];
```

---

### O(n) — Linear Time

The number of operations grows linearly with the input size.

Example:

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

---

### O(n²) — Quadratic Time

The number of operations grows quadratically with the input size.

Example:

```js
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}
```

---

### O(log n) — Logarithmic Time

The algorithm repeatedly reduces the problem size, often by half.

Binary Search is a common example of O(log n).

---

## Important Rules

### 1. Consecutive Loops

Two loops that run separately are added.

```text
O(n) + O(n) = O(2n)
```

Big-O ignores constant factors:

```text
O(2n) → O(n)
```

---

### 2. Nested Loops

Nested loops are not automatically O(n²).

The complexity depends on how many times each loop runs.

Example:

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 5; j++) {
    // Work
  }
}
```

The inner loop runs a constant number of times.

```text
n × 5 = 5n
```

Therefore:

```text
O(n)
```

---

### 3. Nested Loops Dependent on n

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Work
  }
}
```

```text
n × n = n²
```

Therefore:

```text
O(n²)
```

---

### 4. Space Complexity

Space complexity measures how much additional memory an algorithm uses.

If an algorithm creates a new array containing up to `n` elements:

```text
Space → O(n)
```

If an algorithm only uses a fixed number of variables:

```text
Space → O(1)
```

---

## Best, Average, and Worst Cases

Example:

```js
function containsZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      return true;
    }
  }

  return false;
}
```

| Case             | Complexity |
| ---------------- | ---------- |
| Best Case        | O(1)       |
| Average Case     | O(n)       |
| Worst Case       | O(n)       |
| Space Complexity | O(1)       |

---

## Key Takeaways

- `n` usually represents the input size.
- Big-O describes how the work grows as input size grows.
- Big-O ignores constants and smaller terms.
- A single loop through an input is usually O(n).
- Consecutive loops are added.
- Nested loops require careful analysis.
- Nested loops are not always O(n²).
- A constant inner loop does not create O(n²).
- Early returns can improve the best-case complexity.
- Space complexity measures additional memory usage.

---

## Complexity Summary

| Pattern                | Time Complexity |
| ---------------------- | --------------- |
| Direct array access    | O(1)            |
| Single loop            | O(n)            |
| Binary Search          | O(log n)        |
| Nested loops through n | O(n²)           |
| Constant inner loop    | O(n)            |

---

## Practice Completed

- [x] Analyze direct array access.
- [x] Analyze a single loop.
- [x] Analyze consecutive loops.
- [x] Analyze nested loops.
- [x] Analyze a constant inner loop.
- [x] Analyze additional array space.
- [x] Analyze best-case complexity.
- [x] Analyze worst-case complexity.
- [x] Analyze average-case complexity.
- [x] Analyze duplicate detection with nested loops.

---

## Reflection

### What I Understood Well

- O(1), O(n), and O(n²).
- Time complexity versus space complexity.
- Consecutive loops.
- Constant inner loops.
- Best-case and worst-case analysis.

### What I Need to Practice More

- Analyzing nested loops where the inner loop starts from a changing position.
- Calculating total operations when loop lengths are different.

---

## Files

- `examples.js` — Examples of common time and space complexities.
- `exercises.js` — Practice problems and complexity analysis exercises.

---

## Day 01 Status

✅ Completed
