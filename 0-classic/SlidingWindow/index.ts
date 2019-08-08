const findAverageOfSubArray = (subArraySize: number, array: number[]): number[] => {
  const subArrayLastIndex = subArraySize - 1;
  return array.reduce(({start, result, sum}, value, index) => {
    sum += value;
    if (index >= subArrayLastIndex) {
      result = result.concat([sum / subArraySize]);
      sum -= array[start++]
    }
    return {start, result, sum}
  }, {start: 0, result: [], sum: 0}).result;
};

const findMaxSubArray = (subArraySize: number, array: number[]): number => {
  const subArrayLastIndex = subArraySize - 1;
  return array.reduce(({sum, max, start}, value, index) => {
    sum += value;
    if (index >= subArrayLastIndex) {
      if (sum > max) {
        max = sum;
      }
      sum -= array[start++]
    }
    return {start, sum, max}
  }, {start: 0, sum: 0, max: -Infinity}).max
};

const findSmallestSubArray = (targetSum: number, array: number[]): number[] => {

  const {resultStart, resultEnd} = array.reduce(({start, sum, resultSum, resultStart, resultEnd}, value, index) => {
    sum += value;
    while (sum >= targetSum) {
      if(index - start + 1 < resultEnd - resultStart + 1) {
        resultStart = start;
        resultEnd = index;
        resultSum = sum;
      }
      sum -= array[start++]
    }
    return {start, sum, resultStart, resultEnd, resultSum}
  }, {start: 0, sum: 0, resultStart: -Infinity, resultEnd: Infinity, resultSum: Infinity});

  return array.slice(resultStart, resultEnd + 1);
};

export {
  findAverageOfSubArray,
  findMaxSubArray,
  findSmallestSubArray
};
