import React from 'react'

import './projects.css'
import IMG1 from '../../assets/directory_python.PNG';
import IMG2 from '../../assets/budget_python.PNG';
import IMG3 from '../../assets/goat_project.PNG';
import IMG4 from '../../assets/listo.jpg';
import IMG5 from '../../assets/horse_racing_sim.png';
import IMG6 from '../../assets/articles_api.png';


const Projects = () => {
  return (
    <section id="projects">
      <h2>Portfolio</h2>

      <div className="container projects__container">
        <article className="projects__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>First Project Ever: Directory</h3>
          <div className="project__content">
            <p>This project is a console project built using basic python. This was the first project I ever built with a group. The purpose was to create a directory for people to be able to look up my peers from my cohort from Base Camp Coding Academy!</p>
          </div>
          <div className="project__item-cta">
          <a href="https://github.com/achaivre/BCCA_Directory" className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className="projects__item">
          <div className="project__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>Second Python Project: Budget Tracker</h3>
          <div className="project__content">
            <p>This project was a console project built using python. This project writes to csv files and has basic user login. It allows a user to login and create a report of all of their expenses. This was specifically built as for use by Base Camp Coding Academy.</p>
          </div>
          <div className="project__item-cta">
          <a href="https://github.com/achaivre/BCCA_Budget_Tracker" className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className="projects__item">
          <div className="project__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>First HTML/CSS Project: The G.O.A.T. Project</h3>
          <div className="project__content">
            <p>We were tasked with building a single web page that described who we think is the greatest of all time. I chose a character from a popular children's franchise.</p>
          </div>
          <div className="project__item-cta">
          <a href="https://achaivre.github.io/goatproject/" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="projects__item">
          <div className="project__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Django Project: Listo</h3>
          <div className="project__content">
            <p>This is a task management app that allows users to login, create lists, add tasks to lists, give the tasks priority, sort the tasks by priority, mark tasks complete, and to delete tasks and lists. It also has a spanish translation button that translates the site to Spanish.</p>
          </div>
          <div className="project__item-cta">
          <a href="https://github.com/achaivre/listo" className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className="projects__item">
          <div className="project__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Java/PostgreSQL Project: Horse Racing Simulator</h3>
          <div className="project__content">
            <p>This is a console app that writes and searches through a PostgreSQL database. It has user login with password encryption, and allows the user to bet on horses that are racing and to do queries on the horses to determine how they have performed previously.</p>
          </div>
          <div className="project__item-cta">
          <a href="https://github.com/achaivre/horse_racing_simulator" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="projects__item">
          <div className="project__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Spring Boot API Project: News Article API</h3>
          <div className="project__content">
            <p>This project is built using Java in the Spring Boot framework. It is an API that has two relationships of a One to Many relationship with Authors to Articles and a Many to Many relationship with Articles and Tags. It has full CRUD capabilities from the API.</p>
          </div>
          <div className="project__item-cta">
          <a href="https://github.com/achaivre/articlesapi" className='btn' target='_blank'>Github</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Projects