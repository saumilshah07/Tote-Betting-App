import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderComponent from "./components/HeaderComponent";
import ListComponent from "./components/ListComponent";
import AddBetComponent from "./components/AddBetComponent";
import ResultComponent from "./components/ResultComponent";
import DividendComponent from "./components/DividendComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
      result: {}
    };
  }

  addBet = bet => {
    const { bets } = this.state;
    this.setState({
      bets: [...bets, bet]
    });
  };
  addResult = result => {
    this.setState({ result: result });
  };

  render() {
    const { bets, result } = this.state;
    return (
      <Container className="App">
        <HeaderComponent />
        <Row>
          <Col md={3}>
            <AddBetComponent addBet={this.addBet} />
          </Col>
          <Col md={3}>
            <ResultComponent result={result} addResult={this.addResult} />
          </Col>
          <Col md={3}>
            <DividendComponent bets={bets} result={result} />
          </Col>
          <Col md={3}>
            <ListComponent bets={bets} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
