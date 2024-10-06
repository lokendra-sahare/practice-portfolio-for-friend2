import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <h2 className="highlighted-text">About Me</h2>
      </div>

      <div className="about-content">
        <div className="profile-picture">
          <img src="./hero3.jpg" alt="profile" />
        </div>
        <div className="about-description">
          <h3>I'm Dipanshu</h3>
          <p className="position">
            A Passionte{" "}
            <span className="highlight">
              Front-End Developer And DSA In C++
            </span>{" "}
            based in
            <span className="highlight"> India</span>
          </p>
          <p className="bio">
            I specialize in creating modern, user-friendly websites and web
            services. My focus is on designing seamless digital experiences.
            Explore my portfolio to see my work in front-end development and DSA
            expertise in C++
          </p>
          <div className="experience-details">
            <div>
              <h4>2+</h4>
              <p>Years of Experience</p>
            </div>
            <div>
              <h4>5+</h4>
              <p>Technologies Mastered</p>
            </div>
            <div>
              <h4>5+</h4>
              <p>Success Projects</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1uEwBGvA5CNsqFkXkFUs1KjT_JNTtvJAz/view?usp=drivesdk"
            className="download-cv"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
