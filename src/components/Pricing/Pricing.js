import React from 'react';
import './pricing.css';
import { useNavigate } from "react-router-dom";
import vectorimg from './Vector.svg';
function Pricing() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section>
      <h6 style={{ textAlign: "center", color: 'rgba(110, 110, 110, 1)', paddingTop: '5%' }}>Pricing</h6>
      <h2 className="heading1">Choose The Plan<br/> <span id="para2">That Is Right For You</span></h2>
      <div className="container-fluid small-container">
        <div className="row pb-3">
          <div className="col-xl-5 col-lg-5" id="box-3">
            <div className="vector mt-3">
              <img src={vectorimg} alt="" />
              &nbsp;
              <h2 style={{ color: 'rgba(244, 244, 244, 1)', fontSize: '40px',textAlign:'center' }}>Start saving</h2>
              <h2 id="money" style={{textAlign:'center', fontSize: '40px'}}>your money</h2>
              <div className='px-3'>
                <h6 id="para3">
                    Choose plan that works best for you, feel free to contact us if you need more details.
                </h6>
            </div>
              &nbsp;
              <div className="middle">
                <p>"Fantastic, totally blown away with my savings”</p>
                <div className="ellipse">
                  <img src="img/Ellipse 22.png" alt="" />
                  <span>Roland Stevens <p style={{ textAlign: 'center' }}>Freelancer</p></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6" id="box-4">
            <h1 className="start mt-5">Start 14 day free trial</h1>
            <h2 id="get">Get started, no credit card required.</h2>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="xmcontainer">
                  <h2 style={{ textAlign: 'center', color: 'rgba(27, 30, 49, 1)', fontFamily: 'poppins', paddingTop: '20px' }}>Basic</h2>
                  <h6 style={{ textAlign: 'center', color: 'rgba(96, 97, 101, 1)' }}>Starting at</h6>
                  <div className="pricing">
                    <img src="img/Pricing (5).png" alt="" />
                  </div>
                  <hr className="divider2" />
                  <div className="tick">
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                  </div>
                  <div className="text-center">
                    <button className="learn" onClick={() => handleNavigation("/pricing_ranges")}>Learn More <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="xmcontainer2">
                  <h2 style={{ textAlign: 'center', color: 'rgba(250, 185, 21, 1)', fontFamily: 'poppins', paddingTop: '20px' }}>Pro</h2>
                  <h6 style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 1)' }}>Starting at</h6>
                  <div className="pricing2">
                    <img src="img/Pricing (4).png" alt="" />
                  </div>
                  <hr className="divider3" />
                  <div className="tick2">
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                    <p className="para-tick"><i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i> Etiam sodales ac felis id interdum</p>
                  </div>
                  <div className="text-center">
                    <button className="learn2" onClick={() => handleNavigation("/pricing_ranges")}>Learn More <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
