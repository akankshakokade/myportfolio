import React from 'react'
import './skills.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from '../../assets/website-design.png'
import Appdesign from "../../assets/app-design.png"
const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experiance in creating visually appealing and user friendly website.I have strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS, and Javascript as well as design software. </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>I am creative designer with well experiance </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>Interactive design are developed by me.</p>
          </div>
        </div>

        {/* <div className='skillBar'>
          <img src={Appdesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>Any kind of software can build perfectly</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Skills
