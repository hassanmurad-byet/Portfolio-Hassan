import React, { useRef,useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { PiUsersLight } from "react-icons/pi";
import { RiAwardFill } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


import "./contact.css";
import Walmart from "./img/icfl.png";
import Adobe from "./img/batara.png";
import Microsoft from "./img/iubats.png";
import facebook from "./img/books.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import YoutubeIcon from "../../assets/youtube.png";
import linkedin from "../../assets/links.png";
import github from "../../assets/github.png";


import emailjs from "@emailjs/browser";

const Contact = () => {

const [counterOn, setCounterOn] = useState(false);

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_shr91lr', 'template_skk223f', form.current, 'D3uj-GWMMM1ENeptt').then((result) => {
    console.log(result.text);
    e.target.reset();
    alert('Email Sent !');
  }, (error) => {
    console.log(error.text);
  });
};

  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpagetitle">My Clients</h1>
        <p className="clientdesc">
          A designer needs the ability to talk with a company about what they
          want, ask questions about the intended audience, and convey their
          ideas for an effective site.
        </p>
        <div className="clientimgs">
          <img src={Walmart} alt="Client" className="clientimg" />
          <img src={Adobe} alt="Client" className="clientimg" />
          <img src={Microsoft} alt="Client" className="clientimg" />
          <img src={facebook} alt="Client" className="clientimg" />
        </div>

        <div className="Hapclinets">
          {/* <h2 className="cli">Happy Client</h2> */}
          <div className="happyclients">
            <div className="clientcard">
              <div className="myball">
                {" "}
                <PiUsersLight className="logos" />{" "}
              </div>
              <div className="count">
                <h3 className="counters">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <CountUp start={100} end={150} duration={2} delay={0} />
                    )}
                    +
                  </ScrollTrigger>
                </h3>
                <p className="hapyy">Happy Customers</p>
              </div>
            </div>

            <div className="clientcard">
              <div className="myball">
                {" "}
                <RiAwardFill className="logos" />{" "}
              </div>
              <div className="count">
                <h3 className="counters">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <CountUp start={100} end={11} duration={2} delay={0} />
                    )}
                    +
                  </ScrollTrigger>
                </h3>
                <p className="hapyy">Award Win</p>
              </div>
            </div>

            <div className="clientcard">
              <div className="myball">
                {" "}
                <IoCheckmarkDoneCircleOutline className="logos" />{" "}
              </div>
              <div className="count">
                <h3 className="counters">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <CountUp start={100} end={32} duration={2} delay={0} />
                    )}
                    +
                  </ScrollTrigger>
                </h3>
                <p className="hapyy">Complete Project</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name='from_name'
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name='from_email'
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitbtn" type="submit" value="Send">
            Submit
          </button>

          <div className="links">
           <a href="https://www.facebook.com/hassanmurad21"><img src={FacebookIcon} alt="Facebook" className="link" /> </a> 
            <a href="https://www.linkedin.com/in/hassan-murad-3bbaa8121/"><img src={linkedin} alt="twitter" className="link" />  </a> 
           <a href="https://www.youtube.com/@LetsGoHassan"><img src={YoutubeIcon} alt="Youtube" className="link" /> </a>  
            <a href="https://github.com/hassanmurad-byet?tab=repositories"> <img src={github} alt="Instagram" className="link" /> </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
