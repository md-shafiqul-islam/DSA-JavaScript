# Searching — Notes

## Searching

Searching means finding a target value inside a collection.

Two fundamental approaches:

- Linear Search
- Binary Search

## Linear Search

Check elements one by one.

```js
function linearSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return -1;
}
```

- Works with any order.
- Time: `O(n)`
- Space: `O(1)`

## Binary Search

Binary Search repeatedly removes half of a sorted search space.

```js
let left = 0;
let right = numbers.length - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
}
```

If:

```js
numbers[mid] < target;
```

search right:

```js
left = mid + 1;
```

If:

```js
numbers[mid] > target;
```

search left:

```js
right = mid - 1;
```

- Requires sorted/ordered data.
- Time: `O(log n)`
- Space: `O(1)`

## Search Insert Position

After binary search finishes without finding the target:

```js
return left;
```

`left` represents the position where the target should be inserted.

## Important Rule

```text
Unsorted → Linear Search

Sorted → Binary Search may be possible
```

Always ask whether the search space is ordered before choosing Binary Search.
