import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
       <div className='banner-container'>
         <div className='container banner p-3 ms-5'>
            <div className='d-flex mt-5 justify-content-between align-items-center'>
            <h3 className='brand'>Fairooz <span className='fst-italic'> Azim</span>.</h3>
            {/* <svg height="100" width="1000">
            <line className='line' x1="10" y1="25" x2="1200" y2="25"/>
            </svg> */}
            </div>
            <div className='header mt-text'>
                <h1>Frontend Engineer,</h1>
                <h1>UI/UX Enthusiast,</h1>
                <h1>Day Dreamer</h1>

            </div>
        </div>
       
       </div>
    );
};

export default Banner;