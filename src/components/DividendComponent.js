import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import winDividend from "../dividend/winDividend";
import placeDividend from "../dividend/placeDividend";
import exactaDividend from "../dividend/exactaDividend";

export default class DividendComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dividend: []
    };

    this.baseState = this.state;
  }

  getDividend = () => {
    const { bets, result } = this.props;
    const win = winDividend.calculateDividend(bets, result);
    const place = placeDividend.calculateDividend(bets, result);
    const exacta = exactaDividend.calculateDividend(bets, result);

    this.setState({
      dividend: [win, ...place, exacta]
    });
  };

  render() {
    const { dividend } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col>
            <h3 className="text-center">Dividend</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={this.getDividend}>Calculate Dividend</Button>
          </Col>
        </Row>

        {dividend.length > 0 && (
          <Row>
            <Col>
              {dividend.map((div, i) => (
                <p key={i}>{`${div.product} : ${div.selection} : $${
                  div.amount
                }`}</p>
              ))}
            </Col>
          </Row>
        )}

        <Row>
          <Col />
        </Row>
      </React.Fragment>
    );
  }
}
