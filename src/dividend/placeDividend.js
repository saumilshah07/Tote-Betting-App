import * as utility from "../utility/utility";
import * as _ from "lodash";

class placeDividend {
  constructor() {
    this.commission = 0.12;
    this.product = "P";
    this.productName = "Place";
  }

  calculateDividend = (bets, result) => {
    const placeBets = utility.filterBetsBasedOnProduct(bets, this.product);
    const poolAmount = _.divide(utility.calculateTotalAmount(placeBets), 3);
    const firstPlace = this.getPlaceDividend(
      poolAmount,
      placeBets,
      result.first
    );
    const secondPlace = this.getPlaceDividend(
      poolAmount,
      placeBets,
      result.second
    );
    const thirdPlace = this.getPlaceDividend(
      poolAmount,
      placeBets,
      result.third
    );
    return [firstPlace, secondPlace, thirdPlace];
  };

  getPlaceDividend = (poolAmount, placeBets, result) => {
    const correctBetsLists = utility.filterBetsBasedOnSelections(
      placeBets,
      result
    );
    const correctBetsAmount = utility.calculateTotalAmount(correctBetsLists);

    const dividendAmount = utility.getDividendAmount(
      poolAmount,
      correctBetsAmount,
      this.commission
    );

    return utility.dividend(this.productName, result, dividendAmount);
  };
}

export default new placeDividend();
