import {from} from "rxjs";
import {map, reduce} from "rxjs/operators";

type HandCount = { scissors: number, paper: number, rock: number };
type Hand = 'rock' | 'paper' | 'scissors';

export default function oracle(gestures) {
  let solution: string
  from(gestures).pipe(
    reduce((handCount: HandCount, hand: Hand): HandCount => {
      handCount[hand] = handCount[hand] + 1;
      return handCount;
    }, {scissors: 0, paper: 0, rock: 0}),

    map(({scissors, paper, rock}: HandCount): string => {
      const threshold = 0;
      const winningHands: Hand[] = [];
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
