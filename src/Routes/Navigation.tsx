import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShopingPage } from '../02-components-patterns/pages/ShopingPage';

// import logo from '../assets/react.svg';

// import { routes } from './routes';


export const Navigation = () => {

    return (

      <BrowserRouter>
        <div className="main-layout">
          <nav>
              {/* <img src={ logo } alt="React Logo" /> */}
            <ul>
                <li>
                  <NavLink to="/shopingPage" className={ ({ isActive }) => isActive ?'nav-active' :''} >shoping page</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={ ({ isActive }) => isActive ?'nav-active' :''} >About</NavLink>
                </li>
                <li>
                  <NavLink to="/users" className={ ({ isActive }) => isActive ?'nav-active' :''} >Users</NavLink>
                </li>
              {/* { 
                routes.map( li => ( 
                  <li key={li.name}>
                    <NavLink to={li.to} className={ ({ isActive }) => isActive ?'nav-active' :''} >{li.name}</NavLink>
                  </li>
                ))
              } */}

            </ul>
          </nav>

          <Routes>

              <Route path='/shopingPage' element={ <ShopingPage /> } />
              <Route path='/about' element={ <h1>About</h1> } />
              <Route path='/users' element={ <h1>Users</h1> } />

              <Route path='*' element={ <Navigate to='/shopingPage' /> } />
              {/* {
                routes.map( route => (
                  <Route key={route.name} path={route.path} element= { <route.Component /> } />
                ))
              } */}

          </Routes>
        </div>
      </BrowserRouter>
    );

}