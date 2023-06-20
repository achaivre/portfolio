import React from 'react'
import CTA from './CTA'
import './title.css'

const Title = () => {
  return (
    <div className="title" id="title">
      <div className="title__text">
        <h1>Hi, I'm</h1>
        <h1>Alyxandria</h1>
        <h1>Chaivre</h1>
        <h3>But, You Can Call Me Alyx!</h3>
      </div>
      <CTA />
    </div>
  )
}

export default Title