// Q: Reverse digits in integer

type Int = number

const reverseDigit = (num: Int, reversed: Int = 0): Int => { // O(n)
  if(num === 0) {
    return reversed;
  }
  return reverseDigit(Math.floor(num / 10), reversed * 10 + num % 10);
};

export default reverseDigit;
