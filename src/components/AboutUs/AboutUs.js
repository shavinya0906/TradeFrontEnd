import React from 'react';
import './AboutUs.css';
import aboutimg from './about.pnj.png'; // Corrected the image file extension

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="container-fluid"> {/* Corrected classname to className */}
          <div className="row"> {/* Corrected classname to className */}
            <div className="col-12 col-md-4 my-4"> {/* Corrected classname to className */}
              <img src={aboutimg} alt="about" className='abt-img'/>
            </div>
            <div className="col-12 col-md-8 ps-5 my-4"> {/* Corrected classname to className */}
              <p className="About">About <span id="aboutUs">Us</span></p> {/* Corrected class to className */}
              <p className="aboutletters">
                Welcome to our MytradeBook Website, your ultimate destination for comprehensive trade tracking and
                performance analysis. We understand the importance of meticulous record-keeping and insightful analysis
                in the dynamic world of stock trading. <br />
                At our platform, we offer traders of all levels a robust and user-friendly interface to log their trades
                effortlessly. Whether you're a seasoned investor or just starting out, our tools empower you to track
                every trade with precision, ensuring transparency and accountability in your trading journey. <br />
                Our mission is to provide traders with the necessary resources to make informed decisions and optimize
                their performance in the Indian stock market. Through our innovative features, including real-time data
                tracking and customizable analytics, we aim to elevate your trading experience and help you achieve your
                financial goals. <br />
                Backed by a team of experienced professionals in finance and technology, we are committed to delivering
                excellence in trade logging and performance analysis. We strive to continuously enhance our platform to
                meet the evolving needs of our users and stay ahead in the dynamic landscape of stock trading. <br />
                Join us today and embark on a journey towards smarter, more efficient trading. Let's navigate the
                complexities of the stock market together, one trade at a time. <br />
              </p>
              <p className="aboutpart2">
                Happy Trading! <br />
                Shavinya Technologies Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;
