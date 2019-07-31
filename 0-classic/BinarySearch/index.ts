// Search a sorted array by repeatedly dividing the search interval in half.

const binarySearch = (sorted, targetNum, begIndex = 0, endIndex = sorted.length - 1) => {
  const midIndex = Math.floor((endIndex - begIndex) / 2) + begIndex;
  const currentNum = sorted[midIndex];
  if (currentNum === targetNum) {
    return midIndex;
  }
  if (begIndex >= endIndex) {
    return -1;
  }
  return binarySearch(
    sorted, targetNum,
    currentNum < targetNum ? midIndex + 1 : begIndex,
    currentNum > targetNum ? midIndex - 1 : endIndex
  );
};

export default binarySearch;

