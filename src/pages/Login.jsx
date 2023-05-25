import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const initialFormValue = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const passwordInput = useRef();

  function handleSubmit(values) {
    dispatch(login({ values, navigate }));
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  function togglePassword() {
    if (passwordInput.current.type === "password") {
      passwordInput.current.type = "text";
    } else {
      passwordInput.current.type = "password";
    }
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Login</h5>
              <Formik
                initialValues={initialFormValue}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {() => {
                  return (
                    <Form>
                      <div className="mb-3">
                        <label>Email</label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-danger"
                          component="div"
                        />
                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          innerRef={passwordInput}
                        />
                        <button type="button" onClick={togglePassword}>
                          Show/hide
                        </button>
                        <ErrorMessage
                          name="password"
                          className="text-danger"
                          component="div"
                        />
                      </div>
                      <button className="btn btn-success">
                        {loading ? "Loging.." : "Login"}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
