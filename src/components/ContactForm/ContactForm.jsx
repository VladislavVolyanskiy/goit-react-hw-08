import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import PropTypes from 'prop-types'


const ContactForm = ({handleAddContact}) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleAddContact}
    >
        <Form className={css["form"]}>
          <div className={css["input-box"]}>
            <div className={css["input-element"]}>
                <label className={css["label"]}>Name</label>
                      
                <Field
                className={css["input"]}
                type="text"
                name="name"
                />
        </div>
                  
            <div className={css["input-element"]}>
                <label className={css["label"]}>
                Phone number
                </label>
                      
                <Field
                className={css["input"]}
                type="text"
                name="number"
                />
              </div>
                  
            </div>

          <div>
            <button type="submit">
              Add Contact
            </button>
          </div>
        </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
    handleAddContact: PropTypes.func.isRequired,
}


export default ContactForm;
