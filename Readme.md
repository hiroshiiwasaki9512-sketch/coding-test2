---

# 📘 JavaScript Coding Problems

### *Medium → Hard–Medium Difficulty*

---

## **1. Chunk Array (Medium)**

### **Description**

Implement a function `chunk(array, size)` that splits an array into smaller sub-arrays (“chunks”) of the specified size.

* The last chunk may be smaller if there aren’t enough items.
* Only use loops or array methods—no external libraries.

### **Function Signature**

```js
function chunk(array, size) { }
```

### **Examples**

#### **Input**

```js
chunk([1, 2, 3, 4, 5], 2)
```

#### **Output**

```js
[[1, 2], [3, 4], [5]]
```

---

#### **Input**

```js
chunk(["a", "b", "c", "d"], 3)
```

#### **Output**

```js
[["a", "b", "c"], ["d"]]
```

---

### **Constraints**

* `size` is a positive integer.
* `array` may contain any primitive values.
* You may not use `.splice()` to modify the input array (treat it as immutable).

---

---

## **2. Balanced Brackets (Medium)**

### **Description**

Write a function `isBalanced(str)` that checks whether a string contains **valid and balanced** brackets.

Supported bracket types:

* `()`
* `{}`
* `[]`

A string is considered *balanced* when:

* Every opening bracket has a matching closing bracket.
* Brackets close in the correct order (stack behavior).

### **Function Signature**

```js
function isBalanced(str) { }
```

### **Examples**

#### **Input**

```js
isBalanced("([]{})")
```

#### **Output**

```js
true
```

---

#### **Input**

```js
isBalanced("([)]")
```

#### **Output**

```js
false
```

---

#### **Input**

```js
isBalanced("(((())))")
```

#### **Output**

```js
true
```

---

#### **Input**

```js
isBalanced("[)")
```

#### **Output**

```js
false
```

---

### **Constraints**

* Input string may contain non-bracket characters (ignore them).
* Must use a **stack-based approach**.
* Do not use `eval` or any unsafe parsing technique.

---

---

## **3. Deep Array & Object Flatten (Hard–Medium)**

### **Description**

Write a function `deepFlatten(value)` that extracts **all primitive values** from a deeply nested structure.

The structure may contain:

* Arrays of any depth
* Objects containing arrays or other objects
* Mixed types
* Nulls, numbers, strings, booleans

The goal:
👉 Return a flat array containing **only primitive values** (numbers, strings, booleans, null).

Use recursion and `Array.isArray()` where appropriate.

### **Function Signature**

```js
function deepFlatten(value) { }
```

---

### **Example 1**

#### **Input**

```js
deepFlatten({
  a: [1, 2],
  b: { c: [3, 4], d: 5 },
  e: [[6], [7, [8]]]
})
```

#### **Output**

```js
[1, 2, 3, 4, 5, 6, 7, 8]
```

---

### **Example 2**

#### **Input**

```js
deepFlatten([1, [2, [3, [4]]]])
```

#### **Output**

```js
[1, 2, 3, 4]
```

---

### **Example 3**

#### **Input**

```js
deepFlatten({
  x: { y: { z: true } },
  arr: [null, [false, ["hi"]]]
})
```

#### **Output**

```js
[true, null, false, "hi"]
```

---

### **Constraints**

* For objects: iterate keys and flatten their values.
* For arrays: flatten elements recursively.
* Skip `undefined` and functions.
* Do not use `JSON.stringify()` or similar hacks.
* You **must** use recursion.

---
