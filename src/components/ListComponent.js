import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default class ListComponent extends React.Component {
  render() {
    const { bets } = this.props;
    return (
      <Row>
        <Col md={12} className="text-center">
          <h3>Bet List</h3>
        </Col>
        <ListGroup>
          {bets.map((bet, i) => (
            <ListGroup.Item key={i}>{`Product : ${bet.product} Selections : ${
              bet.selections
            } Stake: $${bet.stake}`}</ListGroup.Item>
          ))}
        </ListGroup>
        <Col />
      </Row>
    );
  }
}
