import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Container,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, fetchUserData } from "../../store/slice/authSlice";
import "./login.css";

// Define session timeout durations in ms
const INACTIVE_SESSION_TIMEOUT = 30 * 60 * 1000; // 30 mins
const ACTIVE_SESSION_TIMEOUT = 12 * 60 * 60 * 1000; // 12 hrs

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActiveSession, setIsActiveSession] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required"),
  });

  useEffect(() => {
    sessionStorage.removeItem("authToken");

    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          handleLogout();
        },
        isActiveSession ? ACTIVE_SESSION_TIMEOUT : INACTIVE_SESSION_TIMEOUT
      );
    };

    const handleUserActivity = () => {
      resetTimeout();
      setIsActiveSession(true);
      sessionStorage.setItem("isActiveSession", "true");
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, [isActiveSession]);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("isActiveSession");
    navigate("/login");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(LoginUser(values));

      await dispatch(fetchUserData());

      sessionStorage.setItem("authToken", "yourAuthToken");

      setSubmitting(false);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Container>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col md={6} className="login__form--container">
              <Form
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "-50px",
                  marginLeft: "-40px",
                }}
              >
                <h1>Login to your account</h1>
                <FormGroup>
                  <FormLabel>Email Address</FormLabel>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    as={FormControl}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Password</FormLabel>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    as={FormControl}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </FormGroup>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>

                <p className="pt-3 text-center">
                  <Link to="/forgetpassword">Forgot Password?</Link>
                </p>

                <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/signup">Create account</Link>{" "}
                </p>
              </Form>
            </Col>
            <Col md={6} className="login__image--container"></Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default Login;
