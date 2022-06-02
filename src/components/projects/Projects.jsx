import React from "react";
import "./projects.css";
import News from '../../assets/news.jpg'
import Portfolio from '../../assets/portfolio.jpg'
import FER from '../../assets/fer.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation} from "swiper";

const data = [
  {
    id: 'newsapi',
    image: News,
    title: "NewsMonkey",
    description: "Using React made an application for News lovers to feed up the top headlines for various categories like sports, entertainment, health, general and business etc. using an API and making it easy for user to read. Used PROGRESSBAR and INFINITE SCROLLING considering ease for the user.",
    skills: 'React, JSX, Bootstrap and API fetching',
    github: "https://github.com/sharmadaisy/NewsMonkey",
  },
  {
    id: 'portfolio',
    image: Portfolio,
    title: "Daisy's Website",
    description: "Using React, JSX and CSS made my own portfolio website to showcase my thorough my react skills while learning it including a floating NavBar and Slider in ReactJS. Provided email facility using EmailJS for website viewrs",
    skills: 'React, JSX and CSS',
    github: "https://github.com/sharmadaisy/daisy-sharma-portfolio",
    demo: "https://daisy-sharma-portfolio.herokuapp.com/",
  },
  {
    id: 'fer',
    image: FER,
    title: "Facial Expression Recognition",
    skills: 'Python and Convolution Neural Network',
    description: ' Built and trained a convolutional neural network (CNN) in Keras recognize facial expressions. It classifies each facial expression into one of five categories -Angry, Happy, Sad, Surprise, Neutral.',
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work </h5>
      <h2>Projects</h2>
      
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper container project__container">

           {data.map(({ id, image, title, description, skills, github, demo }) => {
          return (
            <SwiperSlide key={id} className="project__item">
              <div className="project__content">
              <h1>{title}</h1>
              <img className="project__item-image" src={image} alt={title} />
              </div>
              <h3>Skills used - {skills}</h3>
              <p>{description}</p>
              <div className="project__item-cta">
                {github &&<a href={github} className="btn" target="_blank">
                  Github
                </a>}
                { demo && <a href={demo} className="btn btn-primary" target="_blank">
                  LIVE Demo
                </a>}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
