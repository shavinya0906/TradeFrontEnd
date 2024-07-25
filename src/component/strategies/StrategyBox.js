import React from "react";
import "./Strategies.scss";
import { useState } from "react";
import StrategiesBoxContent from "./StrategyBoxContent";
import { useStrategy } from "../../context/StrategyContext";

const StrategiesBox = ({ strategies }) => {
  const { setFormStatus, formStatus } = useStrategy();
  return (
    <>
      <div className="strategy-box">
        {strategies?.map((el, i) => (
          <StrategiesBoxContent strategy={el} key={el.title} />
        ))}
      </div>
      {formStatus === "none" ? (
        <div className="bbb">
          <button className="stra-but" onClick={() => setFormStatus("add")}>+ Add Strategy</button>
        </div>
      ) : null}
    </>
  );
};

export default StrategiesBox;
