import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../data';

const Quiz = () => {

  let [Index, setIndex] = useState(0); 
  const [Question, setQuestion] = useState(data[Index]);
  const [Lock, setLock] = useState(false);
  const [Score, setScore] = useState(0);
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans)=>{
    if(Lock === false){
      if(Question.ans === ans){
      e.target.classList.add("Correct");
      setLock(true);
      setScore(prev=>prev+1);
    }
    else{
      e.target.classList.add("Wrong");
      setLock(true);
      option_array[Question.ans-1].current.classList.add("Correct");
    }
  }

  }

  const next = () =>{
    if(Lock ===  true){
    const newIndex = Index+1;
    setIndex(newIndex)
    setQuestion(data[newIndex]);
    setLock(false);

    option_array.map((option)=>{
      option.current.classList.remove("Correct");
      option.current.classList.remove("Wrong");
      return null;
    })
  }
    }
  

  return (

    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{Index+1}.{Question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>{checkAns(e, 1)}}>{Question.option1}</li>
        <li ref={option2} onClick={(e)=>{checkAns(e, 2)}}>{Question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e, 3)}}>{Question.option3}</li>
        <li ref={option4} onClick={(e)=>{checkAns(e, 4)}}>{Question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{Index + 1} of {data.length} Questions</div>
    </div>
  )
}

export default Quiz
