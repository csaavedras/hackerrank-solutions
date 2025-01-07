# Plus Minus Ratios

## Table of Contents
- [Problem](#problem)
- [Input Format](#input-format)
- [Output Format](#output-format)
- [Example](#example)
  - [Input](#input)
  - [Output](#output)
  - [Explanation](#explanation)
- [Function Description](#function-description)
  - [Parameters](#parameters)
  - [Print](#print)
- [Constraints](#constraints)
- [Reflection](#reflection)
  - [What I Learned and How I Solved It](#what-i-learned-and-how-i-solved-it)

## Problem
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with six places after the decimal. 

**Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to \(10^{-6}\) are acceptable.

## Input Format
- The first line contains an integer, \(n\), the size of the array.
- The second line contains \(n\) space-separated integers that describe the array.

## Output Format
Print the following three lines, each to six decimal places:
1. Proportion of positive values
2. Proportion of negative values
3. Proportion of zeros

## Example

### Input
```
6
-4 3 -9 0 4 1
```

### Output
```
0.500000
0.333333
0.166667
```

### Explanation
There are 6 elements in the array:
- Positive numbers: 3, 4, 1 (3 total)
- Negative numbers: -4, -9 (2 total)
- Zeros: 0 (1 total)

The proportions are calculated as follows:
- Positive: \( \frac{3}{6} = 0.500000 \)
- Negative: \( \frac{2}{6} = 0.333333 \)
- Zeros: \( \frac{1}{6} = 0.166667 \)

## Function Description
Complete the `plusMinus` function in the editor below.

### Parameters
- `int arr[n]`: an array of integers

### Print
Print the ratios of positive, negative, and zero values in the array. Each value should be printed on a separate line with six digits after the decimal. The function should not return a value.

## Constraints
- \(0 < n \leq 100\)
- \(-100 \leq arr[i] \leq 100\)

---

## Reflection

### What I Learned and How I Solved It
To solve this problem, I started by analyzing the requirements, reviewing the input and output examples, and understanding the expected behavior of the solution. I then created a to-do list with clear objectives for writing the code:

1. Iterate through the array to determine the total count of positive, negative, and zero elements.
2. Calculate the proportion of each subset by dividing the respective count by the total number of elements.
3. Ensure that the output is formatted to six decimal places as specified.

Initially, I implemented a simple solution using a `for` loop with three conditions to count positive, negative, and zero elements. Once this was complete, I identified the formula to calculate the proportion of a subset: `subset count / total count`. I then applied this formula and formatted the results to six decimal places to meet the problem requirements.

This step-by-step approach helped me break the problem into manageable parts and arrive at the correct solution efficiently.
