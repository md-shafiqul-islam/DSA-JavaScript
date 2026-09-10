# Notes — Hashing

## 1. Hashing

Hashing is a technique for storing information so that values can be looked up efficiently.

In JavaScript, common hash-based structures are:

- `Object`
- `Map`
- `Set`

## 2. Object

An object stores key-value pairs.

```js
const frequency = {};

frequency["apple"] = 3;

console.log(frequency["apple"]); // 3
```

Objects are commonly used for frequency counting and simple lookups.

## 3. Map

`Map` stores key-value pairs and provides methods specifically designed for this purpose.

```js
const map = new Map();

map.set("apple", 3);
map.get("apple"); // 3
map.has("apple"); // true
map.delete("apple");
```

Main methods:

- `set()` → store
- `get()` → retrieve
- `has()` → check
- `delete()` → remove

Hash-based lookup is typically `O(1)` average time.

## 4. Set

`Set` stores unique values.

```js
const seen = new Set();

seen.add(10);
seen.add(20);
seen.add(10);

console.log(seen); // {10, 20}
```

`Set` is useful for duplicate detection and tracking values that have already been seen.

## 5. Frequency Counter

Use a hash structure to count how many times each value appears.

```js
const frequency = {};

for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];

  if (frequency[value] === undefined) {
    frequency[value] = 1;
  } else {
    frequency[value]++;
  }
}
```

If the input has `n` elements:

- Time: `O(n)`
- Space: `O(n)`

## 6. Seen Pattern

Use a `Set` when the main question is:

> Have I seen this value before?

```js
const seen = new Set();

for (let i = 0; i < numbers.length; i++) {
  if (seen.has(numbers[i])) {
    return true;
  }

  seen.add(numbers[i]);
}
```

This is useful for duplicate detection.

Typical complexity:

- Time: `O(n)`
- Space: `O(n)`

## 7. Lookup Pattern

Store a value with useful information such as its index.

```js
const seen = new Map();

seen.set(numbers[i], i);
```

Later, we can retrieve the stored information efficiently.

This pattern is useful for problems such as Two Sum.

## 8. Two Sum Pattern

For each number, calculate the value needed to reach the target.

```js
const needed = target - numbers[i];

if (seen.has(needed)) {
  return [seen.get(needed), i];
}

seen.set(numbers[i], i);
```

The hashing solution runs in:

- Time: `O(n)`
- Space: `O(n)`

The brute-force solution uses nested loops:

- Time: `O(n²)`
- Space: `O(1)`

## 9. Hashing Trade-off

Hashing often reduces time complexity by using additional memory.

```text
Without hashing → O(n²) time, O(1) space
With hashing    → O(n) time, O(n) space
```

## 10. Mental Model

When a problem involves:

- Counting
- Duplicates
- Unique values
- "Have I seen this before?"
- Fast lookup
- Matching values

Ask:

> Can hashing help?

**Frequency → Object / Map**

**Seen / Unique → Set**

**Key → Information → Map / Object**
