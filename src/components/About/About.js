import React from 'react';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/javascript.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import mongo from '../../images/mongo.png';
import firebase from '../../images/firebase.png';
import github from '../../images/github.png';
import './About.css'

const About = () => {
    const skills = [html, css, js, react, node, mongo, firebase, github];
    return (
      <div className='container-fluid about-container mt-5' id='about'>
         <div className=' fw-bold'>
           <h1 className='section-title'>My story</h1>
          
           </div>
          <div className='about mt-2'>
          
           <p className='mt-3 about-text'>I am Frontend developer, though I have also experience of working full stack, 
            designing UI. Since 2 years, I am building small and large scale websites. Web developing is one of the things
            that makes me forget eating. <br/><br/> I want to use this passion of mine to build amazing softwares that are
            are user-friendly, pixel perfect, and solves real world problems. I am also highly interested in machine 
            learning and would love to build applications on top of machine learing or AI solutions. <br/><br/>You can take
            a look at my resume and github account to see my works. I am currently looking for a fulltime Frontend Engineer
            position where I will get the chance to thrive and apply my knowledge towards making large scale applications.
            </p>
        <div className='mt-3'>
         <div className='skill-container d-flex'>
          {
            skills.slice(0,4).map(skill => <div className='skill'>
                <img src={skill} alt='skills' className='img-fluid'></img>
                
            </div>)
          } 
         </div>
         <div className='skill-container d-flex mt-2'>
          {
            skills.slice(4).map(skill => <div className='skill'>
              <img src={skill} alt='skills' className='img-fluid'></img>
            </div>)
          }
         </div>
         
        </div>
        </div>
       
      </div>
    );
};

export default About;