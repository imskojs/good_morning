export default function almostIncreasingSequence(sequence) {
  'use strict';
  let strike = 0
  let max = -99999999999
  let secondMax = -99999999999
  for (let i = 0; i < sequence.length; ++i) {
    if (sequence[i] > max) {
      secondMax = max
      max = sequence[i]
    } else if (sequence[i] > secondMax) {
      max = sequence[i]
      strike++
      if (strike > 1) return false
    } else {
      strike++
      if (strike > 1) return false
    }
  }
  return true
}
