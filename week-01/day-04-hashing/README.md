# Day 04 — Hashing

This day focuses on hashing using JavaScript `Object`, `Map`, and `Set`.

## Topics Covered

- Hashing fundamentals
- Object as a hash table
- `Map`
- `Set`
- Frequency counter
- Seen pattern
- Fast lookup
- Duplicate detection
- Character frequency
- Hashing with arrays and strings
- Two Sum
- Time and space trade-offs

## Key Patterns

### Frequency Counter

Store how many times each value appears.

```js
const frequency = new Map();

frequency.set(value, (frequency.get(value) || 0) + 1);
```

### Seen Pattern

Track values that have already appeared.

```js
const seen = new Set();

if (seen.has(value)) {
  return true;
}

seen.add(value);
```

### Lookup Pattern

Store useful information against a key for fast retrieval.

```js
const seen = new Map();

seen.set(numbers[i], i);
```

## Complexity

Hash-based lookup is typically `O(1)` average time.

Using hashing often changes a solution from:

```text
O(n²) time + O(1) space
```

to:

```text
O(n) time + O(n) space
```

## Practice Problems

1. Count Frequency
2. Count Characters
3. Contains Duplicate
4. First Repeated Character
5. First Unique Character
6. Has Common Element
7. Count Unique Values
8. Two Sum

## Key Takeaway

> Hashing allows us to store information for fast lookup, often reducing time complexity at the cost of additional memory.
