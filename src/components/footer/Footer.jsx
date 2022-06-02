import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Daisy Sharma</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#workexp">Work Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/daisy-sharma-kota"><BsLinkedin/></a>
        <a href="https://github.com/sharmadaisy?tab=repositories"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DAISY SHARMA. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
