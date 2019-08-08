import {findAverageOfSubArray, findMaxSubArray, findSmallestSubArray} from "./index";

describe('findAverageOfSubArray', () => {
  const parameters = [
    {
      desc: 'finds averages of all contiguous sub arrays of given subArraySize',
      input: {subArraySize: 2, array: [1, 2, 3, 4, 5]},
      result: {array: [1.5, 2.5, 3.5, 4.5]}
    },
  ];

  parameters.forEach(({desc, input, result}) => {
    test(desc, () => {
      const output = findAverageOfSubArray(input.subArraySize, input.array);
      expect(output).toEqual(result.array);
    });
  });

});

describe('findMaxSubArray', () => {
  const parameters = [
    {
      desc: 'finds a max sum of sub array of given subArraySize',
      input: {subArraySize: 2, array: [1, 2, 3, 4, 5]},
      result: {num: 9}
    },
  ];

  parameters.forEach(({desc, input, result}) => {
    test(desc, () => {
      const output = findMaxSubArray(input.subArraySize, input.array);
      expect(output).toEqual(result.num);
    });
  });

});

describe('findSmallestSubArray', () => {
  const parameters = [
    {
      desc: 'finds a smallest sub array ',
      input: {targetSum: 8, array: [1, 2, 3, 4, 5]},
      result: {array: [4, 5]}
    },
  ];

  parameters.forEach(({desc, input, result}) => {
    test(desc, () => {
      const output = findSmallestSubArray(input.targetSum, input.array);
      expect(output).toEqual(result.array);
    });
  });

});
