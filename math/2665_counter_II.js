const createCounter = function (init) {
  let currentValue = init;
  return {
    increment: () => {
      currentValue += 1;
      return currentValue;
    },
    decrement: () => {
      currentValue -= 1;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return init;
    },
  };
};
