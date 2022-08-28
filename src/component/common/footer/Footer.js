import React from "react";
import {
  FaCalendarAlt,
  FaHeart,
  FaMap,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { blog } from "../../../dummydata";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <span>
              <FaPaperPlane />
            </span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <FaFacebookF className="icon" />

            <FaInstagram className="icon" />

            <FaTwitter className="icon" />
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB" key={val.id}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <FaCalendarAlt />
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <FaUser />
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <FaMap />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <FaPhoneAlt />
                +2 392 3929 210
              </li>
              <li>
                <FaPaperPlane />
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <FaHeart />{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
