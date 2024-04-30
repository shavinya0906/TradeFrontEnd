import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ResultBox from "../resultBox";

const ProfitAndLoss = () => {
  const inputRef = useRef({
    quantity: null,
    entry: null,
    exit: null,
  });
  const [result, setResult] = useState({
    "Total Profit": 0,
    "Total Loss": 0,
  });

  const onCalculate = () => {
    const { quantity, entry, exit } = inputRef.current;
    const quantityValue = parseFloat(quantity.value);
    const entryValue = parseFloat(entry.value);
    const exitValue = parseFloat(exit.value);

    if (!isNaN(quantityValue) && !isNaN(entryValue) && !isNaN(exitValue)) {
      const profit = quantityValue * (exitValue - entryValue);
      const loss = quantityValue * (entryValue - exitValue);
      setResult({
        "Total Profit": profit > 0 ? profit : 0,
        "Total Loss": loss > 0 ? loss : 0,
      });
    } else {
      // Handle invalid input values
      setResult({
        "Total Profit": 0,
        "Total Loss": 0,
      });
    }
  };

  const onResetFields = () => {
    inputRef.current.quantity.value = "";
    inputRef.current.entry.value = "";
    inputRef.current.exit.value = "";
    setResult({
      "Total Profit": 0,
      "Total Loss": 0,
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={8} xs={12} className="calculatorArea">
          <div className="calculatorHeading">
            <p>You can calculate your Profit & Loss</p>
          </div>
          <div className="inputFields">
            <div>
              <p className="fieldsLabel">Quantity</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="00"
                name="quantity"
                ref={(ref) => (inputRef.current.quantity = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Entry</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="entry"
                ref={(ref) => (inputRef.current.entry = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Exit</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="exit"
                ref={(ref) => (inputRef.current.exit = ref)}
              />
            </div>
          </div>
          <div className="buttons-area">
            <Button
              variant="outline-primary"
              className="calculate-button"
              onClick={onResetFields}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              className="calculate-button"
              onClick={onCalculate}
            >
              Calculate
            </Button>
          </div>
        </Col>
        <Col sm={4} xs={12}>
          <ResultBox result={result} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfitAndLoss;
