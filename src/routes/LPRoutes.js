// LPRoutes.js
import React from "react";
import "./LPR.css";
import { Route, Routes,  useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";
import AdditionFeature from "../components/AdditionFeature/AdditionFeature";
import Pricing from "../components/Pricing/Pricing";
import Howitswork from "../components/Howitswork/Howitswork";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import Testimonials from "../components/Testimonials/Testimonials";
import PricingFooter from "../components/PricingFooter/PricingFooter";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "../ScrollToTop";
import Login from "../component/auth/login";
import Signup from "../component/auth/signup";
import PrivateRoute from "../component/widgets/PrivateRoutes";
import Dashboard from "../component/dashboard/dashboard";
import ForgotPassword from "../component/auth/forgetPassword";
import ResetPassword from "../component/auth/ResetPassword";

function LPRoutes() {

  const location = useLocation();
  const pathsToHideNavbarAndFooter = [
    "/login", "/signup", "/forgetpassword",
    "/tradelog", "/strategies", "/trading-accounts", "/trader-analytics",
    "/tools", "/calendar", "/calculator", "/mantra", "/userinfo", 
    "/editProfile", "/dashboard", "/reset-password"
  ];
  const shouldHideNavbarAndFooter = pathsToHideNavbarAndFooter.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <ScrollToTop />
      <div className="App">
      {!shouldHideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fade direction="top">
                  <About />
                  <Service />
                  <AdditionFeature />
                  <Pricing />
                  <Howitswork />
                  <Testimonials />
                  <FAQ />
                </Fade>
              </>
            }
          />

          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />

          <Route
            path="/faqs"
            element={
              <Fade direction="top">
                <FAQ />
              </Fade>
            }
          />
          <Route
            path="/privacy_policy"
            element={
              <Fade direction="top">
                <PrivacyPolicy />
              </Fade>
            }
          />
          <Route
            path="/about_us"
            element={
              <Fade direction="top">
                <AboutUs />
              </Fade>
            }
          />
          <Route
            path="/contact_us"
            element={
              <Fade direction="top">
                <ContactUs />
              </Fade>
            }
          />
          <Route
            path="/terms_and_conditions"
            element={
              <Fade direction="top">
                <TermsAndCondition />
              </Fade>
            }
          />
          <Route
            path="/pricing_ranges"
            element={
              <Fade direction="top">
                <PricingFooter />
              </Fade>
            }
          />
        </Routes>
        {!shouldHideNavbarAndFooter && <Footer />}
      </div>
      </>
  );
}

export default LPRoutes;
