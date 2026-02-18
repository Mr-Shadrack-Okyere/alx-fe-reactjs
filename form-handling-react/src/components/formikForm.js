import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required")
});

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Formik Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username</label>
            <Field name="username" />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
