import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 letters")
    .max(35, "Max 35 letters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Min 3 letters")
    .max(35, "Max 35 letters")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.field}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Form>
    </Formik>
  );
}
