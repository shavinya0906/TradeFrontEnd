import React, { forwardRef, useEffect, useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
import "./header.scss";
import PlusIcon from "../../assets/images/plus.svg";
import clockIcon from "../../assets/images/clock.svg";
import ReactDatePicker from "react-datepicker";
import calander from "../../assets/images/calander.svg";
import handMoney from "../../assets/images/Hand Money.svg";
import { useDispatch, useSelector } from "react-redux";
import { calenderEnd, calenderStart } from "../../store/slice/tradeLogSlice";
import { updateTradeAnalyticsData } from "../../store/slice/tradeAnalyticsSlice";
import { dashboardUpdateData } from "../../store/slice/homeSlice";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const { starttDate, enddDate } = useParams();
  const userData = localStorage.getItem("persist:root");
  const data = JSON.parse(userData);
  const { user } = JSON.parse(data.auth);
  const dispatch = useDispatch();

  const handleShowModal = () => setLgShow(true);

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

  const [startDate, setStartDate] = useState(null);
  const [endddDate, setEndDate] = useState(null);

  const currentMonthRange = (date) => {
    var firstDayThisMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDayThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {
      starting: firstDayThisMonth,
      ending: lastDayThisMonth,
    };
  };
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

  const monthRange = currentMonthRange(new Date());
  const oldStart = monthRange.starting.toISOString().substring(0, 10);
  const oldEnd = monthRange.ending.toISOString().substring(0, 10);

  const currentStart =
    reduxData.trades?.start && currentMonthRangeNew(reduxData.trades?.start);
  const currentEnd =
    reduxData.trades?.end && currentMonthRangeNew(reduxData.trades?.end);

  const updateDashboardData = () => {
    const startDate = currentStart || oldStart;
    const endDate = currentEnd || oldEnd;
    let dashboardPayloadUrl = `?startDate=${startDate}&endDate=${endDate}`;
    dispatch(
      dashboardUpdateData({ token: token, values: dashboardPayloadUrl })
    );
  };

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const updateTradeAnalyticsDataa = () => {
    const startDate = currentStart || oldStart;
    const endDate = currentEnd || oldEnd;
    let payloadUrl = `?startDate=${startDate}&endDate=${endDate}`;
    dispatch(updateTradeAnalyticsData({ token: token, values: payloadUrl }));
  };



  useEffect(() => {
    var url = window.location.pathname;
    var filename = url.split("/")[1];
    if (filename == "tradelog" || (starttDate && enddDate)) {
      const startDate = currentStart || oldStart;
      const endDate = currentEnd || oldEnd;
      let payurl = `${startDate}/${endDate}`;
      endddDate && navigate(`/tradelog/${payurl}`);
    } else if (filename == "dashboard") {
      endddDate && updateDashboardData();
    } else if (filename == "trader-analytics") {
      endddDate && updateTradeAnalyticsDataa();
    }
  }, [endddDate]);

  const onChange = (dates) => {
    const [start, end] = dates;
    dispatch(calenderStart(start));
    dispatch(calenderEnd(end));

    setStartDate(start);
    setEndDate(end);
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="DateInput" onClick={onClick} ref={ref}>
      {value}
      <span className="clock-icon">
        <img src={clockIcon} alt="clock" />
      </span>
    </button>
  ));

  
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

            <ReactDatePicker
              selected={startDate}
              onChange={onChange}
              customInput={<ExampleCustomInput />}
              startDate={startDate}
              endDate={endddDate}
              selectsRange
            />
            <div
              className="flex h-[49px] justify-center items-center text-2xl cursor-pointer cross-icon"
              onClick={() => onChange([null, null])}
              style={{ fontSize: "2rem", paddingBottom: "8px" }}
            >
              x
            </div>
            {/* <img src={CloseIcon} style={{height:"20px", marginTop:"1rem"}} onClick={() => onChange([null, null])}/> */}
            <Link to={"/calendar"} style={{ textDecoration: "none" }}>
              <Button variant="outline-primary" className="outline-button-cal">
                Calendar
                <img src={calander} alt="plus" className="plus-icon" />
              </Button>
            </Link>
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
            <Dropdown.Item onClick={() => {navigate("/editProfile");}} >Edit Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
