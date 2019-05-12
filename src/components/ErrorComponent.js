import React from "react";
import Alert from "react-bootstrap/Alert";

const ErrorComponent = ({ errors }) => (
  <div className="error">
    {errors.map((error, i) => (
      <Alert key={i} variant="danger">
        {error.message}
      </Alert>
    ))}
  </div>
);

export default ErrorComponent;
