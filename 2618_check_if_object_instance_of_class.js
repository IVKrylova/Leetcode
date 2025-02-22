// 2618. Check if Object Instance of Class

// Level - Medium

// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an
// object is considered an instance of a given class if that object has access to that class's methods.
// There are no constraints on the data types that can be passed to the function. For example, the value or the class
// could be undefined.

// Example 1:
// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

// Example 2:
// Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
// Output: true
// Explanation:
// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal); // true
// Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

// Example 3:
// Input: func = () => checkIfInstanceOf(Date, Date)
// Output: false
// Explanation: A date constructor cannot logically be an instance of itself.

// Example 4:
// Input: func = () => checkIfInstanceOf(5, Number)
// Output: true
// Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered
// an instance of Number because it accesses the Number methods. For example "toFixed()".

const checkIfInstanceOf = function (obj, classFunction) {
  if (
    classFunction === undefined ||
    Array.isArray(classFunction) ||
    obj === null ||
    classFunction === null
  ) {
    return false;
  } else if (
    typeof obj === "boolean" &&
    (classFunction === Boolean || classFunction === Object)
  ) {
    return true;
  } else if (
    typeof obj === "string" &&
    (classFunction === String || classFunction === Object)
  ) {
    return true;
  } else if (Number.isNaN(obj) && classFunction === Object) {
    return true;
  } else if (
    typeof obj === "bigint" &&
    (classFunction === BigInt || classFunction === Object)
  ) {
    return true;
  } else if (
    typeof obj === "number" &&
    (classFunction === Number || classFunction === Object)
  ) {
    return true;
  } else if (
    typeof obj === "symbol" &&
    (classFunction === Symbol || classFunction === Object)
  ) {
    return true;
  } else {
    return (
      classFunction.constructor === Function && obj instanceof classFunction
    );
  }
};
