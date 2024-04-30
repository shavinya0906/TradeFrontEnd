import React, { useEffect, useState } from "react";
import "./Strategies.scss";
import StrategiesBox from "./StrategyBox";
import StrategyForm from "./StrategyForm";
import { useStrategy } from "../../context/StrategyContext";
import { useDispatch, useSelector } from "react-redux";
import { strategyList } from "../../store/slice/strategySlice";

const Strategies = () => {
  const [strategies, setStrategies] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);
  const reduxData = useSelector((state) => state?.strategy?.data);
  const isAddedOrEdited = useSelector(
    (state) => state?.strategy?.isAddedOrEdited
  );

  useEffect(() => {
    dispatch(strategyList(token));
  }, [isAddedOrEdited === true]);
  useEffect(() => {
    if (reduxData?.length) {
      setStrategies((prev) => reduxData);
    }
  }, [reduxData]);
  const { formStatus } = useStrategy();
  return (
    <>
      <StrategiesBox strategies={strategies} />
      {formStatus === "add" || formStatus === "edit" ? <StrategyForm /> : null}
    </>
  );
};

export default Strategies;
