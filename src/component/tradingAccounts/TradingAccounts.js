import React, { useEffect, useState } from "react";
import "./TradingAccount.scss";
import TradingForm from "./TradingAccountForm";
import { useDispatch, useSelector } from "react-redux";
import { tradingAccountList } from "../../store/slice/tradingAccountsSlice";
import TradeAccountList from "./TradeAccountList";

const TradingAccounts = () => {
  const [formStatus, setFormStatus] = useState("list");
  const [currentAccount, setCurrentAccount] = useState(null);
  const dispatch = useDispatch();
  const [accountList, setAccountList] = useState([]);
  const token = useSelector((state) => state?.auth?.token);
  const reduxData = useSelector((state) => state?.tradingAccounts?.data);
  const isAddedOrEdited = useSelector(
    (state) => state?.tradingAccounts?.isAddedOrEdited
  );

  useEffect(() => {
    dispatch(tradingAccountList(token));
  }, [isAddedOrEdited === true]);
  useEffect(() => {
    if (reduxData?.length) {
      setAccountList((prev) => reduxData);
      dispatch(tradingAccountList(token));
    }
  }, [reduxData]);

  const handleEdit = (account) => {
    setCurrentAccount(account);
    setFormStatus("edit");
  };

  return (
    <>
      {formStatus === "add" && <TradingForm setFormStatus={setFormStatus} />}
      {formStatus === "edit" && ( 
        <TradingForm
          setFormStatus={setFormStatus}
          currentAccount={currentAccount}
        />
      )}
      {formStatus === "list" && ( 
        <TradeAccountList
          list={accountList}
          setFormStatus={setFormStatus}
          onEdit={handleEdit}
        />
      )}
    </>
  );
};

export default TradingAccounts;
