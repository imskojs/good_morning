import {from} from "rxjs";
import {map, reduce} from "rxjs/operators";

type HandCount = { scissors: number, paper: number, rock: number };
export default function oracle(gestures) {
  let solution: string
  // Get number of scissors etc
  from(gestures).pipe(
    reduce((handCount: HandCount, hand: string): HandCount => {
      handCount[hand] = handCount[hand] + 1;
      return handCount;
    }, {scissors: 0, paper: 0, rock: 0}),

    map(({scissors, paper, rock}: HandCount): string => {
      const threshold = 0;
      const winningHands: string[] = [];
      if (scissors - paper > threshold) { winningHands.push('rock'); }
      if (rock - scissors > threshold) { winningHands.push('paper'); }
      if (paper - rock > threshold) { winningHands.push('scissors'); }
      if(winningHands.length === 0) {return 'tie'}
      return winningHands.join('/');
    }),
  ).subscribe(
    (answer: string): void => {
      solution = answer
    }
  )

  return solution;

}
