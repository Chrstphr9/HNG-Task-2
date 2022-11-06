import React from 'react'
import "./Profile.css";
import image1 from "./../asset/image1.jpeg";
import map from "./../asset/map.jpg";
import { FaGithub, FaSlack, FaShare } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
   
    <div id="profile_component">
      <div id="profile_container">
      <img src={image1} id="profile_img" alt="la casa" />
      <h1 id="nomen">Christopher Anigbo</h1>
      <div id="slack"> Chrstphr</div>
      </div>

      <div id="share">
        <FaShare />
      </div>
      <div id="menu">
        <HiOutlineDotsCircleHorizontal size={30} />
      </div>

      <div className="btn-cont">
        <a href="https://twitter.com/Chrstphr_Wlkngs">Chrstphr_Wlkngs</a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books">
          Zuri Books{" "}
        </a>
        <a href="https://books.zuri.team/" id="python_book">
          Python Books
        </a>
        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="design_book">
          Design Books{" "}
        </a>
       <Link id="contact" to="/Contact"> Contact Me</Link>
      </div>

      {/* <div className="Logo">
       
      </div> */}
      <div className='Logo'>
        <li id="logo_img">
          {" "}
          <FaGithub size={30} />{" "}
        </li>
        <li id="logo_img">
          {" "}
          <FaSlack size={30} />{" "}
        </li>
    </div>
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
    // <div>profile</div>
  )
}

export default Profile