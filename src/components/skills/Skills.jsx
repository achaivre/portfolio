import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills