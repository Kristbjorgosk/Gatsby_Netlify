---
title: Bit of an overview of Functional Programming
date: 2020-11-24T18:08:58.451Z
description: OverView of Functional programming in JavaScript
---
##### Functional programming (FP) is a way of writing code in a more organized way, the code will be easier to read, prove and test.

- - -

FP is all about functions, *pure functions* but sometimes it is inevitable to write *impure functions*

**Pure functions**

1. Same input, same output 
2. Have no side effect 

**Impure functions**

1. Data is changed inside the function
2. The function needs to interact with data outside the function
3. You modify an object or reassign a variable. 

- - -

The fundamentals of functional programming are recursion and composition.

* **Recursion** - when a function calls itself 
* **Composition** - when functions are chained together or when function execution is passed into a function. 

Composition is how we generate a higher order function - high order functions are a bit different in FP than you might be used to. 

**High order functions** or methods are functions that accept functions as arguments or return functions. \
You are most likely familiar with **loop()** but in FP you shouldn't use that but instead use **map()**, **reduce()** and **filter()** for example. \
The reason for this is because when using **loop()** you are recreating a new array each time and that will first of all make you have an unnecessary amount of data & you are going against the “rules” of FP by *changing* the data. 

> Instead you want to copy the array and add data to the copy *not* to the original array

This can be done with **map()** or **reduce()**. \
**Map()** method is for when you want to get all of the values from the array and **reduce()** is for when you want to get one value from the array. \
The same goes for objects, when creating a new object you should use **object.assign()**. \
Like you are probably familiar to **push()**, **pop()** and **splice()** methods to add, take out or change an object. In functional programming you should use **concat()** to add and **array.filter()** to take out an object or change it. \
It is the same reason as goes for the array, you don't want to change the original data, instead you want to make a copy and amend the copy. 

- - -

You should know that it is *impossible* to have only 100% pure functions in your code, especially if you are doing a big or complex project, then you most likely want to interact with data outside the function for example. And that is totally okay, it will only make coding more difficult than it is if you put yourself in a box and try to code only pure functions, let’s remember the functionality of the code needs to work. It is a good rule to have 80% of your code in pure functions and the rest can be impure functions. If most of the code is pure it will make it way easier to maintain, change and debug and you won't have to worry about breaking the code somewhere else as the purse function will not affect any other functions in your code. 

#### [](https://dev.to/kristbjorgosk/bit-of-an-overview-of-functional-programming-3977#this-is-only-the-tip-of-the-iceberg-and-you-can-dive-way-deeper-in-functional-programming-but-this-should-give-you-a-bit-of-an-overview-of-the-idea-behind-it)This is only the tip of the iceberg and you can dive way deeper in functional programming but this should give you a bit of an overview of the idea behind it.