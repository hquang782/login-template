import React, { useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const LoginForm: React.FC = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkLogin = (username: string, password: string) => {
    if (username === 'admin@gmail.com' && password === '1234567') {
      return true;
    }
    return false;
  }
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string().test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      ).email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string().test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      ).required("This field is required!"),
    });
  }
  const handleSubmit = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    if (!isSubmitting) {
      setIsSubmitting(true);
      // Gửi yêu cầu đăng nhập đến server
      if (checkLogin(username, password)) {
        window.localStorage.setItem("user", "login-done");
        window.location.href = '/';
      }
      else {
        alert('Wrong username or password!')
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                <span>Login</span>
              </button>
            </div>
            {/* {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )} */}
          </Form>
        </Formik>
      </div>
    </div>
  );

};

export default LoginForm;