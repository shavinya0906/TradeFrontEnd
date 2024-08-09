import React, { forwardRef, useEffect, useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
import "./header.scss";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import PlusIcon from "../../assets/images/plus.svg";
import calander from "../../assets/images/calander.svg"; 
import handMoney from "../../assets/images/Hand Money.svg";
import { useDispatch, useSelector } from "react-redux";
import { calenderEnd, calenderStart } from "../../store/slice/tradeLogSlice";
import { updateTradeAnalyticsData, tradeAnalyticsData } from "../../store/slice/tradeAnalyticsSlice";
import { dashboardUpdateData, getDashbordData } from "../../store/slice/homeSlice";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import moment from 'moment';

const Header = () => {

  const { afterToday } = DateRangePicker;
  const { starttDate, enddDate } = useParams();
  const userData = localStorage.getItem("persist:root");
  const data = JSON.parse(userData);
  const { user } = JSON.parse(data.auth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const reduxData = useSelector((state) => state);
  const excludeLeftWrap = [
    {
      route: "/strategies",
      title: "Strategy",
    },
    {
      route: "/trading-accounts",
      title: "Trading Accounts",
    },
  ];
  const location = useLocation();
  const token = reduxData?.auth?.token;

  const [startttDate, setStartDate] = useState(null);
  const [endddDate, setEndDate] = useState(null);

  const currentMonthRangeNew = (date) => {
    const original = new Date(date);
    const year = original.getFullYear();
    const month = original.getMonth() + 1;
    const day = original.getDate();
    const formatDate =
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day);
    return formatDate;
  };

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };


  const currentStart =
    reduxData.trades?.start && currentMonthRangeNew(reduxData.trades?.start);
  const currentEnd =
    reduxData.trades?.end && currentMonthRangeNew(reduxData.trades?.end);

  const updateDashboardData = () => {
    const sD = currentStart;
    const eD = currentEnd;
    let dashboardPayloadUrl = `?startDate=${sD}&endDate=${eD}`;
    dispatch(
      dashboardUpdateData({ token: token, values: dashboardPayloadUrl })
    );
  };

  const updateTradeAnalyticsDataa = () => {
    const sD = currentStart;
    const eD = currentEnd;
    let payloadUrl = `?startDate=${sD}&endDate=${eD}`;
    dispatch(updateTradeAnalyticsData({ token: token, values: payloadUrl }));
  };

  useEffect(() => {
    var url = window.location.pathname;
    var filename = url.split("/")[1];
    if (filename == "tradelog" || (starttDate && enddDate)) {
      const startDate = currentStart;
      const endDate = currentEnd;
      let payurl = `${startDate}/${endDate}`;
      if (endddDate) {
        handleNavigation(`/tradelog/${payurl}`);
      } else {
        handleNavigation(`/tradelog`);
      }
    } else if (filename == "dashboard") {
      if(endddDate) updateDashboardData();
      else dispatch(getDashbordData(token));
    } else if (filename == "trader-analytics") {
      if(endddDate) updateTradeAnalyticsDataa();
      else dispatch(tradeAnalyticsData(token));
    }
  }, [endddDate]);


  const [value, setValue] = useState([]);

  const handleChange = (range) => {
    let std = null;
    let edd = null;
    if(range){
      std = moment(range[0]).format('YYYY-MM-DD');
      edd = moment(range[1]).format('YYYY-MM-DD');
    }
    setStartDate(std);
    setEndDate(edd);
    dispatch(calenderStart(std));
    dispatch(calenderEnd(edd));
    setValue(range);
  };

  const handleClean = () => {
    console.log("Values cleared");
  }


  return (
    <div className="header-wrapper">
      <div className="header-left-wrap">
        {excludeLeftWrap.map((el) => el.route).includes(location.pathname) ? (
          <p className="header-title">
            {excludeLeftWrap.find((el) => el.route === location.pathname).title}
          </p>
        ) : (
          <>
            <Link to={"/tradelog"}>
              <button className="new-trade-btn">
                New Trade
                <img src={PlusIcon} alt="plus" className="plus-icon" />
              </button>
            </Link>

            <div style={{ marginTop: "7px" }}>
              <DateRangePicker
                placeholder="Select Date Range"
                value={value}
                onChange={handleChange}
                onClean={handleClean}
                shouldDisableDate={afterToday()}
              />
            </div>
            <Button
              variant="outline-primary"
              className="outline-button-cal"
              onClick={() => {
                navigate("/calendar");
              }}
            >
              Calendar
              <img src={calander} alt="plus" className="plus-icon" />
            </Button>
            <Button
              variant="outline-primary"
              className="outline-button-man"
              onClick={() => {
                navigate("/mantra");
              }}
            >
              Mantra
              <img src={handMoney} alt="plus" className="plus-icon" />
            </Button>
          </>
        )}
      </div>

      <div className="drop_button">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            View Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                navigate("/editProfile");
              }}
            >
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
