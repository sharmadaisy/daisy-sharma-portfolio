import React from "react";
import "./education.css";
// import Me from "../../assets/me1.jpg";
import { FaAward } from "react-icons/fa";
const Education = () => {
  return (
    <section id="education">
      <h5>Get To Know My Schooling</h5>
      <h2>My Education</h2>

      <div className="container education__container">
          <div className="education__cards">
            <article className="education__card">
              <FaAward className="education__icon" />
              <h5>Graduation</h5>
              <div className="education__content">
                <h3>B.Tech (Computer Science and Engineering)</h3>
                <h5> Rajasthan Technical University, Kota, Rajasthan</h5>
                <p>2017-2021</p>
                <p>CGPA - 9.37</p>
              </div>
            </article>
            <article className="education__card">
              <FaAward className="education__icon" />
              <h5>Senior Secondary</h5>
              <div className="education__content">
                <h3>Physics, Chemistry and Maths (Major)</h3>
                <h5>Genius Children Senior Secondary School, Kota, Rajasthan</h5>
                <p>2016-2017</p>
                <p>Percentage - 88%</p>
              </div>
            </article>
            <article className="education__card">
              <FaAward className="education__icon" />
              <h5>Secondary</h5>
              <div className="education__content">
                <h5>Saint Joh'n Senior Secondary School, Kota, Rajasthan</h5>
                <p>2014-2015</p>
                <p>CGPA - 9.8</p>
              </div>
            </article>
          </div>
      </div>
    </section>
  );
};

export default Education;
