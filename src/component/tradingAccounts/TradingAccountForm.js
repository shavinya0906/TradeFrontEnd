import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tradingAccountAdd,
  tradingAccountEdit,
} from "../../store/slice/tradingAccountsSlice";

const TradingAccountForm = ({ setFormStatus, currentAccount }) => {
  const token = useSelector((state) => state?.auth?.token);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      account_client_id: currentAccount?.account_client_id || "",
      account_mobile: currentAccount?.account_mobile || "",
      account_email: currentAccount?.account_email || "",
      account_name: currentAccount?.account_name || "",
      trading_account: currentAccount?.trading_account || "",
      purpose: currentAccount?.purpose || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (currentAccount) {
        // Editing existing account
        dispatch(tradingAccountEdit({ id: currentAccount?.id, values, token }));
      } else {
        // Adding new account
        dispatch(tradingAccountAdd({ values, token }));
      }
      setFormStatus("list");
    },
  });
  return (
    <div className="strategy-box">
      <form className="trade">
        <div className="form-tile">
          <label htmlFor="trading_account">* Trading Accounts</label>
          <select
            id="trading_account"
            name="trading_account"
            type="select"
            value={formik.values.trading_account}
            onChange={formik.handleChange}
            placeholder="id format alphanumeric"
          >
            <option>Select Your Trading Accounts</option>
            <option>Zerodha</option>
            <option>Angel One</option>
            <option>Groww</option>
            <option>Upstox</option>
            <option>Icici Direct</option>
            <option>Hdfc Sec</option>
            <option>Kotak Sec</option>
            <option>Motilal oswal</option>
            <option>Paytm Money</option>
            <option>Sbi Sec</option>
            <option>Sharekhan</option>
            <option>5paisa</option>
            <option>Iifl Sec</option>
            <option>Axis Direct</option>
            <option>Dhan</option>
            <option>Geojit</option>
            <option>Fyers</option>
            <option>Choice Broking</option>
            <option>Smc Global</option>
            <option>Alice Blue</option>
            <option>Religare</option>
            <option>Others</option>
          </select>
          <label htmlFor="account_name">Name</label>
          <input
            id="account_name"
            name="account_name"
            value={formik.values.account_name}
            onChange={formik.handleChange}
            placeholder="id format alphanumeric"
          />
          <label htmlFor="account_email">Email Address</label>
          <input
            id="account_email"
            name="account_email"
            type="email"
            value={formik.values.account_email}
            onChange={formik.handleChange}
            placeholder="example@gmail.com"
          />
          <label htmlFor="account_mobile">Mobile Number</label>
          <input
            id="account_mobile"
            type="number"
            name="account_mobile"
            value={formik.values.account_mobile}
            onChange={formik.handleChange}
            placeholder="1234567890"
          />
        </div>
        <div className="form-tile">
          <label htmlFor="account_client_id">Client ID</label>
          <input
            id="account_client_id"
            name="account_client_id"
            value={formik.values.account_client_id}
            onChange={formik.handleChange}
            placeholder="id format alphanumeric"
          />
          <label htmlFor="purpose">Purpose</label>
          <textarea
            id="purpose"
            name="purpose"
            type="textarea"
            value={formik.values.purpose}
            onChange={formik.handleChange}
            placeholder="Write here..."
          />
          <div className="btn-box">
            <button
              className="cancel"
              onClick={() => {
                formik.handleReset();
                setFormStatus("list");
              }}
            >
              Cancel
            </button> 
            <button
              className="save"
              type="submit"
              onClick={formik.handleSubmit}
            >
              {" "}
              Save{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TradingAccountForm;
