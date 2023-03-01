import { ChangeEvent, FormEvent, useState } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

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

            <h1>Register Page</h1>

            <form onSubmit={onSubmit} noValidate>

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={name} 
                    onChange={onChange} 
                    className={ `${ name.trim().length <= 0 && 'has-error' }` } />
                
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={onChange} 
                    className={ `${ !isValidEmail(email) && 'has-error' }` } />

                { !isValidEmail(email) && <span>El email es invalido</span> }
                

                <input 
                    type="password" 
                    name="password1" 
                    placeholder="Password" 
                    value={password1} 
                    onChange={onChange} 
                    className={ `${password1.trim().length < 6 && "has-error"}` } />
                
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && <span>La contraseña debe tener almenos 6 caracteres</span> }

                <input 
                    type="password" 
                    name="password2" 
                    placeholder="Repeat password" 
                    value={password2} 
                    onChange={onChange}
                    className={ `${ password1 !== password2 && "has-error" } `} />
                
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1 !== password2 && <span>Las contraseñas deben de ser iguales</span> }
                


                <button type='submit'>Create</button>
                <button onClick={onReset} >Reset</button>

            </form>
        </div>
    )
}
