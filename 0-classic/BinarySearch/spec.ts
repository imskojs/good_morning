import binarySearch from './index';

describe('binarySearch', () => {
  const parameters = [
    {
      desc: 'finds target number when sorted array has an even number of items',
      input: {
        sorted: [1, 2, 3, 4, 5, 6],
        targetNum: 2
      },
      result: {
        index: 1
      }
    },
    {
      desc: 'finds target number when sorted array has an odd number of items',
      input: {
        sorted: [1, 2, 3, 5, 6],
        targetNum: 5
      },
      result: {
        index: 3
      }
    },
    {
      desc: 'returns -1 when sorted array is zero in length',
      input: {
        sorted: [],
        targetNum: 1
      },
      result: {
        index: -1
      }
    }
  ];


  parameters.forEach(({desc, input, result}) => {
    test(desc, () => {
      expect(binarySearch(input.sorted, input.targetNum)).toEqual(result.index)
    });
  });

});
