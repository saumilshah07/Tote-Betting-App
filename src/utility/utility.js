import * as _ from "lodash";

export const dividend = (product, result, amount) => {
  return {
    product: product,
    selection: result,
    amount: amount
  };
};

export const calculateTotalAmount = bets => {
  return _.reduce(
    bets,
    (stake, bet) => {
      return stake + _.parseInt(bet.stake);
    },
    0
  );
};

export const filterBetsBasedOnSelections = (bets, selections) => {
  return _.filter(bets, bet => {
    return bet.selections === selections;
  });
};

export const filterBetsBasedOnProduct = (bets, product) => {
  return _.filter(bets, bet => {
    return bet.product === product;
  });
};

export const getDividendAmount = (
  poolAmount,
  correctBetsAmount,
  commission
) => {
  let afterCommissionAmount = _.multiply(poolAmount, 1 - commission);
  return correctBetsAmount
    ? _.round(_.divide(afterCommissionAmount, correctBetsAmount), 2)
    : 0;
};
