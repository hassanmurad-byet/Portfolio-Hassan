import React from 'react'
import bg from '../../assets/hassan1.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import btnImg from '../../assets/hireme.png';
import './intor.css';


import resume from '../../assets/Muradcv.pdf';


const Intro = () => {
    
    const [text] = useTypewriter({
        words: ['Web Developer', 'Poem Writer', 'Voice Artist', 'Travel Bloger'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
      });

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm
                    <span className="introName"> Hassan</span> <br />
                    {/* Website <span className=''> Designer </span> */}
                     <span className='type'> A {' '} <span className='introdes'> {text} </span> <span> <Cursor cursorStyle='|' />  </span> </span>

                    <p className="intropara">I am a skilled web designer & developer with <br /> experience in creating a
                    Reactjs dynamic website. <br /> And also Django Backend Support. </p></span>

              <div className='btndinv'>
                 <button className='btn'><a className='btnImg' href={resume} download='resume'> <img src={btnImg} alt='Download Icon' className='btnImg' /> Hire Me </a> </button> 
                 </div> 
            


            </div>
            <img src={bg} alt="Profile" className="bg" />



        </section>
    );
}

export default Intro;