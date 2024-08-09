import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ResultBox from "../resultBox";

const RiskReward = () => {
  const inputRef = useRef({
    entry: null,
    target: null,
    stopLoss: null,
  });
  const [result, setResult] = useState({
    "Risk : Reward": "0:0",
  });

  const onCalculate = () => {
    const { entry, target, stopLoss } = inputRef.current;

    // Get numeric values from input fields
    const entryValue = parseFloat(entry.value);
    const targetValue = parseFloat(target.value);
    const stopLossValue = parseFloat(stopLoss.value);

    // Check if all inputs are numeric
    if (!isNaN(entryValue) && !isNaN(targetValue) && !isNaN(stopLossValue)) {
      // Calculate risk reward ratio
      const riskReward =
        (targetValue - entryValue) / (entryValue - stopLossValue);

      // Format result as ratio with two decimal places
      setResult({
        "Risk : Reward": `1:${riskReward.toFixed(2)}`,
      });
    } else {
      // If any input is not numeric, set default value
      setResult({
        "Risk : Reward": "0:0",
      });
    }
  };

  const onResetFields = () => {
    // Reset input fields
    inputRef.current.entry.value = "";
    inputRef.current.target.value = "";
    inputRef.current.stopLoss.value = "";

    // Reset result
    setResult({
      "Risk : Reward": "0:0",
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={8} xs={12} className="calculatorArea">
          <div className="calculatorHeading">
            <p>You can calculate your Risk : Reward</p>
          </div>
          <div className="inputFields">
            <div>
              <p className="fieldsLabel">Entry Price</p>
              <input
                type="number" // Set type to number to allow only numeric input
                className="customFieldInput"
                placeholder="Rs.0000"
                name="entry"
                ref={(ref) => (inputRef.current.entry = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Target</p>
              <input
                type="number" // Set type to number to allow only numeric input
                className="customFieldInput"
                placeholder="Rs.0000"
                name="target"
                ref={(ref) => (inputRef.current.target = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Stop Loss</p>
              <input
                type="number" // Set type to number to allow only numeric input
                className="customFieldInput"
                placeholder="Rs.0000"
                name="stopLoss"
                ref={(ref) => (inputRef.current.stopLoss = ref)}
              />
            </div>
          </div>
          <div className="buttons-area">
            <Button
              variant="primary"
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

export default RiskReward;
