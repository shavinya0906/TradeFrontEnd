import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  strategyRemove,
} from "../../store/slice/strategySlice"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const StrategiesBox = ({ list, setFormStatus, onEdit  }) => {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [expandedStrategy, setExpandedStrategy] = useState(null);
  const [optionsStrategy, setOptionsStrategy] = useState(null);

  const handleDelete = (stratId) => {
    dispatch(
      strategyRemove({
        strategy_Id: stratId,
        token: token, 
      })
    );
  };

  const handleEdit = (account) => {
    onEdit(account); 
  };

  return (
    <> 
      <div className="strategy-box">
        {list.map((el) => (
          <div
          key={el.id}
          className="strategy-card more"
          onMouseLeave={() => setOptionsStrategy(null)}
        >
          {optionsStrategy === el.id ? (
            <span className="more-menu">
              <p onClick={() => {handleEdit(el)}}>Edit</p>
              <p onClick={() => {handleDelete(el.id)}}>Delete</p>
            </span>
          ) : (
            <span className="more-vert" onClick={() => setOptionsStrategy(el.id)}>
              <FontAwesomeIcon icon={faEllipsisVertical} color="black" />
            </span>
          )}
          <h2>{el?.strategies_name}</h2>
          {expandedStrategy !== el.id ? (
            <>
              <h4>
                {el?.strategies_desc?.slice(0, 500)}{" "}
                {el?.strategies_desc?.length > 500 && "..."}
              </h4>
              {el?.strategies_desc?.length > 500 && (
                <p onClick={() => setExpandedStrategy(el.id)}>Read More</p>
              )}
            </>
          ) : (
            <>
              <h4>{el?.strategies_desc}</h4>
              <p onClick={() => setExpandedStrategy(null)}>Read Less</p>
            </>
          )}
        </div>
        ))}
      </div>
      <div>
        <button className="strat-but" onClick={() => setFormStatus("add")}>+ Add Strategy</button>
      </div>
    </>
  );
};

export default StrategiesBox;
