import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const TradingAccContext = createContext();

export const useTradingAcc = () => useContext(TradingAccContext);

export const TradingAccProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    account_client_id: "",
      account_mobile: "",
      account_email: "",
      account_name: "",
      trading_account: "",
      purpose: "",
  });
  const [formToggle, setFormToggle] = useState(false);
  const [formStatus, setFormStatus] = useState("none");
  const value = {
    formData,
    setFormData,
    formToggle, 
    setFormToggle,
    formStatus,
    setFormStatus
  };
  return (
    <TradingAccContext.Provider value={value}>
      {children}
    </TradingAccContext.Provider>
  );
};
