import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Footer.css";

const FooterComponent = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Function to navigate to the specified path
  };

  return (
    <div className="container6">
      <div className="row">
        <div className="col-xl-4 col-lg-4" id="commmm">
          <div className="mini">
            <div className="divider5">
              <p style={{ color: "rgba(255, 255, 255, 1)", fontSize: "22px", textAlign: "left" }}>
                Our Community
              </p>
            </div>
          </div>
          <div className="here">
            Here you'll find regular market updates, expert tips & stories.
          </div>
          <div className="form">
            <form
              style={{
                maxWidth: "324px",
                //  marginLeft: '10px',
                marginTop: "20px",
              }}
            >
              <div className="input-container">
                <input
                  className="input-field" id="inp"
                  type="text"
                  placeholder="Email address.."
                  name="email"
                />
                <i className="bi-send icons"></i>
              </div>
            </form>
          </div>
          <div className="follow">Follow Us</div>
          <div className="logos">
            <img src="img/twitter.png" alt="Twitter" />
            <img src="img/insta.png" alt="Instagram" />
            <img src="img/in.png" alt="LinkedIn" />
            <img src="img/fb.png" alt="Facebook" />
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          <div className="mini2">
            <div className="divider5">
              <p style={{ color: "rgba(255, 255, 255, 1)", fontSize: "22px", textAlign: "left" }}>
                Useful Links
              </p>
            </div>
            <div className="pages">
              {/* Add onClick handlers to navigate to respective paths */}
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/about_us")}
              >
                {" "}
                About Us
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/contact_us")}
              >
                Contact Us
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/pricing_ranges")}
              >
                Pricing
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/terms_and_conditions")}
              >
                Terms and Conditions
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/privacy_policy")}
              >
                Refund and Cancellations
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/privacy_policy")}
              >
                Privacy Policy
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation("/faqs")}
              >
                Faq's
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          <div className="mini3">
            <div className="need">Need assistance?</div>
            <div className="whatsapp">
              WhatsApp chat with our service team for information & assistance.
            </div>
            <div className="live">
              <div className="row">
                <div className="col-6">
                  <p className="fig">
                    <img src="img/Figure.png" alt="Figure" />

                    <span id="wa">
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          window.open("https://web.whatsapp.com/", "_blank")
                        }
                        src="img/Whatsapp.png"
                        alt="WhatsApp"
                      />
                    </span>
                  </p>
                </div>
                <div className="col-6">
                  <div
                    className="chat"
                    onClick={() =>
                      window.open("https://web.whatsapp.com/", "_blank")
                    }
                    style={{
                      color: "white",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Live Chat With{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open("https://web.whatsapp.com/", "_blank")
                      }
                    >
                      Expert<i className="bi bi-arrow-down-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal" />
      <div className="footer-container">
        <div>
          <h6 className="my footer-text">
            © 2024 My Trade Journal.
            <span className="all"> All Rights Reserved.</span>
          </h6>
        </div>
        <div className="credit">
          <img src="img/visa.png" alt="Visa" />
          <img src="img/maestro.png" alt="Maestro" />
          <img src="img/paypal.png" alt="PayPal" />
          <img src="img/ae.png" alt="American Express" />
          <img src="img/cirrus.png" alt="Cirrus" />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
