import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const Contact = () => {

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <a href="mailto:alyx.chaivre@gmail.com">
          <article className="contact__option">
            <GrMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alyx.chaivre@gmail.com</h5>
            <p>Send a Message</p>
          </article>
          </a>
          <a href="https://www.linkedin.com/in/achaivre/">
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>achaivre</h5>
            <p>Profile</p>
          </article>
          </a>

          <a href="https://github.com/achaivre">
          <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>achaivre</h5>
            <p>Profile</p>
          </article>
          </a>

        </div>
      </div>

    </section>
  )
}

export default Contact