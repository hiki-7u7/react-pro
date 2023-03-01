import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialState:T ) => {
  
    const [formData, setFormData] = useState(initialState);

    const onChange = ( ev: ChangeEvent<HTMLInputElement> ):void => {
        const { target } = ev;
        setFormData( prev => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    const onReset = ():void => {
        setFormData({...initialState});       
    };

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,

        //* Propiedades
        formData,

        //* Metodos
        onChange,
        onReset,
        isValidEmail
    }
}
