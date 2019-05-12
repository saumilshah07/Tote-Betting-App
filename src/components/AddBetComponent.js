import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorComponent from "./ErrorComponent";

export default class AddBetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        product: "",
        selections: "",
        stake: ""
      },
      errors: []
    };

    this.baseState = this.state;
  }

  validate = () => {
    const { form } = this.state;

    const product = form.product.trim();
    const selections = form.selections.trim();
    const stake = form.stake.trim();
    const selectionRegex = /[1-9][0-9]*,[1-9][0-9]*|[1-9][0-9]*/;
    let errors = [];
    //Validate Product
    if (product !== "") {
      var validProducts = ["W", "P", "E"];
      if (validProducts.indexOf(product) === -1) {
        errors.push(new Error("Select Valid Product"));
      }
    } else {
      errors.push(new Error("Product is Required"));
    }

    //Validate selection
    if (selections) {
      if ("E" === product && selections.split(",").length !== 2) {
        errors.push(
          new Error("Exacta bet selections should be <number>,<number> format.")
        );
      }
      if ("E" !== product && selections.split(",").length !== 1) {
        errors.push(new Error("Selections should be a number format."));
      }
      if (!selectionRegex.test(selections)) {
        errors.push(new Error("Enter Valid Selections value."));
      }
    } else {
      errors.push(new Error("Selection is Required"));
    }
    //validate stake
    if (stake) {
      if (isNaN(stake)) {
        errors.push(new Error("Stake amount should be a number."));
      }
    } else {
      errors.push(new Error("Stake is Required."));
    }

    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { addBet } = this.props;
    const { form } = this.state;

    const validate = this.validate();
    this.setState({ errors: validate });

    if (validate.length > 0) return false;
    //valid form
    addBet(form);
    //reset form
    this.setState(this.baseState);

    return false;
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };
  render() {
    const { form, errors } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h3 className="text-center">Add Bet</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ErrorComponent errors={errors} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="product">
                <Form.Label>Select Product</Form.Label>
                <Form.Control
                  name="product"
                  as="select"
                  onChange={this.handleChange}
                  value={form.product}
                >
                  <option>Select</option>
                  <option value="W">Win</option>
                  <option value="P">Place</option>
                  <option value="E">Exacta</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="selections">
                <Form.Label>Horse Selections</Form.Label>
                <Form.Control
                  name="selections"
                  type="input"
                  onChange={this.handleChange}
                  value={form.selections}
                />
              </Form.Group>
              <Form.Group controlId="stake">
                <Form.Label>Stake($)</Form.Label>
                <Form.Control
                  name="stake"
                  type="number"
                  onChange={this.handleChange}
                  value={form.stake}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
