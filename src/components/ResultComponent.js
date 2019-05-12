import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorComponent from "./ErrorComponent";

export default class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        first: props.result.first ? props.result.first : "",
        second: props.result.second ? props.result.second : "",
        third: props.result.third ? props.result.third : ""
      },
      errors: []
    };

    this.baseState = this.state;
  }

  validate = () => {
    const { form } = this.state;

    const first = form.first.trim();
    const second = form.second.trim();
    const third = form.third.trim();

    let errors = [];
    //Validate Product
    if (first) {
      if (isNaN(first)) {
        errors.push(new Error("First Place should be a number."));
      }
    } else {
      errors.push(new Error("First Place is Required."));
    }

    if (second) {
      if (isNaN(second)) {
        errors.push(new Error("Second Place should be a number."));
      }
    } else {
      errors.push(new Error("Second Place is Required."));
    }

    if (third) {
      if (isNaN(third)) {
        errors.push(new Error("Third Place should be a number."));
      }
    } else {
      errors.push(new Error("Third Place is Required."));
    }

    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { addResult } = this.props;
    const { form } = this.state;

    const validate = this.validate();
    this.setState({ errors: validate });

    if (validate.length > 0) return false;
    //valid form
    addResult(form);
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
            <h3 className="text-center">Result</h3>
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
              <Form.Group controlId="first">
                <Form.Label>First Place</Form.Label>
                <Form.Control
                  name="first"
                  type="number"
                  onChange={this.handleChange}
                  value={form.first}
                />
              </Form.Group>
              <Form.Group controlId="second">
                <Form.Label>Second Place</Form.Label>
                <Form.Control
                  name="second"
                  type="number"
                  onChange={this.handleChange}
                  value={form.second}
                />
              </Form.Group>

              <Form.Group controlId="third">
                <Form.Label>Third Place</Form.Label>
                <Form.Control
                  name="third"
                  type="number"
                  onChange={this.handleChange}
                  value={form.third}
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
