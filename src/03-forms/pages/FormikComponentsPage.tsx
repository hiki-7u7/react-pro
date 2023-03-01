import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export const FormikComponentsPage = () => {

  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                terms: false,
                job: ""
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                            .max( 15, 'Must be 15 characters or less' )
                            .required('Required'),
                lastName: Yup.string()
                            .max( 15, 'Must be 15 characters or less' )
                            .required('Required'),
                email: Yup.string()
                        .email()
                        .required('required'),
                terms: Yup.boolean()
                    .oneOf([true], "You must accept the terms and conditions"),
                job: Yup.string()
                    .required("required")
                    .notOneOf(["it-junior"], "You can't select this option")
            })}
        >

            { ({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} noValidate >

            
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" component="span"/>


                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" component="span"/>


                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" component="span"/>


                <label htmlFor="job">Job</label>
                <Field name="job" as="select">
                    <option value="">Select an option</option>
                    <option value="it-senior">it-senior</option>
                    <option value="it-junior">it-junior</option>
                </Field>
                <ErrorMessage name="job" component="span"/>


                <label htmlFor="terms">
                    <Field name="terms" type="checkbox" />
                    Accept the terms and conditions
                </label>
                <ErrorMessage name="terms" component="span"/>

    
                <button type="submit">Submit</button>        
    
                </Form>
            
            )}

        </Formik>

        
    </div>
  )
}
