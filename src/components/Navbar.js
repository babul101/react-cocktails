import React from "react";
import { Link } from "react-router-dom";
import logo from "../martini.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/' className='.btn-block'>
          <img src={logo} alt='' width='100px' height='40px' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
