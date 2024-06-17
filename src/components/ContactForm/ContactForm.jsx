// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
// import * as Yup from "yup";
// import css from "./ContactForm.module.css";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";

// const userSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   number: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

// export default function ContactForm() {
//   const dispatch = useDispatch();

//   const nameFieldId = useId();
//   const numberFieldId = useId();

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           number: "",
//         }}
//         validationSchema={userSchema}
//         onSubmit={(values, actions) => {
//           dispatch(addContact(values));
//           actions.resetForm();
//         }}
//       >
//         <Form className={css.contactForm} autoComplete="off">
//           <div className={css.formBox}>
//             <label htmlFor={nameFieldId}>Name</label>
//             <Field
//               className={css.fieldBox}
//               type="text"
//               name="name"
//               id={nameFieldId}
//             />
//             <ErrorMessage
//               name="name"
//               component="span"
//               className={css.errorMsgForm}
//             />
//           </div>
//           <div className={css.formBox}>
//             <label htmlFor={numberFieldId}>Phone number</label>
//             <Field
//               className={css.fieldBox}
//               type="text"
//               name="number"
//               id={numberFieldId}
//             />
//             <ErrorMessage
//               name="number"
//               component="span"
//               className={css.errorMsgForm}
//             />
//           </div>
//           <button className={css.submitBtn} type="submit">
//             Add contact
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  number: Yup.string().required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Field name="number" />
          {errors.number && touched.number ? <div>{errors.number}</div> : null}
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
