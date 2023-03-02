

import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MytextInput } from '../components';
import * as Yup from 'yup';


const initialValues:{ [ key:string ]: any } = {};
const requiredFields:{ [ key:string ]: any } = {};

for (const input of formJson ) {

    initialValues[input.name] = input.value;

    if( !input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations ) {
        
        if( rule.type === "required" ){
            schema = schema.required("Required");
        }

        if( rule.type === "minlegth"){
            schema = schema.min( (rule as any).value || 2, `Must be ${ (rule as any).value } characters or more`);
        }

        if( rule.type === "email" ){
            schema = schema.email("Email must be a valid email")
        }
    }

    requiredFields[input.name] = schema;

}

export const DynamicFormPage = () => {
    return (
        

        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={ Yup.object({...requiredFields})}
        >

            {
                () => (
                    <Form noValidate>

                        {
                            formJson.map( ({ label, name, placeholder, type, options }) => {

                                if( type === "text" || type === "email" || type === "password" ){
                                    return <MytextInput 
                                        key={ name }
                                        label={ label } 
                                        name={ name } 
                                        placeholder={ placeholder } 
                                        type={ type as any } />
                                }else if( type === "select"){
                                    return <MySelect
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value="">Select an option</option>
                                        
                                        {
                                            options?.map( op => (
                                                <option 
                                                    key={op.id}
                                                    value={ op.id }>{ op.label }</option>
                                              
                                            ))
                                        }
                                       
                                    </MySelect>
                                }
                                    
                            })
                        }

                        <button type='submit'>Enviar</button>

                    </Form>
                )
            }

        </Formik>


    )
};