import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "../../assets/images/closeIcon.svg";
import "./daily.css";
import { useDispatch, useSelector } from "react-redux";
import { getTradeById, updateTrade } from "../../store/slice/tradeLogSlice";

const DailyQuestionnaire = ({ onClose, onSubmitAnswers, givenAnss = [] }) => {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  // const reduxData = useSelector((state) => state);
  const answer1Ref = useRef(null);
  const answer2Ref = useRef(null);
  const answer3Ref = useRef(null);
  const answer4Ref = useRef(null);
  const answer5Ref = useRef(null);
  const answer6Ref = useRef(null);
  const answer7Ref = useRef(null);
  const answer8Ref = useRef(null);

  const handleSubmit = () => {
    const answer1 = answer1Ref.current.value || "";
    const answer2 = answer2Ref.current.value || "";
    const answer3 = answer3Ref.current.value || "";
    const answer4 = answer4Ref.current.value || "";
    const answer5 = answer5Ref.current.value || "";
    const answer6 = answer6Ref.current.value || "";
    const answer7 = answer7Ref.current.value || "";
    const answer8 = answer8Ref.current.value || "";

    const answers = [
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
    ];

    onSubmitAnswers(answers);

    onClose();
  };




  // useEffect(() => {
  //   if (reduxData.trades?.selectedTrade) {
  //     const trade = reduxData.trades?.selectedTrade;

  //     answer1Ref.current.value =
  //       trade.emotion_influence != null ? trade.emotion_influence : "";
  //     answer2Ref.current.value =
  //       trade.follow_plan != null ? trade.follow_plan : "";
  //     answer3Ref.current.value =
  //       trade.ideas_for_future_improvements != null
  //         ? trade.ideas_for_future_improvements
  //         : "";
  //     answer4Ref.current.value =
  //       trade.attached_or_averse_to_stocks != null
  //         ? trade.attached_or_averse_to_stocks
  //         : "";
  //     answer5Ref.current.value =
  //       trade.feel_anxious_or_stressed != null
  //         ? trade.feel_anxious_or_stressed
  //         : "";
  //     answer6Ref.current.value =
  //       trade.take_unnecessary_risks != null
  //         ? trade.take_unnecessary_risks
  //         : "";
  //     answer7Ref.current.value =
  //       trade.experience_regret != null ? trade.experience_regret : "";
  //     answer8Ref.current.value =
  //       trade.confidence_on_decisions != null
  //         ? trade.confidence_on_decisions
  //         : "";
  //   }
  // }, [reduxData.trades?.selectedTrade]);

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
            <input type="text" ref={answer1Ref} className="ipf" id="ip"/>

            <p className="question">Did I follow my plan?</p>
            <input type="text" ref={answer2Ref} className="ipf" id="ip"/>

            <p className="question">Was I confident in my decisions?</p>
            <input type="text" ref={answer3Ref} className="ipf" id="ip"/>

            <p className="question">
              Did I experience regret or disappointment?
            </p>
            <input type="text" ref={answer4Ref} className="ipf" id="ip"/>

            <p className="question">
              Did I take unnecessary risks or revenge trade?
            </p>
            <input type="text" ref={answer5Ref} className="ipf" id="ip"/>

            <p className="question">Did I feel anxious or stressed?</p>
            <input type="text" ref={answer6Ref} className="ipf" id="ip"/>

            <p className="question">
              Was I attached or averse to specific stocks or options?
            </p>
            <input type="text" ref={answer7Ref} className="ipf" id="ip"/>

            <p className="question">Ideas for future improvements:</p>
            <input type="text" ref={answer8Ref} className="ipf" id="ip"/>
            
          </div>

          <button onClick={handleSubmit} className="submitButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyQuestionnaire;
