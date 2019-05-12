import * as utility from "../utility/utility";

class WinDividend {
  constructor() {
    this.commission = 0.15;
    this.product = "W";
    this.productName = "Win";
  }

  calculateDividend = (bets, result) => {
    const winBets = utility.filterBetsBasedOnProduct(bets, this.product);
    const poolAmount = utility.calculateTotalAmount(winBets);
    const correctBets = utility.filterBetsBasedOnSelections(
      winBets,
      result.first
    );
    const correctBetsAmount = utility.calculateTotalAmount(correctBets);
    const dividendAmount = utility.getDividendAmount(
      poolAmount,
      correctBetsAmount,
      this.commission
    );
    return utility.dividend(this.productName, result.first, dividendAmount);
  };
}

export default new WinDividend();
