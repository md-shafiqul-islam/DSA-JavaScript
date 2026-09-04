# Notes — Arrays & Same-Direction Two Pointers

## 1. Array Traversal

Traversal means visiting array elements one by one.

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

If every element may be visited, the time complexity is `O(n)`.

## 2. Accumulator Pattern

An accumulator stores a value that changes during iteration.

Common accumulators include:

- `count`
- `sum`
- `max`
- `min`

```js
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
```

This pattern is commonly used for counting, summing, finding the maximum, and finding the minimum.

## 3. Searching an Array

Searching usually checks elements one by one until the target is found.

```js
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    return i;
  }
}

return -1;
```

- Best case: `O(1)`
- Worst case: `O(n)`

Returning immediately when the answer is found is called an **early return**.

## 4. New Array vs In-Place Modification

Creating a new array:

```js
const result = [];
```

If the array grows with the input size, the space complexity is `O(n)`.

In-place modification changes the existing array.

```js
numbers[write] = numbers[read];
```

No new input-sized array is created, so the additional space complexity is usually `O(1)`.

## 5. Same-Direction Two Pointers

Two pointers are variables that track different positions in an array.

```js
let read = 0;
let write = 0;
```

Both pointers move from left to right.

The `read` pointer checks the current element.

The `write` pointer tracks where the next valid element should be placed.

## 6. Read and Write Pointer Pattern

```js
let write = 0;

for (let read = 0; read < numbers.length; read++) {
  if (numbers[read] !== target) {
    numbers[write] = numbers[read];
    write++;
  }
}
```

This pattern is useful for:

- Removing elements
- Removing duplicates
- Moving zeros
- Filtering an array in place

## 7. Sorted Arrays and Duplicates

In a sorted array, duplicate values are placed next to each other.

```js
[1, 1, 2, 2, 3];
```

This allows us to compare the current value with the previously stored unique value.

## 8. Complexity of Two Pointers

Using two pointers does not automatically mean `O(n²)`.

If both pointers move through the array without repeatedly restarting, the total work is usually:

- Time: `O(n)`
- Space: `O(1)`

## 9. Mental Model

Before solving an array problem, ask:

1. Do I need to check every element?
2. Do I need to count, sum, find max, or find min?
3. Do I need a new array?
4. Can I modify the existing array?
5. Do I need two pointers?
6. Is the array sorted?

**Read → Check the current element**

**Write → Place the next valid element**
