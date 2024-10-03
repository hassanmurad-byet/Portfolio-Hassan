import React from 'react'
import './skill.css'; 
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


import react from './img/react1.png';
import html from './img/html.png';
import css from './img/css1.png';
import python from './img/python21.png';
import js from './img/javascript.png';
import Django from './img/dj.png';
import boost from './img/boots.png';
import git from './img/gitt.png';
import sql from './img/mysql.png';




const Skils = () => {
  return (
    <section id="skills">
        <span className="skilltitle">What I do</span>
        <span className="skilldesc">Highly creative and multi-talented Web Developer with over 2 years of experience in website development. Eager to support Pinooer Alpha in building an intuitive user interface for the next-generation web applications. Increased user engagement for Quantum Enterprises & Django website, by redesigning the user interface, Django Backend and increasing usability score by 60%.</span>
      <div className="skillsbars">
        <div className="skillbar">
            <img src={UIdesign} alt="UIDesign" className="skillbarimg" />
            <div className="skillbartext">
                <h2>Frontend Developer</h2>
                <p>Createing Smooth Frontend using HTML, CSS, REACT JS & BOOTSTRAP.</p>
            </div> 
        </div> 
        <div className="skillbar">
            <img src={Webdesign} alt="WebDesign" className="skillbarimg" />
            <div className="skillbartext">
                <h2>Backend Developer</h2>
                <p>Developing Dainamic Django Website using Django, MYSQL, HTML, CSS & REACT JS.</p>
            </div>    
        </div> 
        <div className="skillbar">
            <img src={AppDesign} alt="Appdesign" className="skillbarimg" />
            <div className="skillbartext">
                <h2>App Developer</h2>
                <p>Creating App Interface using REACT NATIVE & Tailwind css.</p>
            </div>
            
        </div> 
      </div>

      <div className='imageskillbarscrool'> 
        <img src={html} alt="UIDesign" className="scroll-image" />
        <img src={css} alt="WebDesign" className="scroll-image" />
        <img src={js} alt="AppDesign" className="scroll-image" />
        {/* Duplicate images to create a seamless scrolling effect */}
        <img src={react} alt="UIDesign" className="scroll-image" />
        <img src={python} alt="WebDesign" className="scroll-image" />
        <img src={Django} alt="AppDesign" className="scroll-image" />
        {/* Duplicate images to create a seamless scrolling effect */}
        <img src={boost} alt="AppDesign" className="scroll-image" />
        <img src={git} alt="AppDesign" className="scroll-image" />
        <img src={sql} alt="AppDesign" className="scroll-image" />
      </div>
    
    </section>
  )
}

export default Skils;