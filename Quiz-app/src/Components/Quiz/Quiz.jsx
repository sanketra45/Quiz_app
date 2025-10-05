import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../data';

const Quiz = () => {

  const [Index, setIndex] = useState(0); 
  const [Question, setQuestion] = useState(data[Index]);

  const checkAns = (e, ans)=>{
    if(Question.ans === ans){
      e.target.classlist.add("Correct");
    }
    else{
      e.target.classlist.add("Wrong");
    }
  }

  return (

    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{Index+1}.{Question.question}</h2>
      <ul>
        <li onClick={(e)=>{checkAns(e, 1)}}>{Question.option1}</li>
        <li onClick={(e)=>{checkAns(e, 2)}}>{Question.option2}</li>
        <li onClick={(e)=>{checkAns(e, 3)}}>{Question.option3}</li>
        <li onClick={(e)=>{checkAns(e, 4)}}>{Question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 Questions</div>
    </div>
  )
}

export default Quiz
