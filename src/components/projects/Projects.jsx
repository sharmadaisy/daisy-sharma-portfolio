import React from "react";
import "./projects.css";
import WSNotifications from '../../assets/notifications.png'
import WSCoaching from '../../assets/ws-coaching.png'
import Foodiesta from '../../assets/food delivery.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";

const data = [
  {
    id: 'Wingspan Notificatiosn Admin',
    image: WSNotifications,
    title: "Wingspan Notifications",
    description: "Developed the user interface for the admin module within the Wingspan project. The module encompassed various features, including User Notification Preferences, Notifications Admin, User Management. Received positive feedback from project stakeholders for delivering a visually appealing and user-friendly interface",
    skills: 'Angular, Angular Material, Tailwind CSS, HTM, TypeScript',
    // github: "https://github.com/sharmadaisy/NewsMonkey",
  },
  {
    id: 'Wingspan Coaching',
    image: WSCoaching,
    title: "Wingspan Coaching",
    description: " Developed and implemented key features for the coaching app within the Wingspan project, including My Notes, Discussions and Program Landing page. Successfully delivered the coaching app feature, enhancing user engagement and providing a seamless coaching experience.",
    skills: 'Angular, Angular Material, Tailwind CSS, HTM, TypeScript',
    // github: "https://github.com/sharmadaisy/daisy-sharma-portfolio",
    // demo: "https://daisy-sharma-portfolio.herokuapp.com/",
  },
  {
    id: 'Foodiesta',
    image: Foodiesta,
    title: "Foodiesta",
    skills: 'Python and Convolution Neural Network',
    description: 'Developed web-app which allows user to order food by adding to cart, search for foods, search by tags etc. In Development features are adding the products by admin.  ',
    skills: ' MEAN stack - MongoDB, Express, Angular, NodeJS. ',
    github: ' https://github.com/sharmadaisy/Foodiesta'
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
                {github && <a href={github} className="btn" target="_blank">
                  Github
                </a>}
                {demo && <a href={demo} className="btn btn-primary" target="_blank">
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
