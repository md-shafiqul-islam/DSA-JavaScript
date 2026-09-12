# Day 05 — Two Pointers and Sliding Window

This folder contains my notes, examples, and practice problems for **Two Pointers** and **Sliding Window** techniques.

## Topics Covered

- What are pointers?
- Opposite-direction two pointers
- Same-direction read/write pointers
- Sliding window
- Fixed-size sliding window
- Removing the outgoing element
- Adding the incoming element
- Time and space complexity
- Common two-pointer and sliding-window patterns

## Key Patterns

### Two Pointers

Use two indexes to process data efficiently instead of repeatedly scanning the same elements.

Common patterns:

- Left and right pointers moving toward each other.
- Read and write pointers moving in the same direction.

### Sliding Window

A sliding window represents a continuous section of an array or string.

Instead of recalculating every window from scratch:

1. Remove the element leaving the window.
2. Add the new element entering the window.
3. Update the required result.

This can reduce many problems from `O(n²)` to `O(n)`.

## Files

- `README.md` — Topic overview
- `notes.md` — Concise revision notes
- `examples.js` — Examples and implementations
- `exercises.js` — Practice problems and solutions

## Complexity Goal

The main goal of these techniques is to avoid unnecessary repeated work and achieve efficient solutions, often `O(n)` time with `O(1)` extra space.
