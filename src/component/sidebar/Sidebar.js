import { div } from "react-bootstrap";
import { useState } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/images/tradeJournalLogo.svg";
import HomeLogo from "../../assets/images/menulogo/Home.svg";
import ChartLogo from "../../assets/images/menulogo/Chart 2.svg";
import pennewSquer from "../../assets/images/menulogo/Pen New Square.svg";
import RoundGraph from "../../assets/images/menulogo/Round Graph.svg";
import SidebarLogo from "../../assets/images/menulogo/Siderbar.svg";
import SettingLogo from "../../assets/images/menulogo/Setting.svg";
import ActivityLogo from "../../assets/images/menulogo/Activity.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ state, setState }) => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  const toggleNavbar = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <div
      className="side-wrapper"
      onMouseEnter={toggleNavbar}
      onMouseLeave={toggleNavbar}
    >
      <div className={`sidebar ${state?.collapsed ? "is-open" : "is-close"}`}>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/")} style={{marginLeft:"-13px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={Logo} alt="Logo" height={40} width={40}/>
              {state?.collapsed ? (
                <span className="nav-items" style={{fontSize:"1.25rem",fontWeight:"600",fontFamily:"DM Sans, sans-serif", color:"white"}}>My Trade Journal</span>
              ) : (
                ""
              )}
            </div> 
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/dashboard")} id="dimg">
              <img src={HomeLogo} alt="Logo" id="imggg"/>
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">Dashboard</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/tradelog")}>
              <img src={pennewSquer} alt="Logo" id="imggg" />
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">Trade log</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header ">
          <div>
            <div onClick={() => handleNavigate("/trader-analytics")}>
              <img src={ActivityLogo} alt="Logo" id="imggg" />
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">
                  Trade Analytics
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header ">
          <div>
            <div onClick={() => handleNavigate("/trading-accounts")}>
              <img src={ChartLogo} alt="Logo" id="imggg"/>
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">
                  Trading Accounts
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/strategies")}>
              <img src={RoundGraph} alt="Logo" id="imggg"/>
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">Strategies</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/calculator")}>
              <img src={SidebarLogo} alt="Logo" id="imggg"/>
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">Calculator</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div onClick={() => handleNavigate("/tools")}>
              <img src={SettingLogo} alt="Logo" id="imggg"/>
              {state?.collapsed ? (
                <span className="text-light nav-items ms-2">Tools</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
