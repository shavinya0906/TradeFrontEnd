import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './signup.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slice/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const users = useSelector((state) => state.users.data);
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    if (params.id) {
      const user = users.find((user) => user.id === params.id);
      if (user) {
        setInitialValues(user);
      }
    }
  }, [params.id, users]);

  const userSchema = Yup.object().shape({
    first_name: Yup.string().required("Enter your first name"),
    last_name: Yup.string().required("Enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    mobile: Yup.string()
      .required("Enter your phone number")
      .matches(
        /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    password: Yup.string().required("Enter your password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(addUser(values)).unwrap();

      const { data, auth_token } = response.payload;

      // Handle token and user data
      console.log("User created:", data);
      alert("User created");

      sessionStorage.setItem("authToken", auth_token);

      // Proceed with navigation or other actions
    } catch (error) {
      setSubmitting(false);
      console.error("Error creating user:", error);
      if(error.message === 'Email already in use.') alert(error.message);
  }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">
                {params?.id ? "Update User" : "Add User"}
              </h3>
            </div>
            <div className="cardd-body">
              <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <Field type="text" name="first_name" id="first_name" className="form-control" />
                      <ErrorMessage name="first_name" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last_name" className="form-label">
                        Last Name
                      </label>
                      <Field type="text" name="last_name" id="last_name" className="form-control" />
                      <ErrorMessage name="last_name" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field type="email" name="email" id="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile
                      </label>
                      <Field type="text" name="mobile" id="mobile" className="form-control" />
                      <ErrorMessage name="mobile" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field type="password" name="password" id="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block bnn"
                        disabled={isSubmitting}
                      >
                        {params?.id ? "Update" : "Add"}
                      </button>
                      <div className="backk"><Link to="/login">Back to Login</Link></div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
