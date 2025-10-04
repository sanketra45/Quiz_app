import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quuiz App</h1>
      <hr />
      <h2>Which of the following is a frontend JavaScript framework?</h2>
      <ul>
        <li>Django</li>
        <li>React</li>
        <li>Flask</li>
        <li>Spring</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 Questions</div>
    </div>
  )
}

export default Quiz
