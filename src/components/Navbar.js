import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'left' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/' className='brand'>
            pump<span>it</span>
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='left sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='left hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/katas'>Katas</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
          <Link to='/katas' className='waves-effect sidenav-close'>
            <i className='material-icons'>flash_on</i>Katas
          </Link>
        </li>
        <li>
          <Link to='/profile' className='waves-effect sidenav-close'>
            <i className='material-icons'>self_improvement</i>Profile
          </Link>
        </li>
        <li>
          <Link to='/about' className='waves-effect sidenav-close'>
            <i className='material-icons'>business</i>About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='waves-effect sidenav-close'>
            <i className='material-icons'>mail</i>Contact
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;