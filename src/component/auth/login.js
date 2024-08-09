import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
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

  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActiveSession, setIsActiveSession] = useState(false);

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  useEffect(() => {
    // Clear authentication token and session timeout on component mount
    sessionStorage.removeItem("authToken");

    // Set up session timeout
    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          // Perform logout or session expiration actions here
          handleLogout(); // Example function to logout the user
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

    resetTimeout(); // Initialize timeout on component mount

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, [isActiveSession]);

  const handleLogout = () => {
    // Clear session data and redirect to login page
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("isActiveSession");
    navigate("/login");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(LoginUser(values)); // Wait for the dispatch to complete
      console.log(response);
      const { payload: {token, email, status}} = response;

      if(status===500){
        setMessage("Invalid credentials");
        alert('Invalid credentials');
      }
      if(status===404){
        setMessage("User not found");
        alert('User not found');
      }
      // Dispatch fetchUserData and wait for it to complete
      await dispatch(fetchUserData());

      // Store authentication token in session storage
      sessionStorage.setItem("authToken", token);
      setSubmitting(false); 
      navigate("/dashboard");
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
        <Container fluid>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col md={6} className="login__form--container">
              <Form
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "-50px",
                  marginLeft: "50px",
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
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Password</FormLabel>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    as={FormControl}
                  />
                </FormGroup>
                {message && (
                  <div>{message}</div>
                )}

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
                <Link to="/">Back to main</Link>
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
