import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class HeaderComponent extends React.Component {
  onClick = () => {
    alert("click");
  };

  render() {
    return (
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="text-center">Tote Betting App</h1>
        </Col>
      </Row>
    );
  }
}
