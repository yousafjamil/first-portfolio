import React from "react";
import aboutImage from "./aboutImage.jpg";
function About() {
  return (
    <div className="about-main-wrap">
      <div className="container about-container">
        <div className="row">
          <div className="col-6">
            <h1>About Us</h1>
            <img src={aboutImage} />
          </div>
          <div className="col-6 about-container">
            <h1>My Skill</h1>
            <h4>
              Hello My name is yousaf jamil, and i m from pakistan-based
              freelancer.im working remotely on projects for clients all over
              the world.
            </h4>
            <br />
            <strong>
              i have a diverse set of skill,ranging from design,to
              HTML+CSS+JAVSCRIPT libaries like React, node, express
            </strong>
            <h2>you can contact me on social media</h2>
            <ul>
              <li>
                <i class="fab fa-2x fa-whatsapp-square">
                  whatsapp no: +923448307585
                </i>
              </li>

              <i class="fab fa-2x fa-skype">skype iD : yousafjamil345678</i>

              <li>
                <i class="fab fa-facebook"></i>face book iD: yousaf jamil
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
