# Notes — Big-O Complexity

## 1. What Is Big-O?

Big-O notation describes how an algorithm's time or space requirements grow as the input size grows. Big-O focuses on the growth rate rather than the exact number of operations.

## 2. Time Complexity

Time complexity describes how the number of operations grows as the input size increases.

```js
numbers[0];
```

Accessing one element takes constant time: `O(1)`.

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Checking every element takes linear time: `O(n)`.

## 3. O(1) — Constant Time

`O(1)` means the amount of work does not grow with the input size.

```js
const firstElement = numbers[0];
```

Even if the array becomes larger, the algorithm performs a fixed amount of work.

## 4. O(n) — Linear Time

`O(n)` means the number of operations grows linearly with the input size.

```js
for (let i = 0; i < n; i++) {
  // operation
}
```

If `n` increases, the number of iterations also increases.

## 5. O(n²) — Quadratic Time

`O(n²)` commonly occurs when one loop depends on `n` and contains another loop that also depends on `n`.

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // operation
  }
}
```

## 6. Nested Loops Are Not Always O(n²)

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 5; j++) {
    // operation
  }
}
```

The inner loop runs a fixed number of times. The total complexity is `O(5n)`, which simplifies to `O(n)`.

## 7. Separate Loops

Separate loops are added.

```text
O(n) + O(n) = O(2n) = O(n)
```

Constants are ignored in Big-O notation.

## 8. Space Complexity

Space complexity describes how much additional memory an algorithm uses as the input size grows.

```js
let count = 0;
let max = 0;
```

A fixed number of variables uses `O(1)` additional space.

```js
const result = [];
```

If a new array can grow based on the input size, the additional space is `O(n)`.

## 9. Best Case and Worst Case

Some algorithms can return early.

```js
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    return i;
  }
}
```

- Best case: Target is found immediately → `O(1)`
- Worst case: Target is at the end or not found → `O(n)`

## 10. Important Big-O Rules

- Ignore constants: `O(2n) → O(n)`
- Keep the dominant term: `O(n² + n) → O(n²)`
- Separate loops are added: `O(n) + O(n) → O(n)`
- Dependent nested loops are multiplied: `O(n) × O(n) → O(n²)`

## 11. Mental Model

Before analyzing an algorithm, ask:

1. Does it access one value or check every element?
2. Are the loops separate or nested?
3. Do nested loops both depend on `n`?
4. Does the algorithm create additional data?
5. Can the function return early?

**Big-O focuses on: Input size → Operations → Additional memory**
