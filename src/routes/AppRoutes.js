import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../component/dashboard/dashboard";
import PrivateRoute from "../component/widgets/PrivateRoutes";
import Login from "../component/auth/login";
import Signup from "../component/auth/signup";
import ForgetPassword from "../component/auth/forgetPassword";


const AppRoutes = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
    </div>
  );
};

export default AppRoutes;
