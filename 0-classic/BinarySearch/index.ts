// Q: search for number in sorted array.

// Search a sorted array by repeatedly dividing the search interval in half.
type Index = number;

const binarySearch = ( // O(log n)
  sorted: number[],
  targetNum: number,
  begIndex: Index = 0,
  endIndex: Index = sorted.length - 1
): Index => {
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

