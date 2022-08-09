import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;