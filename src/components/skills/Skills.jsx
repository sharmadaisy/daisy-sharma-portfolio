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
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Angular</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>TypeScript and JavaScript</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>HTML & CSS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Bootstrap & Tailwind CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Angular Material</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>RxJS and NgRx</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>ReactJS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="skills">
          <h3>Backend, Database and Testing</h3>

          <div className="skills__content">
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>NodeJS & Express JS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>MongoDB</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Jasmine, Karma & Protractor</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="skills">
          <h3>Others</h3>

          <div className="skills__content">
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>JIRA</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Jenkins</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Confluence</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Postman</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article><article className="skills__details">
              <SkillIcon />
              <div>
                <h4>RESTful APIs</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article><article className="skills__details">
              <SkillIcon />
              <div>
                <h4>Webpack</h4>
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
