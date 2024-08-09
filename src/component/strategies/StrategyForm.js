import { useFormik } from "formik";
import React from "react";
import { strategyAdd, strategyEdit } from "../../store/slice/strategySlice";
import { useDispatch, useSelector } from "react-redux";

const StrategyForm = ({ setFormStatus, currentAccount }) => {
  const token = useSelector((state) => state?.auth?.token);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      strategies_name: currentAccount?.strategies_name || "",
      strategies_desc: currentAccount?.strategies_desc || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (currentAccount) {
        dispatch(strategyEdit({ id: currentAccount?.id, values, token }));
      } else {
        dispatch(strategyAdd({ values, token }));
      }
      setFormStatus("list");
    },
  });
  return (
    <div className="strategy-box">
      <form>
        <label htmlFor="trading_account">Strategy Name</label>
        <input
          id="strategies_name"
          name="strategies_name"
          value={formik.values.strategies_name}
          onChange={formik.handleChange}
          placeholder="Strategy Name"
        />
        <label htmlFor="strategy_desc">Description</label>
        <textarea
          id="strategies_desc"
          name="strategies_desc"
          value={formik.values.strategies_desc}
          onChange={formik.handleChange}
          placeholder="Write your New Strategy details..."
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
          <button className="save" type="submit" onClick={formik.handleSubmit}>
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StrategyForm;
