import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pricingfooter.css";

const PricingFooter = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const prices = {
    yearly: { basic: "$600/year", pro: "$1200/year" },
    monthly: { basic: "$50/month", pro: "$100/month" },
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section className="pricingbox">
        <h6 className="compare">
          Compare <span id="plan">Plans</span>
        </h6>
        <table className="table table-bordered container-fluid">
          <thead>
            <tr className="sticky">
              <th scope="col" className="col-6" id="choose">
                Choose Your Plans
                <br />
                <div className="toggle-container">
                  <div className="toggle-button" onClick={handleToggle}>
                    <div
                      className="toggle-background"
                      style={{
                        transform: isYearly
                          ? "translateX(0)"
                          : "translateX(100%)",
                      }}
                    />
                    <div
                      className={`toggle-option ${isYearly ? "selected" : ""}`}
                    >
                      Yearly
                    </div>
                    <div
                      className={`toggle-option ${!isYearly ? "selected" : ""}`}
                    >
                      Monthly
                    </div>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  id="yearly"
                  onClick={handleToggle}
                  className="btn btn-primary rounded-pill "
                >
                  {isYearly ? "Yearly" : "Monthly"}
                </button> */}
              </th>
              <th scope="col" className="col-3 content-pricing">
                <span className="text_basic">Basic</span>
                <br />
                <span>
                  {isYearly ? prices.yearly.basic : prices.monthly.basic}
                </span>
                <br />
                <button type="submit" className="learn"
                onClick={() => handleNavigation("/billing")}>
                  Subscribe
                </button>
              </th>
              <th scope="col" className="col-3 content-pricing">
                <span className="text_basic">Pro</span>
                <br />
                <span>{isYearly ? prices.yearly.pro : prices.monthly.pro}</span>
                <br />
                <button type="submit" className="learn">
                  Subscribe
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg" style={{ backgroundColor: "#f4f4f4" }}>
                <span className="fw-bolder heading-bolder">
                  <i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum
                  dolor sit amet.{" "}
                </span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
              </td>
              <td className="icon-center">
                <span className="icon_check" />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check" />
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg" style={{ backgroundColor: "#f4f4f4" }}>
                <span className="fw-bolder heading-bolder">
                  <i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum
                  dolor sit amet.{" "}
                </span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg" style={{ backgroundColor: "#f4f4f4" }}>
                <span className="fw-bolder heading-bolder">
                  <i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum
                  dolor sit amet.{" "}
                </span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg" style={{ backgroundColor: "#f4f4f4" }}>
                <span className="fw-bolder heading-bolder">
                  <i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum
                  dolor sit amet.{" "}
                </span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
                <br />
                <br />
                <span className="table_text">Stock Price chart and News</span>
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
              </td>
              <td className="icon-center">
                <span />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
                <br />
                <br />
                <span className="icon_check">
                  <i className="bi bi-check-lg" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PricingFooter;
