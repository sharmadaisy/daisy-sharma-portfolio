import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageSquareDots} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#workexp" onClick={()=>setActiveNav('#workexp')} className={activeNav === '#workexp' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} ><AiOutlineProject/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><HiOutlineLightBulb/></a>
      <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''} ><BiBookAlt/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav
