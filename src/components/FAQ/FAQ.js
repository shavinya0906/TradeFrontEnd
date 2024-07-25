import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How can I start trading Forex?",
    answer: "Molestiae consequatur, vel illum qui dolorem eum fugiat quo.",
    img: "img/1.svg",
    answeredImage: "img/01.png"
  },
  {
    question: "How much money do I need to start?",
    answer: "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur...",
    img: "img/002.png",
    answeredImage: "img/2.svg"
  },
  {
    question: "What is margin?",
    answer: "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur...",
    img: "img/003.png",
    answeredImage: "img/3.svg"
  },
  {
    question: "How much money do I need to start?",
    answer: "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur...",
    img: "img/004.png",
    answeredImage: "img/4.svg"
  }
];

const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({ 0: true });

  const toggleAnswer = (index) => {
    setVisibleAnswers(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <section className="container5">
      <h6 style={{ textAlign: 'center', color: 'rgba(110, 110, 110, 1)', paddingTop: 50 }}>FAQ</h6>
      <h3 className="find">Find <span id="ans">Answers</span> to Common<br />Questions</h3>
      <div className="faq">
        {faqData.map((faq, index) => (
          <div key={index} className={visibleAnswers[index] ? "ques" : "ques2"}>
            <div className="question-content">
              <img src={visibleAnswers[index] ? faq.answeredImage : faq.img} alt={`Question ${index + 1}`} />
              <div className="question-text">
                <span id={visibleAnswers[index] ? "how" : "how2"}>
                  {faq.question}
                </span>
                {visibleAnswers[index] && (
                  <h6 id={visibleAnswers[index] ? "mole" : "mole2"}>{faq.answer}</h6>
                )}
              </div>
              <span
                id={visibleAnswers[index] ? "minus" : "plus"}
                onClick={() => toggleAnswer(index)}
                style={visibleAnswers[index] ? { marginLeft: '10px' } : {}}
              >
                <img src={visibleAnswers[index] ? "img/cross.svg" : "img/plus.png"} alt="Toggle Answer" style={{ cursor: "pointer" }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
