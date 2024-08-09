import React from 'react';
import './about.css'; 
const About = () => {
  return (
    <div> 
        <section id="About_" className="py-5">
            <div>
                <h1 className="mb-4" id="maintext">"Maximize Your Trades, Minimize The Guesswork: <span id="para">Discover the power of My Trade Journal"</span></h1>
                <p id="lead">Start your journey to becoming a more disciplined and successful trader by leveraging the powerful features of our intuitive platform designed to help you track, analyze, and optimize your trades like never before. Log your trades seamlessly, monitor performance trends, and gain valuable insights with customizable charts and metrics. Whether you're a seasoned pro or just starting out, MyTradeJournal stands as your reliable ally on your journey to trading triumph.</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg" id="btn">
                        Start Trading &nbsp;<i className="bi bi-arrow-down-right fs-5"></i> 
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;
