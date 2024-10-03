import React from 'react'
import './work.css';
import Protfolio1 from '../../assets/ICFL.png';
import Protfolio2 from '../../assets/e-commerce.png';
import Protfolio3 from '../../assets/hotel.png';
import Protfolio4 from '../../assets/tai.png';
import Protfolio5 from '../../assets/iubat.png';
import Protfolio6 from '../../assets/book.png';
import Protfolio7 from '../../assets/prot.png';



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
             This is Django Based Football Management live streaming website. <br />
             Where user can puchease team and see Match details,Live Match <br />
             admin can add,delete,update  team,player,match,news,referee and so on br
             Language - Django, Bootstrap, CSS, HTML, PostgreSQL,   </p>
          </div>
        </a>
        <a className='card' href=" https://e-commerce-django.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio2} alt="Portfolio 2" className="workimg" />
          <div className="overlay">
          <p className="txts">
          This is Django Based E-Commerce website. where user can order product <br />
          admin can manage stock. Admin can add,delete,update products And report Generation <br />
          Language- Django, HTML, CSS, Bootstrap, SQLlight </p>
          </div>
        </a>
        <a className='card'  href="https://hotel-booking-e1t8.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio3} alt="Portfolio 3" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is Django Based Hotel Management Website. <br />
            Where user book the hote and track order information <br />
            Admin can add,delete,update hotel & admin can see report. <br />
            Language - Django, HTML, CSS, Bootstrap, SQLlight </p>
          </div>
        </a>
        <a className='card' href="https://taekwon-do-org.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio4} alt="Portfolio 4" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is React Based Frontend Website name is Taekwon-do <br />
           UI userlogin, adminlogin, Belt select, attendance sheet, package select <br />
           & package book. And also it has static news update down of navbar. <br />
           Language - React js, CSS  </p>

          </div>
        </a>
        <a className='card' href="https://iubat-react-js-frontend.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio5} alt="Portfolio 5" className="workimg" />
          <div className="overlay">
          <p className="txts">
            This is React Based IUBAT Frontend Website   <br />
           Make this website Follow by the IUBAT website Single page demo  <br />
           Language - React js, CSS  </p>
          </div>
        </a>
        <a className='card' href="https://bookish-com-react-frontend.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio6} alt="Portfolio 6" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This is React Based Book Management frontend Website <br />
             Language - Raect js, CSS </p>
          </div>
        </a>
        <a className='card' href="https://hassanmurad-byet.github.io/Home/" target="_blank" rel="noopener noreferrer">
          <img src={Protfolio7} alt="Portfolio 6" className="workimg" />
          <div className="overlay">
          <p className="txts">
             This React Based Protfolio Website <br />
             Language - React js , CSS, Mail js </p>
          </div>
        </a>
      </div>
    <button className="workbtn">See More</button>
    </section>
  )
}

export default Work;