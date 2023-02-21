import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

function Intro() {
  const element= useRef();
  useEffect(()=>{
    init(element.current,
      { showCursor:  true,
        startDelay: 500,
        backDelay: 1000,
        typeSpeed:100,
        backSpeed:50,
         strings: ['Web Developer', 'Designer','Mentor' ] })
  
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
    
      <img className="imgcontainer" src="images/men.jpg" alt="" />
      
      </div>
      <div className="right">
      <div className="wrapper">
      <h2>Hi There, I'm</h2>
        <h1>Omkar Thorat</h1>
        <h3>FreeLance <span ref={element}></span></h3>
      </div>
        
      </div>
    </div>
  )
}

export default Intro