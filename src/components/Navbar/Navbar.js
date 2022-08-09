import { Link } from 'react-router-dom';

import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';


import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return(
    <div className='menubar'>
        
        <nav className='vert-nav navbar-light '>
         <HashLink smooth to='/home#about'><h5 className='nav-items '>About</h5></HashLink>
         <Link to='projects'><h5 className='nav-items'>Portfolio</h5></Link>
         <Link to='contact'><h5 className='nav-items '>Contact</h5></Link>

        </nav>
        <footer className='footer d-flex flex-column'>
          <FaLinkedinIn className='links'/> <FaGithub className='links'/> <AiOutlineMail className='links'/> 
        </footer>
    </div>
    );
}
export default Navbar;