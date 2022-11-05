import React from 'react'
import "./Contact.css";
import map from "./../asset/map.jpg";

const Contact = () => {
  return (
    <div className='form-wrap'> 
    <form className='form-cover'>
    <h1><b>Contact Me.</b></h1>
    Hi there, contact me to ask me about anything you have in mind. <br></br><br></br><br></br>
      <div className='name'>
        <div className='first'>
        <label for="name">First name </label> <br></br>
          <input type="text" name="name" id="first_name" placeholder="Enter Your First name" /><br></br>
        </div>

        <div className='last'>
          <label for="name">Last name </label> <br></br>
            <input type="text" name="name" id="last_name" placeholder="Enter Your Last name" />
        </div>
      </div> <br></br>


    <label className="mail" for="Email">Email</label> <br></br>
    <input type="Email" name="" id="email" placeholder="yourname@email.com" /> <br></br>

    <p className='reply'>Message</p>
    <textarea name="" id="message" cols="20" rows="8" placeholder="Send me a message and I'll reply you as soon as possible."></textarea>
    <br/><br></br>

    <input type="checkbox" value="check" name="check" id="check"/> You Agree to providing your data to Christopher who may contact you. <br></br> <br></br>

    <div className='send-cont'>
        <button href='#' id='btn__submit' title="Click here to to Send Message."> Send Message</button>
    </div>
    
      
    </form> 

    <div className="footer">
        <div id="left">
          <a href="https://hngi9.zuriboard.com/">Zuri.Internship</a>
        </div>

        <div id="center">
          <a href="https://hngi9.zuriboard.com/">
            HNG Internship 9 Frontend Task
          </a>
        </div>

        <div id="right">
          <img src={map} alt="any" id="logo_img" />
          <a href="https://ingressive.org/">
            INGRESSIVE <br></br> FOR GOOD
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact