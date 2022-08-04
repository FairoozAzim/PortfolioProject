import React from 'react';
import './Skills.css'

const Skills = () => {
    const skills = ['HTML5', 'CSS3', 'Javascript', 'React JS', 'Node JS', 'Mongo DB', 'PHP','Bootstrap','Tailwind', 'Material UI']
    return (
        <div>
           <h1>My Skills</h1> 
           <div class="container">
                <div class="row">
           {
               skills.map(skill => 
                
                  <div class="col-lg-4 col-6 skill">
                      <h4>{skill}</h4>
                      </div>                 
                
                )
           }
           </div>
      </div>

        </div>
    );
};

export default Skills;