import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MytextInput, MySelect, MyCheckbox } from '../components'


export const FormikAbstractationPage = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

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
                        .email('Email must be a valid email')
                        .required('Required'),
                terms: Yup.boolean()
                    .oneOf([true], 'You must accept the terms and conditions'),
                job: Yup.string()
                    .required('Required')
                    .notOneOf(['it-junior'], "You can't select this option")
            })}
        >

            { ({ handleSubmit }) => (

                <Form onSubmit={handleSubmit} noValidate >

                    <MytextInput 
                        label="First Name"
                        name="firstName"
                        type="text"
                    />
                
                    <MytextInput 
                        label="Last Name"
                        name="lastName"
                        type="text"
                    />

                    <MytextInput 
                        label="Email" 
                        name="email" 
                        type="email" 
                    />


                    <MySelect label="Job" name="job" >
                        <option value="">Select an option</option>
                        <option value="it-senior">it-senior</option>
                        <option value="it-junior">it-junior</option>
                    </MySelect>


                    <MyCheckbox label="Accept the terms and conditions" name="terms" />


                    <button type="submit">Submit</button>        
    
                </Form>
            
            )}

        </Formik>

        
    </div>
  )
}
