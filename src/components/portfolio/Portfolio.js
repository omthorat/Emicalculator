import React, { useState } from 'react'
import Portfoliolist from "../portfoliolist/Portfoliolist"
import "./portfoli.scss"
function Portfolio() {
  const [selected,setSelected]=useState("Featured")
  const list = [{
    id:"Featured",
    title:"Featured",
  },
  {
    id:"Web App",
    title:"Web App",
  },
  {
    id:"Mobile app",
    title:"Mobile app",
  },
  {
    id:"Design",
    title:"Design",
  },
  {
    id:"Content",
    title:"Content",
  }]
  
  return (
    <div className='portfolio' id='Portfolio'>
    <h1>Portfolio</h1>
    <ul> {
      list.map((item)=>(
        <Portfoliolist title={item.title}
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
        />
      ))
    }</ul>
   
     <div className="container">
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="images/interior.png"  className='img' alt="" />
        <h3>Banking App</h3>
      </div>
      
     </div>
    </div>
  )
}

export default Portfolio