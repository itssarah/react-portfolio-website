import React from "react";
import "./about.css";
import AboutImg from "../../img/about.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img" src={AboutImg} alt="" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a 4th year CS engineering student. My studies have provided me with broad proficiency in all areas of CS. I am eager to secure challenging roles mainly in Data Science, Maching Learning, AI, Software development and Infrastructure.
        <br></br>
        <br></br>
        I love life and aspire to live each moment to its fullest. I like to de-stress, socialise, build meaningful relationships, make memories and, most importantly, relax. 
        </p>
        <p className="a-desc">
          
        </p>
        <div className="a-award">
          
          <div className="a-award-texts">
            <h4 className="a-award-title">Leonardo Da Vinci</h4>
            <p className="a-award-desc">
              <i>Simplicity is the ultimate sophistication.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
