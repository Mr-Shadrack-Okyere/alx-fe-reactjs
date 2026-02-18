import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Submitting:", values);

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Registration successful!");
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
