import React from 'react'
import './work.css';
import Protfolio1 from '../../assets/ICFL.png';
import Protfolio2 from '../../assets/e-commerce.png';
import Protfolio3 from '../../assets/hotel.png';
import Protfolio4 from '../../assets/tai.png';
import Protfolio5 from '../../assets/iubat.png';
import Protfolio6 from '../../assets/book.png';
import Protfolio7 from '../../assets/prot.png';
import Protfolio8 from '../../assets/portfolio-1.png';



const Work = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workdesc">A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good. They use design programs to create visual elements.let’s dig into this career and see what it takes to become a successful web designer.</span>
       
      <div className="workimgs">
        <h2 className="livetosee">Click To See Live</h2>

        <a className='card' href="https://icfl.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio1} alt="Portfolio 1" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This is a Django-based Football Management live streaming website. <br />
             Where users can purchase teams and see match details, live matches <br />
             Admin can add, delete, update teams, players, matches, news, referees and more <br />
             Language - Django, Bootstrap, CSS, HTML, PostgreSQL </p>
          </div>
        </a>
        <a className='card' href=" https://e-commerce-django.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio2} alt="Portfolio 2" className="workimg" />
          <div className="overlay">
          <p className="txts">
          This is a Django-based E-Commerce website where users can order products <br />
          Admin can manage stock, add, delete, update products and generate reports <br />
          Language - Django, HTML, CSS, Bootstrap, SQLite </p>
          </div>
        </a>
        <a className='card'  href="https://hotel-booking-e1t8.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio3} alt="Portfolio 3" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is a Django-based Hotel Management Website. <br />
            Where users can book hotels and track booking information <br />
            Admin can add, delete, update hotels & view reports. <br />
            Language - Django, HTML, CSS, Bootstrap, SQLite </p>
          </div>
        </a>
        <a className='card' href="https://taekwon-do-org.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio4} alt="Portfolio 4" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is a React-based Frontend Website for Taekwon-do <br />
           Features: User login, admin login, belt selection, attendance sheet, package selection <br />
           & package booking. Also includes static news updates below navbar. <br />
           Language - React.js, CSS </p>

          </div>
        </a>
        <a className='card' href="https://iubat-react-js-frontend.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio5} alt="Portfolio 5" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is a React-based IUBAT Frontend Website <br />
           Created following the IUBAT website design as a single page demo <br />
           Language - React.js, CSS </p>
          </div>
        </a>
        <a className='card' href="https://bookish-com-react-frontend.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio6} alt="Portfolio 6" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This is a React-based Book Management frontend Website <br />
             Language - React.js, CSS </p>
          </div>
        </a>
        <a className='card' href="https://hassanmurad-byet.github.io/Home/" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio7} alt="Portfolio 7" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This is a React-based Portfolio Website <br />
             Language - React.js, CSS, EmailJS </p>
          </div>
        </a>
        <a className='card' href="https://godoctorscare.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio8} alt="Portfolio 8" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This is a Django-based Healthcare Management Website <br />
             Where patients can book appointments, view doctors, and access medical services <br />
             Admin can manage doctors, appointments, and patient records <br />
             Language - Django, HTML, CSS, Bootstrap, PostgreSQL </p>
          </div>
        </a>
      </div>
    <button className="workbtn">See More</button>
    </section>
  )
}

export default Work;