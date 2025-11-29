import React, { useState } from "react";
import "./Project.css";

export default function ProjectCard({ title, image, link, description}) {
  const [showDescription, setShowDescription] = useState(false);
  

  return (
    <div className="ProjectCard">
      <img
        src={`${process.env.PUBLIC_URL}${image}`}
        alt={title}
        className="project-image"
      />

      <h3 className="project-title">{title}</h3>

      <button
        className="view-button"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        {showDescription ? "Hide Description" : "Show Description"}
      </button>

      
    

    {link && (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="view-button">Project Demo</button>
    </a>)}


      

      {showDescription && <p className="project-description">{description}</p>}

      
    </div>
  );
}


