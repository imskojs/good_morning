import Big from 'big.js';

type Hour = number;
type Percent = number;
type Rate = number;
type ATOM = number;
type Int = number;

const HOURS_IN_YEAR: Hour = 24 * 365;

// 위임요청시: 0.015 ATOM = 출금수수료 0.01ATOM, 위임요청 블록체인 트랜잭션 수수료 0.005ATOM.
// 보상회수시: 0.01 ATOM = 블록체인 트랜잭션 수수료 0.005ATOM, 거래소 입금요청 블록체인 트랜잭션 수수료 0.005ATOM
// => ReInvestFee = 0.025 ATOM

const totalAtom = (
  reinvestFee: ATOM,
  ratePerHour: Rate,
  reinvestIntervalInHour: Hour,
  hodlPeriodInHour: Hour,
  currentAtom: ATOM,
  reinvestCount: Int = 0
): { total: ATOM, reinvestCount: Int } => {

  if (reinvestIntervalInHour < 10) {
    return {total: 0, reinvestCount: -1}
  }

  const revenuePerHour: Big = Big(ratePerHour).mul(currentAtom);

  const netReinvestAmount: Big = revenuePerHour.mul(reinvestIntervalInHour).minus(reinvestFee);
  const revenueFromReinvest: Big = Big(hodlPeriodInHour - reinvestIntervalInHour)
    .mul(Big(ratePerHour).mul(netReinvestAmount));

  if (hodlPeriodInHour <= reinvestIntervalInHour || revenueFromReinvest.lte(reinvestFee)) {

    const total: ATOM = +Big(currentAtom)
      .plus(Big(hodlPeriodInHour).mul(revenuePerHour));

    return {total, reinvestCount}

  }

  return totalAtom(
    reinvestFee,
    ratePerHour,
    reinvestIntervalInHour,
    +Big(hodlPeriodInHour).minus(reinvestIntervalInHour),
    +netReinvestAmount.plus(currentAtom),
    ++reinvestCount
  );

};

function calcRatePerHour(
  inflation: Percent, operationFee: Percent, totalStake: Percent,
): Rate {
  const revenuePercent: Big = Big(inflation).div(Big(totalStake).div(100));
  return +revenuePercent
    .mul(Big(100).minus(operationFee).div(100))
    .div(100)
    .div(HOURS_IN_YEAR);
}

export {totalAtom, calcRatePerHour};

