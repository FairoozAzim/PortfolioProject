import React, { useEffect, useState } from 'react';
import './Projects.css'
import Project from '../Project/Project';



const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    },[])
    return (
        <div className='mt-5 mb-5'>
           <h1>My Projects</h1> 
          <div className="projects">
          <div class="container">
                <div class="row">
          {
              projects.map(project => <Project 
              key = {project.id}
              project = {project}
              ></Project>)
           }
            </div>
      </div>
          </div>
        </div>
    );
};

export default Projects;