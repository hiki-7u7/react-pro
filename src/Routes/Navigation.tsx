import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


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

            </ul>
          </nav>

          <Routes>

              <Route path='/shopingPage' element={ <h1>ShoppinPage</h1> } />
              <Route path='/about' element={ <h1>About</h1> } />
              <Route path='/users' element={ <h1>Users</h1> } />

              <Route path='*' element={ <Navigate to='/shopingPage' /> } />
              
          </Routes>
        </div>
      </BrowserRouter>
    );

}