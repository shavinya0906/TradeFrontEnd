import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import MantrasBoxContent from "./MantrasBoxContent";

const MantrasBox = ({ mantras, showForm, closeForm }) => {
  return (
    <>
      <div className="mantra-box">
        {mantras.length > 0 &&
          mantras?.map((el, i) => <MantrasBoxContent mantra={el} key={i} />)}
      </div>
      <div className="button-group">
        <div
          className="add-btn"
          onClick={() => {
            showForm();
          }}
        >
          + Add Mantra
        </div>
        <Link to="/dashboard" className="back-btn">
          <button className="dashboard-btn">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default MantrasBox;
