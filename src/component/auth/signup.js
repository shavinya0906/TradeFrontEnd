import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
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
    // Check if the user with the provided email already exists
    const isDuplicate = users.some(
      (user) => user.email === values.email && user.id !== params?.id
    );

    // If it's a duplicate, display an alert and return
    if (isDuplicate) {
      alert("User with this email already exists");
      setSubmitting(false);
      return;
    }

    // If it's not a duplicate, dispatch the addUser action
    await dispatch(addUser(values));
    alert("Your account is successfully created. You can login now.");
    navigate("/login");
    setSubmitting(false);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">
                {params?.id ? "Update User" : "Add User"}
              </h3>
            </div>
            <div className="card-body">
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
                      <Field
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last_name" className="form-label">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile
                      </label>
                      <Field
                        type="text"
                        name="mobile"
                        id="mobile"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {params?.id ? "Update" : "Add"}
                      </button>
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
