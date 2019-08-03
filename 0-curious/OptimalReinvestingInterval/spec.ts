import {calcRatePerHour, totalAtom} from './index'

describe('calcRatePerHour', () => {
  const params = [
    {
      desc: 'calculate rate per hour from inflation percent per year, operationFee percent, totalStake percent',
      input: {
        inflation: 7.62,
        totalStake: 70.19,
        operationFee: 10
      },
      result: {
        rate: 0.00001115367876234175
      }
    },
  ];

  params.forEach(({desc, input, result}) => {
    test(desc, () => {
      const out = calcRatePerHour(input.inflation, input.operationFee, input.totalStake);
      expect(out).toEqual(result.rate)
    })

  });

});

describe('totalAtom', () => {
  const params = [
    {
      desc: 'calculate totalAtom at the end of hodlPeriod given reinvest interval',
      input: {
        reinvestFee: 0.025,
        ratePerHour: 0.00001115367876234175,
        reinvestIntervalInHour: 2200,
        hodlPeriodInHour: 365 * 24,
        currentAtom: 100
      },
      result: {
        total: 110.05576705909424,
        reinvestCount: 3
      }
    },
  ];

  params.forEach(({desc, input, result}) => {
    test(desc, () => {
      const out = totalAtom(
        input.reinvestFee,
        input.ratePerHour,
        input.reinvestIntervalInHour,
        input.hodlPeriodInHour,
        input.currentAtom
      );
      expect([out.total, out.reinvestCount]).toEqual([result.total, result.reinvestCount])
    })

  });

});

