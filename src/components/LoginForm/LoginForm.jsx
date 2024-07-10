import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const passwordId = useId();
  const emailId = useId();
  const dispatch = useDispatch();

    const handelSubmit = (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
    };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handelSubmit}>
      <Form>
        <label htmlFor="emailId">Email:</label>
        <Field name="email" id={emailId} />
        <hr />
        <label htmlFor="nameId">Password:</label>
        <Field name="password" id={passwordId} type="password" />
        <hr />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
