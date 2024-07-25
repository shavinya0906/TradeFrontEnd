import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "../../assets/images/closeIcon.svg";
import "./daily.css";
import { useDispatch, useSelector } from "react-redux";
import { getTradeById, updateTrade } from "../../store/slice/tradeLogSlice";

const DailyQA = ({ onClose, givenAnss=[], isEdit }) => {

  // const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();
  // const reduxData = useSelector((state) => state);

  console.log(isEdit);

  const defaultAnswers = Array(8).fill("-");
  const answers = givenAnss.concat(defaultAnswers).slice(0, 8);


  const answer1 = answers[0] || "-";
  const answer2 = answers[1] || "-";
  const answer3 = answers[2] || "-";
  const answer4 = answers[3] || "-";
  const answer5 = answers[4] || "-";
  const answer6 = answers[5] || "-";
  const answer7 = answers[6] || "-";
  const answer8 = answers[7] || "-";

  return (
    <div className="popUUpBg">
      <div className="filterPopUUp">
        <div className="filterPopUUpHeader">
          <p className="popUUpTitle">Daily Questionnaire</p>
          <div className="closeFilter" onClick={onClose}>
            <img src={CloseIcon} alt="Close" className="closeIcon" />
          </div>
        </div>
        <div className="filterPopUUBody">
          <div className="questionContainer">
            <p className="question">Did emotion influence my trade?</p>
            {!isEdit && (<p className="answer">  {answer1}</p>)}
            {isEdit && (<input type="text" placeholder={answer1} className="ipf"/>)}

            <p className="question">Did I follow my plan?</p>
            {!isEdit && (<p className="answer">  {answer2}</p>)}
            {isEdit && (<input type="text" placeholder={answer2} className="ipf"/>)}

            <p className="question">Was I confident in my decisions?</p>
            {!isEdit && (<p className="answer">  {answer3}</p>)}
            {isEdit && (<input type="text" placeholder={answer3} className="ipf"/>)}

            <p className="question">
              Did I experience regret or disappointment?
            </p>
            {!isEdit && (<p className="answer">  {answer4}</p>)}
            {isEdit && (<input type="text" placeholder={answer4} className="ipf"/>)}

            <p className="question">
              Did I take unnecessary risks or revenge trade?
            </p>
            {!isEdit && (<p className="answer">  {answer5}</p>)}
            {isEdit && (<input type="text" placeholder={answer5} className="ipf"/>)}

            <p className="question">Did I feel anxious or stressed?</p>
            {!isEdit && (<p className="answer">  {answer6}</p>)}
            {isEdit && (<input type="text" placeholder={answer6} className="ipf"/>)}

            <p className="question">
              Was I attached or averse to specific stocks or options?
            </p>
            {!isEdit && (<p className="answer">  {answer7}</p>)}
            {isEdit && (<input type="text" placeholder={answer7} className="ipf"/>)}

            <p className="question">Ideas for future improvements:</p>
            {!isEdit && (<p className="answer">  {answer8}</p>)}
            {isEdit && (<input type="text" placeholder={answer8} className="ipf"/>)}
          </div>

          {isEdit && (
            <button className="submitButton">
            Submit
          </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default DailyQA;
