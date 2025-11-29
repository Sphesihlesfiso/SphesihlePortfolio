import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='About-container'>
        <div className="About-content">
      <h1 className='Heading'>About Me</h1>

      <h2 className='Paragraph-name' style={{textAlign:"center"}}>Who am I?</h2>
      <p className='paragraph'>
        I'm Sphesihle Mabaso a web and web app developer. I love to make software which can solve real-world problems.
      </p>
      <p className='paragraph'>
        I approach every project with a mindset of continuous improvement and professional discipline. My focus on precision, teamwork, and purpose ensures that I deliver solutions that are both reliable and impactful.
      </p>

      <h3 className='ending' style={{textAlign:"center"}}>My Skills</h3>
      <ul className='Skills-container'>
        <li className='Skill'><i className="bi bi-code-slash"></i> HTML</li>
        <li className='Skill'><i className="bi bi-palette"></i> CSS</li>
        <li className='Skill'><i className="bi bi-braces"></i> JavaScript</li>
        <li className='Skill'><i className="bi bi-lightning-charge"></i> React</li>
        <li className='Skill'><i className="bi bi-server"></i> Node.js</li>
        <li className='Skill'><i className="bi bi-diagram-3"></i> Express</li>
        <li className='Skill'><i className="bi bi-file-earmark-code"></i> EJS Templating</li>
        <li className='Skill'><i className="bi bi-terminal"></i> Python</li>
        <li className='Skill'><i className="bi bi-cup-hot"></i> Java</li>
        <li className='Skill'><i className="bi bi-database"></i> PostgreSQL</li>
        <li className='Skill'><i className="bi bi-git"></i> Git</li>
        <li className='Skill'><i className="bi bi-github"></i> GitHub</li>
      </ul>

      <h3 className='ending' style={{textAlign:"center"}}>Tools</h3>
      <ul className='Tool-container'>
        <li className='Tool'><i className="bi bi-code"></i> VS Code</li>
        <li className='Tool'><i className="bi bi-box"></i> Postman</li>
        <li className='Tool'><i className="bi bi-github"></i> GitHub Desktop</li>
        <li className='Tool'><i className="bi bi-vector-pen"></i> Figma</li>
        <li className='Tool'><i className="bi bi-tools"></i> Chrome DevTools</li>
        <li className='Tool'><i className="bi bi-laptop"></i> IntelliJ IDEA</li>
        <li className='Tool'><i className="bi bi-cloud"></i> Render</li>
        <li className='Tool'><i className="bi bi-database"></i> Pg Admin</li>
      </ul>
    </div>
    </div>
  );
}
