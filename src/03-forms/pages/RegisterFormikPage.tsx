import { Formik, Form } from 'formik';
import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import * as Yup from 'yup';
import { MytextInput } from '../components';

export const RegisterFormikPage = () => {

    const { 
        formData, onChange, onReset, isValidEmail,
        email, name, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = ( ev: FormEvent<HTMLFormElement> ):void => {
        ev.preventDefault();
    };

    return (
        <div>

            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                            .min( 2, "Must be 2 characters or more" ) // must have a minimum of 2 characters
                            .max( 15, "Must be 15 characters or less")
                            .required("Required"),
                    email: Yup.string()
                            .email("Email must be a valid email")
                            .required("Required"),
                    password1: Yup.string()
                            .min( 6, "Must be 6 characters or more" )
                            .required("Required"),
                    password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Passwords must match')
                            .required("Required")
                })}
            >

                { ({ handleSubmit, handleReset }) => (
                     <Form onSubmit={handleSubmit} noValidate>

                        <MytextInput label="Name" name="name" placeholder="Name" type="text" />

        
                        <MytextInput label="Email" name="email" placeholder="Email" type="email" />


                        <MytextInput label="Password" name="password1" placeholder="Password" type="password" />

        
                        <MytextInput label="Repeat password" name="password2" placeholder="Repeat password" type="password" />

        
                        <button type='submit'>Register</button>
                        <button onClick={handleReset}>Reset</button>
     
                    </Form>
                )}

            </Formik>

           
        </div>
    )
}
