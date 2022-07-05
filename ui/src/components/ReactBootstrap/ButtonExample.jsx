import React from "react";
import { ButtonGroup, Button, Spinner } from "react-bootstrap";

export default function ButtonExample() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button variant="danger">Left</Button>
        <Button variant="outline-info">Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <Button size="lg">1</Button>
      <Button>2</Button>
      <Button size="sm">3</Button>
      <br />
      <br />
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span>Loading...</span>
        </Button>{" "}
      </>
    </div>
  );
}
