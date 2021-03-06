// Q: Find number of digits.

// If N is a number and K is number of digits in N;
// There are two numbers such that N is between these two numbers eg) say N = 120 then it's between
// 100 and 1000, which means K is 3, and K -1 is 2;
// i.e. 10^(K-1) <= N < 10^K
// -> K -1 <= log(N) < K
// -> K <= log(N) + 1
// -> K = floor(log(N) + 1)

// Note: the log of any number is the power to which the base must be raised to give that number;
// so, log10(120) would be 2.SOMETHING as 120 = 10^2.SOMETHING

type Int = number;

const numberOfDigits = (num: Int) => { // O(1)
  return Math.floor(Math.log10(num) + 1);
};

export default numberOfDigits;
