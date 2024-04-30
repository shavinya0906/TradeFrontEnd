import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ResultBox from "../resultBox";

const PositionSize = () => {
  const inputRef = useRef({
    investment: null,
    risk: null,
    entry: null,
    stopLoss: null,
    target: null,
  });
  const [result, setResult] = useState({
    "Position Size": 0,
    "Potential Profit": 0,
    "Potential Loss": 0,
  });

  const onResetFields = () => {
    Object.values(inputRef.current).forEach((ref) => (ref.value = ""));
    setResult({
      "Position Size": 0,
      "Potential Profit": 0,
      "Potential Loss": 0,
    });
  };

  const onCalculate = () => {
    const { investment, risk, entry, stopLoss, target } = inputRef.current;

    // Parse input values to ensure they are numeric
    const investmentValue = parseFloat(investment.value);
    const riskPercentage = parseFloat(risk.value) / 100; // Convert risk percentage to decimal
    const entryValue = parseFloat(entry.value);
    const stopLossValue = parseFloat(stopLoss.value);
    const targetValue = parseFloat(target.value);

    // Check if input values are valid numeric values
    if (
      !isNaN(investmentValue) &&
      !isNaN(riskPercentage) &&
      !isNaN(entryValue) &&
      !isNaN(stopLossValue) &&
      !isNaN(targetValue)
    ) {
      // Calculate position size
      const riskPerTrade = investmentValue * riskPercentage;
      const positionSize = riskPerTrade / (entryValue - stopLossValue);

      // Calculate potential profit and loss
      const potentialProfit = positionSize * (targetValue - entryValue);
      const potentialLoss = positionSize * (entryValue - targetValue);

      setResult({
        "Position Size": positionSize.toFixed(2),
        "Potential Profit": potentialProfit.toFixed(2),
        "Potential Loss": potentialLoss.toFixed(2),
      });
    } else {
      // Handle invalid input values
      setResult({
        "Position Size": 0,
        "Potential Profit": 0,
        "Potential Loss": 0,
      });
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={8} xs={12} className="calculatorArea positionSize">
          <div className="calculatorHeading">
            <p>You can calculate your Position Size</p>
          </div>
          <div className="inputFields">
            <div>
              <p className="fieldsLabel">Investment Value</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="investment"
                ref={(ref) => (inputRef.current.investment = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Risk per Trade (%)</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="0"
                name="risk"
                ref={(ref) => (inputRef.current.risk = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Entry Price</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="entry"
                ref={(ref) => (inputRef.current.entry = ref)}
              />
            </div>
          </div>
          <div className="inputFields position-size-fields">
            <div style={{ marginRight: "120px" }}>
              <p className="fieldsLabel">Stop Loss</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="stopLoss"
                ref={(ref) => (inputRef.current.stopLoss = ref)}
              />
            </div>
            <div>
              <p className="fieldsLabel">Target Price</p>
              <input
                type="number"
                className="customFieldInput"
                placeholder="Rs.0000"
                name="target"
                ref={(ref) => (inputRef.current.target = ref)}
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
        <Col sm={4} xs={12} className="Result">
          <ResultBox result={result} />
        </Col>
      </Row>
    </Container>
  );
};

export default PositionSize;
