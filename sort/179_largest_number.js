const compare = (a, b) => {
  const num1 = a.toString();
  const num2 = b.toString();
  return Number(num1 + num2) > Number(num2 + num1);
};

const largestNumber = (nums) => {
  if (nums.every((el) => el === 0)) return "0";
  for (let i = 1; i < nums.length; i++) {
    let itemToInsert = nums[i];
    let j = i;

    while (j > 0 && compare(itemToInsert, nums[j - 1])) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = itemToInsert;
  }

  return nums.join("");
};
