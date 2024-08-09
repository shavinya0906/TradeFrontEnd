
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tradingAccountDelete,
} from "../../store/slice/tradingAccountsSlice"; 

const TradeAccountList = ({ list, setFormStatus, onEdit }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleDelete = (accountId) => {
    dispatch(
      tradingAccountDelete({
        accountId: accountId,
        token: token, 
      })
    );
  };

  const handleEdit = (account) => {
    onEdit(account); // Use the passed onEdit function
  };

  return (
    <div className="list-head">
      {list.map((el) => (
        <div key={el?.account_Id} className="account-card">
          <div className="account-info">
            <h3>{el?.account_name}</h3>
            <p>{el?.trading_account}</p>
            <p>{el?.account_email}</p>
            <p>{el?.account_mobile}</p>
            <p>{el?.purpose}</p>
          </div>
          <button className="ed-del-btn" onClick={() => handleEdit(el)}>
            Edit
          </button>
          {"  "}
          <button
            className="ed-del-btn"
            onClick={() => handleDelete(el?.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="nnnn" id="sepa">
        <button className="acc-btn"onClick={() => setFormStatus("add")}>+ Add New Trading Account</button>
      </div>
    </div>
  );
};

export default TradeAccountList;
