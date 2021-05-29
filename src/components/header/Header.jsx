import React, { useState} from 'react';
import { auth } from '../../firebase/firebaseUtils';
import './Header.css';
const Header = ({ user }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='header'>
        <div className='header-container'>
          <a href='/' className='header-logo' onClick={closeMobileMenu}>
            <i class="fa fa-heartbeat" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <a href='/' className='nav-links' id='1' onClick={closeMobileMenu}>
                Home
              </a>
            </li> */}
            <li className='nav-item'>
              <a
                href='/resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>

            <li className='nav-item'>
              {
                user ? (<div className='nav-links' onClick={() => auth.signOut()}>Sign Out</div>) :
                (<a
                  href='/signin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                > Login
                </a>)
              }
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header