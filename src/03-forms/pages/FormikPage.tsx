import { useFormik } from "formik"
import { FormikErrors } from "formik/dist/types";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
};


export const FormikPage = () => {

    const validate = ( { email, firstName, lastName }: FormValues ) => {
        
        const error: FormikErrors<FormValues> = {} ;

        if( !firstName ){
            error.firstName = 'Required';
        }else if( firstName.length > 15 ){
            error.firstName = 'Must be 15 characters or less'; 
        };

        if( !lastName ){
            error.lastName = 'Required';
        }else if( lastName.length > 15 ){
            error.lastName = 'Must be 15 characters or less'; 
        };

        if (!email) {
            error.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            error.email = 'Invalid email address';
        };


        return error
    };

    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

  return (
    <div>
        <h1>Formik basic tutorial</h1>

        <form onSubmit={handleSubmit} noValidate >
            
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={ values.firstName }
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={ values.lastName }
            />
            {  touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}


            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                name="email" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={ values.email }
            />
            {  touched.email && errors.email && <span>{ errors.email }</span>}


            <button type="submit">Submit</button>        

        </form>
    </div>
  )
}
