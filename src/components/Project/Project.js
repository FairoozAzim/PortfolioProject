import React from 'react';
import './Project.css'

const Project = ({project}) => {

    const {name,description,image,livelink,codelink} = project;
    return (
        <div className="col-lg-6 col-12 single-project mt-5 mb-5 ">
            <img src={image} alt=""></img>
            <h4 className='mt-3'>{name}</h4>
            <p>{description}</p>
             <div>
             <button className='button'>
                 <a target= '_blank' rel="noreferrer" href={livelink}>Demo Website</a>
             </button>
             <button className='button'>
                 <a target= '_blank' rel="noreferrer" href={codelink}>Code Link</a>
             </button>
             </div>

        </div>
    );
};

export default Project;