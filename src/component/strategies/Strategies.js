import React, { useEffect, useState } from "react";
import "./Strategies.scss";
import StrategiesBox from "./StrategyBox";
import StrategyForm from "./StrategyForm";
import { useDispatch, useSelector} from "react-redux";
import { strategyList } from "../../store/slice/strategySlice";

const Strategies = () => {
  const [formStatus, setFormStatus] = useState("list");
  const [strategies, setStrategies] = useState([]);
  const dispatch = useDispatch();
  const [currentAccount, setCurrentAccount] = useState(null);
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
      dispatch(strategyList(token));
    }
  }, [reduxData]);

  const handleEdit = (account) => {
    setCurrentAccount(account);
    setFormStatus("edit");
  };

  return (
    <>
    {formStatus === "add" && <StrategyForm setFormStatus={setFormStatus} />}
    {formStatus === "edit" && (
        <StrategyForm
          setFormStatus={setFormStatus}
          currentAccount={currentAccount}
        />
      )}
      {formStatus === "list" && ( 
        <StrategiesBox
          list={strategies}
          setFormStatus={setFormStatus}
          onEdit={handleEdit}
        />
      )}
    </>
  );
};

export default Strategies;
