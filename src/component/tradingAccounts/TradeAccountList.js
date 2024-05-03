import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tradingAccountDelete,
  tradingAccountEdit,
} from "../../store/slice/tradingAccountsSlice";

const TradeAccountList = ({ list, setFormStatus }) => {
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
    dispatch(tradingAccountEdit(account));
    // Add logic to handle opening the edit form
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
          <button className="edit-btn" onClick={() => handleEdit(el)}>
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDelete(el?.account_Id)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="add-btn" onClick={() => setFormStatus("add")}>
        + Add New Trading Account
      </div>
    </div>
  );
};

export default TradeAccountList;
