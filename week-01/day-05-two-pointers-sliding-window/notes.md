# Two Pointers and Sliding Window — Notes

## Two Pointers

Two pointers means using two indexes to process an array or string efficiently.

### Opposite Direction

One pointer starts from the beginning and another from the end.

```js
let left = 0;
let right = numbers.length - 1;

while (left < right) {
  // process
  left++;
  right--;
}
```

Useful for:

- Palindrome
- Reverse array
- Pair sum in a sorted array

Usually `O(n)` time and `O(1)` extra space.

## Same Direction

Both pointers move from left to right.

Example:

```js
let write = 0;

for (let read = 0; read < numbers.length; read++) {
  // process numbers[read]
}
```

Useful for:

- Removing elements
- Removing duplicates
- In-place array modification

## Sliding Window

A window represents a continuous part of an array or string.

Instead of recalculating every window:

```text
Remove outgoing element
        ↓
Update window
        ↓
Add incoming element
```

### Fixed-Size Window

For a window of size `k`:

```js
for (let i = 0; i < k; i++) {
  windowSum += numbers[i];
}

for (let right = k; right < numbers.length; right++) {
  const left = right - k;

  windowSum = windowSum - numbers[left] + numbers[right];
}
```

This avoids recalculating the entire window.

## Complexity

Brute force fixed-window approach:

- Time: `O(n × k)`
- Can become `O(n²)`

Sliding window:

- Time: `O(n)`
- Extra space: `O(1)` in most cases

## Key Mental Model

**Two pointers:** Move indexes intelligently.

**Sliding window:** Keep the previous window's work and update only what changed.
