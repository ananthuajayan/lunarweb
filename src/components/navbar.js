import React, {useState} from 'react';
import '../component.css';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="header">
        <input type="checkbox" id="checking" checked={isChecked} onChange={handleIconClick} />
        <div className='handburger-icon' onClick={handleIconClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className='navigation-container'>
          <ul>
            
            <li>
                 <Link to='/' onClick={handleIconClick}>Home</Link>
            </li>
            <li id='service-list'>Services <FontAwesomeIcon icon={faCaretDown} />
            <ul>
                <li>
                  <Link to='services/website' onClick={handleIconClick}>Website Design & Development</Link>
                </li>
                <li>
                  <Link to='services/mobile' onClick={handleIconClick}>Mobile Application development</Link>
                </li>
                <li>
                  <Link to='services/graphic' onClick={handleIconClick}>Graphic Design</Link>
                </li>
                <li>
                  <Link to='services/software' onClick={handleIconClick}>Software Design and Development</Link>
                </li>
                <li>
                  <Link to='services/animation' onClick={handleIconClick}>3D Modeling & Animations</Link>
                </li>
                <li>
                  <Link to='services/digital' onClick={handleIconClick}>Digital Marketing</Link>
                </li>
                <li>
                  <Link to='services/brand-promotion' onClick={handleIconClick}>Brand Promotion</Link>
                </li>
                <li>
                  <Link to='services/social' onClick={handleIconClick}>Social Media Management</Link>
                </li>
            </ul>
            </li>
            <li>
                <Link to='project' onClick={handleIconClick}>Projects</Link>
            </li>
            {/* <li>
              <Link to='careers' onClick={handleIconClick}>Careers</Link>
            </li> */}
            <li>
              <Link to='team' onClick={handleIconClick}>Our Team</Link>
            </li>
          </ul>
        </div>
      <Link to='contact'>
        <Button variant="danger">
           Lets Talk
        </Button>
      </Link>  
      </div>
      

    </>
  );
}

export default Navbar;
