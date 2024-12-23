// 726. Number of Atoms
// Hash Table, String, Stack, Sorting

// Level - Hard

// Given a string formula representing a chemical formula, return the count of each atom.
// The atomic element always starts with an uppercase character, then zero or more lowercase letters,
// representing the name.
// One or more digits representing that element's count may follow if the count is greater than 1. If the
// count is 1, no digits will follow.
// For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
// Two formulas are concatenated together to produce another formula.
// For example, "H2O2He3Mg4" is also a formula.
// A formula placed in parentheses, and a count (optionally added) is also a formula.
// For example, "(H2O2)" and "(H2O2)3" are formulas.
// Return the count of all elements as a string in the following form: the first name (in sorted order),
// followed by its count (if that count is more than 1), followed by the second name (in sorted order),
// followed by its count (if that count is more than 1), and so on.
// The test cases are generated so that all the values in the output fit in a 32-bit integer.

// Example 1:
// Input: formula = "H2O"
// Output: "H2O"
// Explanation: The count of elements are {'H': 2, 'O': 1}.

// Example 2:
// Input: formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

// Example 3:
// Input: formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

// Constraints:
// 1 <= formula.length <= 1000
// formula consists of English letters, digits, '(', and ')'.
// formula is always valid.

// const countOfAtoms = function (formula) {
//   const NUMBERS = "0123456789";
//   const atoms = {};
//   const stack = [];
//   let i = 0;
//   let openBracket = 0;
//   while (i < formula.length) {
//     while (!NUMBERS.includes(formula[i]) || formula[i] !== ")") {
//       stack.push(formula[i]);
//       if (formula[i] === "(") openBracket++;
//       i++;
//     }
//     if (NUMBERS.includes(formula[i]) && openBracket === 0) {
//       let num = "";
//       while (NUMBERS.includes(stack[stack.length - 1])) {
//         num = stack.pop() + num;
//       }
//       let el = "";
//       while (
//         stack[stack.length - 1] !== stack[stack.length - 1].toUpperCase()
//       ) {
//         el = stack.pop() + el;
//       }
//       el = stack.pop() + el;
// 			addToAtoms(atoms, el, num)
//     }
//   }
// };

const addToAtoms = (atoms, atom, count) => {
  atoms[atom] ? (atoms[atom] += Number(count)) : (atoms[atom] = Number(count));
};

const countOfAtoms = function (formula) {
  const NUMBERS = "0123456789";
  const stack = [];
  let i = formula.length - 1;

  while (i >= 0) {
    while (formula[i] !== "(" && i >= 0) {
      let el = "";
      while (formula[i] !== formula[i].toUpperCase()) {
        el = formula[i] + el;
        i--;
      }
      el = formula[i] + el;
      stack.push(el);
      i--;
    }
    if (formula[i] === "(") {
      let el = "";
      while (stack[stack.length - 1] !== ")") {
        el += stack.pop();
      }
      if (stack[stack.length - 1] === ")") {
        stack.pop();
        i--;
      }
      let num = "";
      while (NUMBERS.includes(stack[stack.length - 1])) {
        num += stack.pop();
      }
      if (num === "") {
        stack.push(el);
      } else {
        num = Number(num);
        let res = "";
        for (let j = 0; j < num; j++) {
          res += el;
        }
        stack.push(res);
      }
    }
  }

  let list = "";
  while (stack.length > 0) {
    let el = stack.pop();
    if (!NUMBERS.includes(el)) {
      list += el;
    } else {
      let num = el;
      while (NUMBERS.includes(stack[stack.length - 1])) {
        num += stack.pop();
      }
      list += num;
    }
  }

  const atoms = {};
  i = 0;
  while (i < list.length) {
    let el = list[i];
    i++;
    while (
      !NUMBERS.includes(list[i]) &&
      i < list.length &&
      list[i] !== list[i].toUpperCase()
    ) {
      el += list[i];
      i++;
    }
    if (!NUMBERS.includes(list[i])) {
      addToAtoms(atoms, el, 1);
    } else {
      let num = list[i];
      i++;
      while (NUMBERS.includes(list[i]) && i < list.length) {
        num += list[i];
        i++;
      }
      addToAtoms(atoms, el, num);
    }
  }

  let res = "";
  const atomList = Object.keys(atoms).sort();
  for (let i = 0; i < atomList.length; i++) {
    if (atoms[atomList[i]] === 1) {
      res += atomList[i];
    } else {
      res += atomList[i] + atoms[atomList[i]];
    }
  }
  return res;
};
