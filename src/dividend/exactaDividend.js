import * as utility from "../utility/utility";
import * as _ from "lodash";

class ExactaDividend {
  constructor() {
    this.commission = 0.18;
    this.product = "E";
    this.productName = "Exacta";
  }

  calculateDividend = (bets, result) => {
    var winBets = utility.filterBetsBasedOnProduct(bets, this.product);
    const poolAmount = utility.calculateTotalAmount(winBets);
    const correctBets = this.filterBetsBasedOnSelections(bets, result);
    const correctBetsAmount = utility.calculateTotalAmount(correctBets);
    const dividendAmount = utility.getDividendAmount(
      poolAmount,
      correctBetsAmount,
      this.commission
    );

    return utility.dividend(
      this.productName,
      result.first + "," + result.second,
      dividendAmount
    );
  };

  filterBetsBasedOnSelections = (bets, selections) => {
    return _.filter(bets, bet => {
      const selection = bet.selections.split(",");
      return (
        selections.first === selection[0] && selections.second === selection[1]
      );
    });
  };
}

export default new ExactaDividend();
