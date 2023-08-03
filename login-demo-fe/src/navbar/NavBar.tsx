import React from 'react'
import { Link } from 'react-router-dom';
import * as AuthService from '../services/auth.service'

export const NavBar = () => {
  const access = AuthService.getCurrentUser();
  const logOut = () => {
    AuthService.logout();
  };
  console.log(access);
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        {/* {(access) ? ( */}
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
        {/* ) : (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Home
                </Link>
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                    </li>
                </div>
            </nav>
        )} */}
      </nav>
      <div className='container mt-3'>
      </div>

      {/* <Outlet /> */}
    </div>
  )
}
