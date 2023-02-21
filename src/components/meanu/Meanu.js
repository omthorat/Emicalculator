import React from 'react'
import './meanu.scss';

function Meanu({meanu,setMeanu}) {
  return (
    <div className={"meanu " + (!meanu && "active")}>
      <ul>
        <li onClick={()=>setMeanu(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMeanu(false)}>
            <a href="#Portfolio">Portfolio</a>
        </li> 
        <li onClick={()=>setMeanu(false)}>
        
            <a href="#Textimonials">Textimonials</a>
        </li> 
        <li onClick={()=>setMeanu(false)}>
            <a href="#Work">Wrok</a>
        </li> 
        <li onClick={()=>setMeanu(false)}>
            <a href="#Contact">Contact</a>
        </li>

      </ul>
    </div>
  )
}

export default Meanu
