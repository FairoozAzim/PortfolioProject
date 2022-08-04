import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
// import {FaLinkedinIn} from ''
// import {FaGithub} from 'react/icons'
// import {AiOutlineMail} from 'react/icons'
const Banner = () => {
    return (
        <div className='container banner p-3'>
            <div className='d-flex justify-content-between mt-5'>
            <h1 className='brand'>Fairooz Azim.</h1>
            <div>
            <Link to="/resume.pdf" target="_blank" download>
             <button className='button me-5'>Download Resume </button>
             </Link>
             <button className='button'>Contact</button>
            </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mt-text'>
                <h1 className='header'>Full Stack Developer, UI/UX Enthusiast</h1>
                <p className='mt-3 fs-5 w-50'>I am a Full Stack developer. I like to build user friendly, eye catching and responsive websites.</p>
            </div>
        </div>
    );
};

export default Banner;