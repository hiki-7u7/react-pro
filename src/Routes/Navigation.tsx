import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


import { FormikAbstractationPage, FormikComponentsPage, FormikPage, FormikYupPage, RegisterPage } from '../03-forms/pages';


export const Navigation = () => {

    return (

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <ul>
              
                <li>
                  <NavLink to="/register" className={ ({ isActive }) => isActive ?'nav-active' :''} >Register Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formik" className={ ({ isActive }) => isActive ?'nav-active' :''} >Formik</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ?'nav-active' :''} >Formik Yup</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-components" className={ ({ isActive }) => isActive ?'nav-active' :''} >Formik Components</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ?'nav-active' :''} >Formik Abstractation</NavLink>
                </li>

            </ul>
          </nav>

          <Routes>

              <Route path='/register' element={ <RegisterPage /> } />
              <Route path='/formik' element={ <FormikPage /> } />
              <Route path='/formik-yup' element={ <FormikYupPage /> } />
              <Route path='/formik-components' element={ <FormikComponentsPage /> } />
              <Route path='/formik-abstractation' element={ <FormikAbstractationPage /> } />

              <Route path='*' element={ <Navigate to='/register' /> } />
              
          </Routes>
        </div>
      </BrowserRouter>
    );

}