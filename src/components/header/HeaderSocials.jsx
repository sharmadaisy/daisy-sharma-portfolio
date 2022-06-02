import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
          <a href="https://linkedin.com/in/daisy-sharma-kota" target='_blank' className='header__socials-icon'><BsLinkedin/></a>
          <a href="https://github.com/sharmadaisy?tab=repositories" target='__blank' className='header__socials-icon'><FaGithub/></a>
      </div>
    </div>
  )
}

export default HeaderSocials
