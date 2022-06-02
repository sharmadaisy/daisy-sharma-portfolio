import React from "react";
import "./skills.css";
import SkillIcon from "./SkillIcon";
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills">
          <h3>Languages and Techs</h3>
          <div className="skills__content">
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>C, C++ and Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>HTML, CSS and JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>MERN Stack</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Salesforce(Admin, Development and LWC)</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>iOS Application Development (Swift)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills">
          <h3>IT Constructs</h3>

          <div className="skills__content">
          <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Problem Solving (DSA)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Object Oriented Programming (OOPs)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Database Management System(DBMS)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Operating System(OS)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills">
          <h3>Development Tools and Operating Systems</h3>

          <div className="skills__content">
          <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Windows 10, Mac OS High Sierra, Ubuntu</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Visual Studio Code, Sublime Text</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>Jupyter Notebook and Pycharm</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
                <SkillIcon/>
              <div>
                <h4>XCode</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
