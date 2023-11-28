import React from 'react'
import './intro.css'
import bg from '../../assets/Akshu1.jpg'
import btnImg from '../../assets/hireme.png';

import { Link } from 'react-scroll'

const Intro = () => {
  return (
      <section id='intro'>
          <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>I'm <span className='introName'>Akanksha</span><br />Web Developer</span>
              <p className='introPara'>I am a skilled web developer with experiance in creating visually<br/> appealing and user friendly websites. </p>
              <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
          </div>
          <img  src={bg} alt='Profile' className='bg'/>
        </section>
    
  )
}

export default Intro;
