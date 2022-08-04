import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Projects></Projects>
           <Skills></Skills>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;